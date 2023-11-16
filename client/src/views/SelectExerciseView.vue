<script setup lang="ts">
import BaseSearchInput from '@/components/Base/BaseSearchInput.vue';
import SelectExerciseAccordian from '@/components/SelectExerciseAccordian/SelectExerciseAccordian.vue';

import { ref } from 'vue';
import { storeToRefs } from 'pinia';
import { useRouter } from 'vue-router';

import { useModalsStore } from '@/stores/modals.store';
import { useUserStore } from '@/stores/user.store';

import { useExercisesQuery } from '@/utils/composables/queries/useExerciseQuery';
import { useExercises } from '@/utils/composables/useExercises';

// STORE
const { openAddExerciseModal, openSetDailyGroupModal } = useModalsStore();
const { userId } = storeToRefs(useUserStore());

// QUERY
const { exerciseNames, isTodaysGroupSet } = useExercisesQuery();

// HOOKS
const router = useRouter();
const { getSlugFromName } = useExercises();

// REFS
const openList = ref<string | null>(null);

// FUNCTIONS
function goToExercise(slug: string) {
  router.push(`/exercises/${slug}`);
}

function handleFocused() {
  openList.value = null;
}

function SetOpenList(value: string | null) {
  openList.value = value;
}

function handleSelectFromInput(name: string) {
  const slug = getSlugFromName(name);
  if (!slug) return;

  goToExercise(slug);
}
</script>

<template>
  <main>
    <BaseSearchInput
      class="search"
      :items="exerciseNames"
      @selected-item="handleSelectFromInput"
      @focused="handleFocused"
      placeholder="Search for an exercise..."
    />
    <SelectExerciseAccordian
      :handleSelectExercise="goToExercise"
      class="accordian"
      :openList="openList"
      :SetOpenList="SetOpenList"
    />

    <base-button color="primary" @click="openAddExerciseModal()"
      >add exercise</base-button
    >

    <base-button
      v-if="!isTodaysGroupSet"
      color="secondary"
      @click="openSetDailyGroupModal()"
      >set today's group</base-button
    >
  </main>
</template>

<style scoped lang="sass">
.search,
.accordian
  margin-bottom: $sp_8
  background-color: rgba(255,255,255,.05)
  border-radius: $br_lg

button
  margin-top: $sp_8
</style>
