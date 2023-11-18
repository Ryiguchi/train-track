<script setup lang="ts">
import BaseRadioButtons from '../Base/BaseRadioButtons.vue';
import TheModalHeading from '../UI/TheModalHeading.vue';

import { useMutation } from '@urql/vue';

import { useModalsStore } from '@/stores/modals.store';
import { useToastStore } from '@/stores/toast.store';

import { useExercisesQuery } from '@/utils/composables/queries/useExerciseQuery';

import { useGroups } from '@/utils/composables/useGroups';

import { SET_TODAYS_GROUP } from '@/lib/graphQL/queries';
import {
  setTodaysGroupSuccessToast,
  setTodaysGroupFailedToast,
} from '@/utils/helpers/toasts.helpers';

import { todaysGroupDataValidator } from '@/lib/types/zod';
import { useUserStore } from '@/stores/user.store';

// STORE
const { closeSetDailyGroupModal } = useModalsStore();
const { showToast } = useToastStore();
const { userId } = useUserStore();

// QUERY
const { groupNames } = useExercisesQuery();
const { executeMutation: setTodaysGroup } = useMutation(SET_TODAYS_GROUP);

// COMPOSABLES
const { getIdFromName } = useGroups();

// FUNCTIONS
function handleSubmit(option: string) {
  const scheduleData = {
    groupId: getIdFromName(option),
    date: new Date().toISOString(),
  };

  try {
    const validScheduleData = todaysGroupDataValidator.parse(scheduleData);
    setTodaysGroup({ addScheduleData: validScheduleData, userId });
    closeSetDailyGroupModal();
    showToast(setTodaysGroupSuccessToast);
  } catch (error) {
    showToast(setTodaysGroupFailedToast(error));
  }
}

function handleCancel() {
  closeSetDailyGroupModal();
}
</script>

<template>
  <TheModalHeading>Set Today's Group:</TheModalHeading>
  <BaseRadioButtons
    :options="groupNames"
    @submit="handleSubmit"
    @cancel="handleCancel"
  >
    <template v-slot:button>Set</template>
  </BaseRadioButtons>
</template>

<style scoped lang="sass"></style>
