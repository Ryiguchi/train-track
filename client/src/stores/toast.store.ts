import { defineStore } from 'pinia';

export const useToastStore = defineStore('toast', {
  state() {
    return {
      toast: null as IToast | null,
      timer: null as NodeJS.Timeout | null,
    };
  },

  actions: {
    showToast(toast: IToastData) {
      const toastWithId = { ...toast, id: this.toast ? this.toast.id + 1 : 1 };
      this.toast = toastWithId;
      if (this.timer) {
        clearTimeout(this.timer);
      }

      this.timer = setTimeout(() => {
        this.toast = null;
      }, 3000);
    },
  },
});
