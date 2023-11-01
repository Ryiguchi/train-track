<script setup lang="ts">
import BaseSelectInput from '../../components/base/BaseSelectInput.vue';
import SelectExerciseAccordian from './SelectExerciseAccordian.vue';

import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useExerciseStore } from '@/stores/exercises.store';
import { useCalenderStore } from '@/stores/calender.store';
import { useModalsStore } from '@/stores/modals.store';
import { storeToRefs } from 'pinia';

const router = useRouter();

const exerciseStore = useExerciseStore();
const { exerciseNames } = storeToRefs(exerciseStore);
const { getSlugFromName } = exerciseStore;

const { isTodaysGroupSet } = storeToRefs(useCalenderStore());

const { openAddExerciseModal, openSetDailyGroupModal } = useModalsStore();

function goToExercise(exerciseName: string) {
  const slug = getSlugFromName(exerciseName);
  if (!slug) return;

  router.push(`/exercises/${slug}`);
}
const openList = ref<string | null>(null);

function handleFocused() {
  openList.value = null;
}

function SetOpenList(value: string | null) {
  openList.value = value;
}
</script>

<template>
  <main>
    <BaseSelectInput
      class="search"
      :items="exerciseNames"
      @selected-item="goToExercise"
      @focused="handleFocused"
    />
    <SelectExerciseAccordian
      :handleSelectExercise="goToExercise"
      class="accordian"
      :openList="openList"
      :SetOpenList="SetOpenList"
    />

    <base-button color="ghost" @click="openAddExerciseModal()"
      >add exercise</base-button
    >
    <base-button
      v-if="!isTodaysGroupSet"
      color="primary"
      @click="openSetDailyGroupModal()"
      >set today's group</base-button
    >
  </main>
</template>

<style scoped lang="sass">
.search,
.accordian
  margin-bottom: $sp_8
button
  margin-top: $sp_8
</style>
