<script setup lang="ts">
import WorkoutFormSet from './WorkoutFormSet.vue';

import { storeToRefs } from 'pinia';
import { useWorkoutStore } from '@/stores/workout.store';
import { computed } from 'vue';
import WorkoutHeader from './WorkoutHeader.vue';
import WorkoutHeading from './WorkoutHeading.vue';

const workoutStore = useWorkoutStore();

const { sets } = storeToRefs(workoutStore);

const setsLengthPlus1 = computed(() => sets.value.length + 1);
</script>

<template>
  <section>
    <WorkoutHeader>Current Workout</WorkoutHeader>
    <WorkoutHeading />

    <ul class="set-list">
      <WorkoutFormSet
        v-for="(set, i) in sets"
        :key="set.setNum"
        :set="i + 1"
        :weight="set.weight"
        :reps="set.reps"
      />

      <WorkoutFormSet :set="setsLengthPlus1" :isNew="true" />
    </ul>
  </section>
</template>

<style scoped lang="sass">
section
  background-color: $ex-view-color
  @include section-styles

  ul
    display: flex
    flex-direction: column
    list-style: none
    @include text-md
    color: $c-dk
</style>
