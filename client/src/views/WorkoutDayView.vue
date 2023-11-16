<script setup lang="ts">
import WorkoutDayList from '@/components/WorkoutDay/WorkoutDayList.vue';
import BaseTitle from '@/components/Base/BaseTitle.vue';

import { useRoute } from 'vue-router';
import { computed } from 'vue';

import { useSavedWorkoutsStore } from '@/stores/savedWorkouts.store';

import { convertDateToCalenderFormat } from '@/utils/helpers/calender.helpers';
import { useWorkoutsQuery } from '@/utils/composables/queries/useWorkoutsQuery';

// QUERY
useWorkoutsQuery();

// STORE
const { getWorkoutsByDate } = useSavedWorkoutsStore();

// COMPOSABLES
const { date } = useRoute().params;

// REFS
const dateISO = computed(() => (Array.isArray(date) ? date[0] : date));

const formattedDate = computed(() => {
  return convertDateToCalenderFormat(dateISO.value);
});

const workoutsByDate = computed(() => {
  return getWorkoutsByDate(dateISO.value);
});
</script>

<template>
  <main>
    <BaseTitle>{{ formattedDate }}</BaseTitle>
    <WorkoutDayList :workouts="workoutsByDate" />
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
@/lib/helpers/calender.helpers @/config/gql/graphql
