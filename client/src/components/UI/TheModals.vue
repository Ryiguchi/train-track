<script setup lang="ts">
import { useModalsStore } from '@/stores/modals.store';
import { storeToRefs } from 'pinia';
import ModalSelectGroup from '../Modal/ModalSelectGroup.vue';
import ModalAddExercise from '../Modal/ModalAddExercise.vue';
import { computed } from 'vue';

// HOOKS
const { closeAllModals } = useModalsStore();
const { isSetDailyGroupModalOpen, isAddExerciseModalOpen } = storeToRefs(
  useModalsStore()
);

// REFS
const someModalIsOpen = computed(() => {
  return isSetDailyGroupModalOpen.value || isAddExerciseModalOpen.value;
});
</script>
<template>
  <div v-if="someModalIsOpen" class="overlay" @click="closeAllModals"></div>

  <Transition name="modal">
    <base-modal v-if="isSetDailyGroupModalOpen">
      <ModalSelectGroup />
    </base-modal>
  </Transition>
  <Transition name="modal">
    <base-modal v-if="isAddExerciseModalOpen">
      <ModalAddExercise @closeModal="closeAllModals" />
    </base-modal>
  </Transition>
</template>

<style scoped lang="sass">
.overlay
  @include overlay
</style>
