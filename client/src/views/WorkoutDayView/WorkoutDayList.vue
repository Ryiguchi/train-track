<script setup lang="ts">
import BaseAccordian from '@/components/base/BaseAccordian.vue';
import BaseWorkoutTable from '@/components/base/BaseWorkoutTable.vue';
import { ref, type PropType } from 'vue';

const {} = defineProps({
  workouts: {
    type: Array as PropType<IWorkout[]>,
  },
});

const openList = ref<string | null>(null);

function handleToggleList(id: string) {
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
      v-for="(exercise, i) in workouts"
      :title="exercise.exercise.name"
      :isOpen="exercise.id === openList"
      color="secondary"
      @toggleIsOpen="handleToggleList(exercise.id)"
    >
      <div class="table">
        <BaseWorkoutTable :workout="exercise.sets" />
      </div>
    </BaseAccordian>
  </section>
</template>

<style scoped lang="sass">
section
  width: 100%
  .table
    width: 100%
    padding: $sp_6
    border-radius: 0 0 $br_md $br_md
    border: 1px solid $c2-lt
    border-top: 0
    background-color: $c2-lt

  .no-workouts
    margin-top: $sp_6
    p
      @include text-sm
      text-align: center
</style>
