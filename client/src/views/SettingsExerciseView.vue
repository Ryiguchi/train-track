<script setup lang="ts">
import BaseButton from '@/components/Base/BaseButton.vue';
import BaseModal from '@/components/Base/BaseModal.vue';
import ModalAddExercise from '@/components/Modal/ModalAddExercise.vue';
import SettingsHeader from '@/components/Settings/SettingsHeader.vue';
import BaseSearchInput from '@/components/Base/BaseSearchInput.vue';

import { useExercisesQuery } from '@/utils/composables/queries/useExerciseQuery';
import { useSettingsModal } from '@/utils/composables/useSettingsModal';
import { useExercises } from '@/utils/composables/useExercises';

import type { Exercise } from '@/lib/graphQL/gql/graphql';

// QUERY
const { exerciseNames } = useExercisesQuery();

// HOOKS
const {
  isModalOpen,
  modalMode,
  itemToEdit,
  openEditItem,
  openAddNewItem,
  closeModal,
} = useSettingsModal();

const { getExerciseFromName } = useExercises();

function handleSelectExercise(exerciseName: string) {
  const exercise = getExerciseFromName(exerciseName);
  if (!exercise) return;

  openEditItem(exercise);
}
</script>

<template>
  <main>
    <div v-if="isModalOpen" class="overlay"></div>
    <Transition name="modal">
      <BaseModal v-if="isModalOpen">
        <ModalAddExercise
          :mode="modalMode"
          :exerciseToEdit="(itemToEdit as Exercise)"
          @closeModal="closeModal"
        />
      </BaseModal>
    </Transition>
    <SettingsHeader title="Exercises" :border="false" />
    <BaseSearchInput
      class="exercise-input"
      :items="exerciseNames"
      @selectedItem="handleSelectExercise"
    />
    <BaseButton @click="openAddNewItem">Add new exercise</BaseButton>
  </main>
</template>

<style scoped lang="sass">
main
  margin: $sp_10 0

  .exercise-input
    margin: $sp_8 0 $sp_10 0

.overlay
  @include overlay
</style>
