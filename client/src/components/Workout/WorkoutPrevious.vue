<script setup lang="ts">
import WorkoutHeader from '@/components/Workout/WorkoutHeader.vue';
import { usePreviousWorkoutQuery } from '@/utils/composables/queries/usePreviousWorkoutQuery';
import BaseWorkoutTable from '@/components/Base/BaseWorkoutTable.vue';

// PROPS
const { id } = defineProps<{ id: number }>();

// HOOKS
const { previousWorkoutSets } = usePreviousWorkoutQuery(id);
</script>

<template>
  <section v-if="previousWorkoutSets.length">
    <WorkoutHeader>Previous Workout</WorkoutHeader>
    <BaseWorkoutTable color="primary" :sets="previousWorkoutSets" />
  </section>
</template>

<style scoped lang="sass">
section
  @include section-styles
</style>
@/config/gql/graphql
