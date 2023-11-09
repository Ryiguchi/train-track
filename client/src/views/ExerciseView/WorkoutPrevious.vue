<script setup lang="ts">
import WorkoutHeader from '@/components/workout/WorkoutHeader.vue';
import type { Workout } from '@/lib/graphQL/gql/graphql';
import { toRefs, type PropType } from 'vue';
import { usePreviousWorkoutQuery } from '@/utils/composables/queries/usePreviousWorkoutQuery';
import BaseWorkoutTable from '@/components/base/BaseWorkoutTable.vue';

// PROPS
const { id } = defineProps({
  id: {
    type: Number,
    required: true,
  },
  color: {
    type: String,
    required: false,
    default: 'blue',
  },
});

const { previousWorkoutSets } = usePreviousWorkoutQuery(id);
</script>

<template>
  <section v-if="previousWorkoutSets.length" :class="color">
    <WorkoutHeader :color="color">Previous Workout</WorkoutHeader>
    <BaseWorkoutTable :sets="previousWorkoutSets" :color="color" />
  </section>
</template>

<style scoped lang="sass">
section
  @include section-styles
  &.orange
    border: 1px solid $c1-lt

  &.blue
    border: 1px solid $c2-lt

  &.green
    border: 1px solid $c3
</style>
@/config/gql/graphql
