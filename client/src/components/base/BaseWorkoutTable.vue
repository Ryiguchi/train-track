<script setup lang="ts">
import type { PropType } from 'vue';
import WorkoutHeading from '../workout/WorkoutHeading.vue';
import WorkoutTableSet from '../workout/WorkoutTableSet.vue';

const { workout } = defineProps({
  workout: {
    type: Array as PropType<IWorkoutSetData[]>,
    required: true,
  },
  color: {
    type: String,
    required: false,
    default: 'dark',
  },
});
</script>

<template>
  <ul>
    <WorkoutTableSet
      v-for="set in workout"
      :set="set"
      :key="set.id"
      :color="color"
    />
  </ul>
</template>

<style scoped lang="sass">
ul
  display: flex
  flex-direction: column
  justify-content: center
  list-style: none
  @include text-sm
</style>
