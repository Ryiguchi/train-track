<script setup lang="ts">
import { storeToRefs } from 'pinia';
import WorkoutHeader from '@/components/workout/WorkoutHeader.vue';

import { useWorkoutStore } from '@/stores/workout.store';

const workoutStore = useWorkoutStore();
const { previousWorkout } = storeToRefs(workoutStore);
</script>

<template>
  <section>
    <WorkoutHeader color="secondary">Previous Workout</WorkoutHeader>
    <base-workout-table :workout="previousWorkout" color="secondary" />
  </section>
</template>

<style scoped lang="sass">
section
  @include section-styles
  border: 1px solid $c2-lt
</style>
