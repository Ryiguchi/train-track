<script setup lang="ts">
import { useExerciseStore } from '@/stores/exercises.store';

import WorkoutForm from './WorkoutForm.vue';
import WorkoutPrevious from './WorkoutPrevious.vue';
import { computed } from 'vue';

const { getNameFromSlug } = useExerciseStore();
const { id } = defineProps({
  id: {
    type: String,
    required: true,
  },
});

const title = computed(() => getNameFromSlug(id));
</script>

<template>
  <main>
    <base-title>{{ title }}</base-title>
    <WorkoutForm />
    <WorkoutPrevious />
  </main>
</template>

<style scoped lang="sass">
main
  display: flex
  flex-direction: column
  gap: $sp_10
  align-items: center
  margin-top: $sp_10
</style>
