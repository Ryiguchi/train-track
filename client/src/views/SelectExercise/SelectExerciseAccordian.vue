<script setup lang="ts">
import BaseAccordian from '@/components/base/BaseAccordian.vue';
import SelectExerciseAccordianList from './SelectExerciseAccordianList.vue';

import { capitalize, toRefs } from 'vue';

import { useExercisesQuery } from '@/utils/composables/queries/useExerciseQuery';
import { useExercises } from '@/utils/composables/useExercises';

// PROPS
const props = defineProps<{
  handleSelectExercise: (exerciseName: string) => void;
  SetOpenList: (value: string | null) => void;
  openList: string | null;
}>();

const { SetOpenList, handleSelectExercise, openList } = toRefs(props);

// COMPOSABLES
const { groups } = useExercisesQuery();
const { filterByGroup } = useExercises();

// FUNCTIONS
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
      :title="capitalize(group.name)"
      :isOpen="openList === group.name"
      @toggleIsOpen="handleToggle(group.name)"
      :color="group.color"
      :key="group.id"
    >
      <SelectExerciseAccordianList
        :items="filterByGroup(group.name)"
        @selectItem="handleSelectExercise"
      />
    </BaseAccordian>
  </section>
</template>

<style scoped lang="sass"></style>
