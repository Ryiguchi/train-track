<script setup lang="ts">
import BaseAccordian from '@/components/base/BaseAccordian.vue';
import SelectExerciseAccordianList from './SelectExerciseAccordianList.vue';

import { capitalize, toRefs } from 'vue';

import { useExerciseStore } from '@/stores/exercises.store';

const props = defineProps<{
  handleSelectExercise: (exerciseName: string) => void;
  SetOpenList: (value: string | null) => void;
  openList: string | null;
}>();

const { SetOpenList, handleSelectExercise, openList } = toRefs(props);

const { groups, filterByGroup } = useExerciseStore();

function handleToggle(group: string) {
  if (openList.value === group) {
    SetOpenList.value(null);
  } else {
    SetOpenList.value(group);
  }
}
</script>

<template>
  <section>
    <BaseAccordian
      v-for="group in groups"
      :title="capitalize(group)"
      :isOpen="openList === group"
      @toggleIsOpen="handleToggle(group)"
      color="secondary"
    >
      <SelectExerciseAccordianList
        :items="filterByGroup(group)"
        @selectItem="handleSelectExercise"
        color="secondary"
      />
    </BaseAccordian>
  </section>
</template>

<style scoped></style>
