<script setup lang="ts">
import SettingsHeader from '@/components/Settings/SettingsHeader.vue';
import SettingsGroupItem from '@/components/Settings/SettingsGroup/SettingsGroupItem.vue';
import BaseButton from '@/components/Base/BaseButton.vue';
import BaseConfirm from '@/components/Base/BaseConfirm.vue';
import BaseModal from '@/components/Base/BaseModal.vue';
import ModalAddGroup from '@/components/Modal/ModalAddGroup.vue';

import { useMutation } from '@urql/vue';

import { DELETE_GROUP } from '@/lib/graphQL/queries';
import { useToastStore } from '@/stores/toast.store';
import { useExercisesQuery } from '@/utils/composables/queries/useExerciseQuery';
import {
  deleteGroupFailedToast,
  deleteGroupSuccessToast,
} from '@/utils/helpers/toasts.helpers';
import { useConfirm } from '@/utils/composables/useConfirm';
import { useSettingsModal } from '@/utils/composables/useSettingsModal';

// STORE
const { showToast } = useToastStore();

// QUERY
const { groups } = useExercisesQuery();
const {
  executeMutation: deleteGroup,
  data,
  error,
  fetching,
} = useMutation(DELETE_GROUP);

// HOOKS
const {
  confirmTitle,
  confirmText,
  isConfirmModalOpen,
  confirmType,
  confirmGroupId,
  openConfirmDeleteGroup,
  closeConfirm,
} = useConfirm();

const {
  isModalOpen,
  modalMode,
  itemToEdit,
  openEditItem,
  openAddNewItem,
  closeModal,
} = useSettingsModal();

async function handleConfirm() {
  try {
    if (confirmType.value === 'delete' && confirmGroupId.value) {
      await deleteGroup({ id: confirmGroupId.value });
    }

    if (data.value) {
      showToast(deleteGroupSuccessToast);
      closeConfirm();
    }
    if (error.value) {
      throw error.value;
    }
    if (fetching.value) {
    }
  } catch (error: any) {
    showToast(deleteGroupFailedToast(error));
  }
}
</script>

<template>
  <main>
    <div v-if="isConfirmModalOpen || isModalOpen" class="overlay"></div>
    <BaseConfirm
      v-if="isConfirmModalOpen"
      :title="confirmTitle"
      :text="confirmText"
      @cancel="closeConfirm"
      @confirm="handleConfirm"
    />
    <Transition name="modal">
      <BaseModal v-if="isModalOpen">
        <ModalAddGroup
          :mode="modalMode"
          :groupToEdit="itemToEdit as IGroupWithEnum"
          @closeModal="closeModal"
        />
      </BaseModal>
    </Transition>
    <SettingsHeader title="Groups" />
    <ul>
      <SettingsGroupItem
        v-for="group in groups"
        :group="group"
        :key="group.id"
        @deleteGroup="openConfirmDeleteGroup"
        @editGroup="openEditItem"
      />
    </ul>
    <BaseButton @click="openAddNewItem">Add new group</BaseButton>
  </main>
</template>

<style scoped lang="sass">
main
  margin: $sp_10 0

  ul
    display: flex
    flex-direction: column
    gap: $sp_6
    margin: $sp_8 0 $sp_10 0

.overlay
  @include overlay
</style>
