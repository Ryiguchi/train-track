<script setup lang="ts">
import { capitalize, createSlug } from '@/helpers/general.helpers';
import { ref } from 'vue';
import { useExerciseStore } from '@/stores/exercises.store';
import { useModalsStore } from '@/stores/modals.store';

const options = ['push', 'pull', 'legs'];

const { addExercise } = useExerciseStore();

const { closeAddExerciseModal } = useModalsStore();
const enteredExercise = ref('');

function handleSubmit(option: string) {
  const exerciseData = {
    name: capitalize(enteredExercise.value),
    slug: createSlug(enteredExercise.value),
    group: option.toLowerCase(),
  };

  addExercise(exerciseData);
  closeAddExerciseModal();
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
    <base-input @change-value="handleChangeValue" name="exercise"
      >Exercise name</base-input
    >
    <base-radio-buttons
      :options="options"
      @submit="handleSubmit"
      @cancel="handleCancel"
    >
      Exercise group:
      <template v-slot:button>Set workout</template>
      <template v-slot:cancel>cancel</template>
    </base-radio-buttons>
  </div>
</template>

<style scoped lang="sass">
.wrapper
  display: flex
  flex-direction: column
  gap: $sp_8
</style>
