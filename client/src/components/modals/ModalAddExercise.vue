<script setup lang="ts">
import { capitalize, createSlug } from '@/utils/helpers/general.helpers';
import { ref } from 'vue';
import { useModalsStore } from '@/stores/modals.store';
import { useExercisesQuery } from '@/utils/composables/queries/useExerciseQuery';
import { useGroups } from '@/utils/composables/useGroups';
import { useMutation } from '@urql/vue';
import { ADD_EXERCISE } from '@/lib/graphQL/queries';
import { exerciseDataValidator } from '@/lib/types/zod';
import { useToastStore } from '@/stores/toast.store';
import {
  addExerciseFailedToast,
  addExerciseSuccessToast,
} from '@/utils/helpers/toasts.helpers';
import BaseInput from '../base/BaseInput.vue';
import BaseRadioButtons from '../base/BaseRadioButtons.vue';

// STORE
const { closeAddExerciseModal } = useModalsStore();
const enteredExercise = ref('');
const { showToast } = useToastStore();

// QUERY
const { groupNames } = useExercisesQuery();
const {
  executeMutation: addExercise,
  error,
  fetching,
  data,
} = useMutation(ADD_EXERCISE);

// COMPOSABLES
const { getIdFromName } = useGroups();

// FUNCTIONS
async function handleSubmit(option: string) {
  const exerciseData = {
    name: capitalize(enteredExercise.value),
    slug: createSlug(enteredExercise.value),
    groupId: getIdFromName(option),
  };

  try {
    const validExerciseData = exerciseDataValidator.parse(exerciseData);

    await addExercise({
      exerciseData: validExerciseData,
    });

    if (error.value) {
      throw error.value;
    }

    if (data.value) {
      closeAddExerciseModal();
      showToast(addExerciseSuccessToast);
    }
  } catch (error: any) {
    showToast(addExerciseFailedToast(error));
  }
}

function handleCancel() {
  closeAddExerciseModal();
}

function handleChangeValue(value: string) {
  enteredExercise.value = value;
}
</script>

<template>
  <div class="wrapper">
    <BaseInput @change-value="handleChangeValue" name="exercise" color="ghost"
      >Exercise name</BaseInput
    >
    <BaseRadioButtons
      :options="groupNames"
      @submit="handleSubmit"
      @cancel="handleCancel"
    >
      Exercise group:
      <template v-slot:button>Add</template>
      <template v-slot:cancel>cancel</template>
    </BaseRadioButtons>
  </div>
</template>

<style scoped lang="sass">
.wrapper
  display: flex
  flex-direction: column
  gap: $sp_8
  margin-top: $sp_6
</style>
@/lib/helpers/general.helpers
