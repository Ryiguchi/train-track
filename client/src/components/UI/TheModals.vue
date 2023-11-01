<script setup lang="ts">
import { useModalsStore } from '@/stores/modals.store';
import { storeToRefs } from 'pinia';
import ModalSelectGroup from '../modals/ModalSelectGroup.vue';
import ModalAddExercise from '../modals/ModalAddExercise.vue';

const { closeAddExerciseModal, closeSetDailyGroupModal } = useModalsStore();
const { isSetDailyGroupModalOpen, isAddExerciseModalOpen } = storeToRefs(
  useModalsStore()
);
</script>

<template>
  <base-modal
    v-if="isSetDailyGroupModalOpen"
    @overlay="closeSetDailyGroupModal()"
  >
    <ModalSelectGroup />
  </base-modal>
  <base-modal v-if="isAddExerciseModalOpen" @overlay="closeAddExerciseModal()">
    <ModalAddExercise />
  </base-modal>
</template>

<style scoped></style>
