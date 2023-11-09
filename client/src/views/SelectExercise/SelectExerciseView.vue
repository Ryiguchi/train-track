<script setup lang="ts">
import BaseSelectInput from '../../components/base/BaseSelectInput.vue';
import SelectExerciseAccordian from './SelectExerciseAccordian.vue';

import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useModalsStore } from '@/stores/modals.store';
import { useUserStore } from '@/stores/user.store';
import { storeToRefs } from 'pinia';
import { useExercisesQuery } from '@/utils/composables/queries/useExerciseQuery';

// STORE
const { openAddExerciseModal, openSetDailyGroupModal } = useModalsStore();
const { userId } = storeToRefs(useUserStore());

// QUERY
const { exerciseNames, isTodaysGroupSet } = useExercisesQuery();

// COMPOSABLES
const router = useRouter();

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
