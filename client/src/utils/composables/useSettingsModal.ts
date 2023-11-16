import type { Exercise } from '@/lib/graphQL/gql/graphql';
import { ref } from 'vue';

export function useSettingsModal() {
  const isModalOpen = ref(false);
  const modalMode = ref<'new' | 'edit'>('edit');
  const itemToEdit = ref<IGroupWithEnum | Exercise | null>(null);

  function openEditItem(item: IGroupWithEnum | Exercise) {
    isModalOpen.value = true;
    modalMode.value = 'edit';
    itemToEdit.value = item;
  }

  function openAddNewItem() {
    isModalOpen.value = true;
    modalMode.value = 'new';
    itemToEdit.value = null;
  }

  function closeModal() {
    isModalOpen.value = false;
    modalMode.value = 'edit';
    itemToEdit.value = null;
  }

  return {
    isModalOpen,
    modalMode,
    itemToEdit,
    openEditItem,
    openAddNewItem,
    closeModal,
  };
}
