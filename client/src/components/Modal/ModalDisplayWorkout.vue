<script setup lang="ts">
import BaseButton from '../Base/BaseButton.vue';
import WorkoutHeader from '../Workout/WorkoutHeader.vue';
import BaseWorkoutTable from '../Base/BaseWorkoutTable.vue';

import type { Workout } from '@/lib/graphQL/gql/graphql';

// PROPS
const { date, workout } = defineProps<{
  date: string;
  workout: Workout | null;
}>();

const emits = defineEmits<{ close: [] }>();
</script>

<template>
  <section v-if="workout">
    <WorkoutHeader class="header">{{ date }}</WorkoutHeader>
    <BaseWorkoutTable :sets="workout.sets" color="primary" />
    <BaseButton color="secondary" size="sm" @click="emits('close')"
      >close</BaseButton
    >
  </section>
</template>

<style scoped lang="sass">
section
  display: flex
  flex-direction: column
  align-items: center
  gap: $sp_6

  button
    margin-top: $sp_4
</style>
@/config/gql/graphql
