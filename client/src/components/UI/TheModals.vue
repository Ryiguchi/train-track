<script setup lang="ts">
import { useModalsStore } from '@/stores/modals.store';
import { storeToRefs } from 'pinia';
import ModalSelectGroup from '../modals/ModalSelectGroup.vue';
import ModalAddExercise from '../modals/ModalAddExercise.vue';
import { computed } from 'vue';

const { closeAllModals } = useModalsStore();
const { isSetDailyGroupModalOpen, isAddExerciseModalOpen } = storeToRefs(
  useModalsStore()
);

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
      <ModalAddExercise />
    </base-modal>
  </Transition>
</template>

<style scoped lang="sass">
.overlay
  position: absolute
  top: 0
  left: 0
  width: 100vw
  height: 100vh
  background-color: rgba(0, 0, 0, .1)
  z-index: 50
  backdrop-filter:  blur(2px) brightness(50%)
</style>
