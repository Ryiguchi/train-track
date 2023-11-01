<script setup lang="ts">
import WorkoutDayList from './WorkoutDayList.vue';

import { convertDateToCalenderFormat } from '@/helpers/calender.helpers';
import { useRoute } from 'vue-router';
import { useSavedWorkoutsStore } from '@/stores/savedWorkouts.store';
import { computed } from 'vue';
('');

const route = useRoute();
const { date } = route.params;

const dateISO = computed(() => (Array.isArray(date) ? date[0] : date));

const formattedDate = computed(() => {
  return convertDateToCalenderFormat(dateISO.value);
});

const { getWorkoutsByDate } = useSavedWorkoutsStore();
const workouts = computed(() => getWorkoutsByDate(dateISO.value));
</script>

<template>
  <main>
    <base-title>{{ formattedDate }}</base-title>
    <WorkoutDayList :workouts="workouts" />
  </main>
</template>

<style scoped lang="sass">
main
  display: flex
  flex-direction: column
  align-items: center
  gap: $sp_6
  margin-top: $sp_8
</style>
