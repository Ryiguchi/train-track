<script setup lang="ts">
import BaseSelectInput from '../components/base/BaseSelectInput.vue';
import { useRouter } from 'vue-router';
import { createSlug } from '../helpers/general.helpers.ts';

const router = useRouter();

const list = [
  { name: 'Bench Press', slug: 'bench-press', group: 'push' },
  { name: 'Incline Bench Press', slug: 'incline-bench-press', group: 'push' },
  { name: 'Cable Crossovers', slug: 'cable-crossovers', group: 'pull' },
  { name: 'Tricep Extension', slug: 'tricep-extension', group: 'pull' },
  { name: 'Bent-over Rows', slug: 'bent-over-rows', group: 'push' },
  { name: 'Push-ups', slug: 'push-ups', group: 'pull' },
  { name: 'Sit-ups', slug: 'sit-ups', group: 'legs' },
  { name: 'Dumbell Curls', slug: 'dumbell-curls', group: 'legs' },
];

const listNames = list.map(item => item.name);

function goToExercise(exerciseName: string) {
  const exercise = list.find(item => item.name === exerciseName);
  if (!exercise) return;

  router.push(`/exercises/${exercise.slug}`);
}
</script>

<template>
  <BaseSelectInput :items="listNames" @selected-item="goToExercise" />
</template>

<style scoped lang="sass"></style>
