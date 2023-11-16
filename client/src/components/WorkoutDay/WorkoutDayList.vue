<script setup lang="ts">
import BaseAccordian from '@/components/Base/BaseAccordian.vue';
import BaseWorkoutTable from '@/components/Base/BaseWorkoutTable.vue';

import { ref, toRefs } from 'vue';

import { type Workout } from '@/lib/graphQL/gql/graphql';

// PROPS
const props = defineProps<{
  workouts: Workout[];
}>();

// REFS
const { workouts } = toRefs(props);
const openList = ref<number | null>(null);

// FUNCTIONS
function handleToggleList(id: number) {
  openList.value = openList.value === id ? null : id;
}
</script>

<template>
  <section>
    <div class="no-workouts" v-if="!workouts || workouts.length === 0">
      <p>There are no saved workouts for this day.</p>
    </div>
    <BaseAccordian
      v-else
      v-for="exercise in workouts"
      :title="exercise.exercise"
      :isOpen="exercise.id === openList"
      color="blue"
      @toggleIsOpen="handleToggleList(exercise.id)"
    >
      <div class="table">
        <BaseWorkoutTable :sets="exercise.sets" />
      </div>
    </BaseAccordian>
  </section>
</template>

<style scoped lang="sass">
section
  width: 100%
  background-color: rgba(255,255,255, .05)
  border-radius: $br_lg

  .no-workouts
    margin-top: $sp_6

    p
      @include text-sm
      text-align: center
  .table
    width: 100%
    padding: $sp_6
    border-radius: 0 0 $br_md $br_md
    border: 1px solid $c1
    border-top: 0
    background-color: $c1
</style>
@/config/gql/graphql
