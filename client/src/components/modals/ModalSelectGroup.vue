<script setup lang="ts">
import { useMutation } from '@urql/vue';

import { useModalsStore } from '@/stores/modals.store';
import { useToastStore } from '@/stores/toast.store';

import { useExercisesQuery } from '@/utils/composables/queries/useExerciseQuery';
import { useGroups } from '@/utils/composables/useGroups';

import { SET_TODAYS_GROUP } from '@/lib/graphQL/queries';
import { todaysGroupDataValidator } from '@/lib/types/zod';
import {
  setTodaysGroupSuccessToast,
  setTodaysGroupFailedToast,
} from '@/utils/helpers/toasts.helpers';

// STORE
const { closeSetDailyGroupModal } = useModalsStore();
const { showToast } = useToastStore();

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
    setTodaysGroup({ scheduleData: validScheduleData });
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
  <base-radio-buttons
    :options="groupNames"
    @submit="handleSubmit"
    @cancel="handleCancel"
  >
    Choose a workout group for today:
    <template v-slot:button>Set workout</template>
  </base-radio-buttons>
</template>

<style scoped lang="sass"></style>
