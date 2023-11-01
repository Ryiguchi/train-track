import { defineStore } from 'pinia';

export const useModalsStore = defineStore('modals', {
  state() {
    return {
      isAddExerciseModalOpen: false,
      isSetDailyGroupModalOpen: false,
    };
  },

  actions: {
    openAddExerciseModal() {
      this.isAddExerciseModalOpen = true;
    },

    closeAddExerciseModal() {
      this.isAddExerciseModalOpen = false;
    },

    openSetDailyGroupModal() {
      this.isSetDailyGroupModalOpen = true;
    },

    closeSetDailyGroupModal() {
      this.isSetDailyGroupModalOpen = false;
    },

    closeAllModals() {
      this.isAddExerciseModalOpen = false;
      this.isSetDailyGroupModalOpen = false;
    },
  },
});
