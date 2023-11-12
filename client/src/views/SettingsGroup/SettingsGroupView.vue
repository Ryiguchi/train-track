<script setup lang="ts">
import { useExercisesQuery } from '@/utils/composables/queries/useExerciseQuery';
import SettingsGroupHeader from './SettingsGroupHeader.vue';
import SettingsGroupItem from './SettingsGroupItem.vue';
import BaseButton from '@/components/base/BaseButton.vue';
import BaseConfirm from '@/components/base/BaseConfirm.vue';
import { capitalize, ref } from 'vue';
import BaseModal from '@/components/base/BaseModal.vue';
import ModalAddGroup from '@/components/modals/ModalAddGroup.vue';
import { useMutation } from '@urql/vue';
import { DELETE_GROUP } from '@/lib/graphQL/queries';
import { useToastStore } from '@/stores/toast.store';
import {
  deleteGroupFailedToast,
  deleteGroupSuccessToast,
} from '@/utils/helpers/toasts.helpers';

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

// REFS
// -- confirm
const confirmTitle = ref<null | string>(null);
const confirmText = ref('');
const isConfirmModalOpen = ref(false);
const confirmType = ref<string | null>(null);
const confirmGroupId = ref<number | null>(null);
// -- modal
const isGroupModalOpen = ref(false);
const groupModalMode = ref<'new' | 'edit'>('edit');
const groupToEdit = ref<IGroupWithEnum | null>(null);

// FUNCTIONS
function openConfirmDeleteGroup(group: IGroupWithEnum) {
  confirmTitle.value = 'Are you sure?';
  confirmText.value = `You are about to delete the group "${capitalize(
    group.name
  )}"! If you delete this group, it will also be removed from all of the exercises that belong to it! Are you sure you want to continue?`;
  isConfirmModalOpen.value = true;
  confirmType.value = 'delete';
  confirmGroupId.value = group.id;
}

function closeConfirm() {
  confirmText.value = '';
  confirmTitle.value = null;
  isConfirmModalOpen.value = false;
  confirmType.value = null;
}

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

function openEditGroup(group: IGroupWithEnum) {
  isGroupModalOpen.value = true;
  groupModalMode.value = 'edit';
  groupToEdit.value = group;
}

function openAddNewGroup() {
  isGroupModalOpen.value = true;
  groupModalMode.value = 'new';
  groupToEdit.value = null;
}

function closeModal() {
  isGroupModalOpen.value = false;
  groupModalMode.value = 'edit';
  groupToEdit.value = null;
}
</script>

<template>
  <main>
    <BaseConfirm
      v-if="isConfirmModalOpen"
      :title="confirmTitle"
      :text="confirmText"
      @cancel="closeConfirm"
      @confirm="handleConfirm"
    />
    <BaseModal v-if="isGroupModalOpen">
      <ModalAddGroup
        :mode="groupModalMode"
        :groupToEdit="groupToEdit"
        @closeModal="closeModal"
      />
    </BaseModal>
    <SettingsGroupHeader title="Your Groups" />
    <ul>
      <SettingsGroupItem
        v-for="group in groups"
        :group="group"
        :key="group.id"
        @deleteGroup="openConfirmDeleteGroup"
        @editGroup="openEditGroup"
      />
    </ul>
    <BaseButton @click="openAddNewGroup">Add new group</BaseButton>
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
</style>
