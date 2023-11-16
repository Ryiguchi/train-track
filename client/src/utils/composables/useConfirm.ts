import type { Exercise } from '@/lib/graphQL/gql/graphql';
import { ref } from 'vue';

export function useConfirm() {
  const confirmTitle = ref<null | string>(null);
  const confirmText = ref('');
  const isConfirmModalOpen = ref(false);
  const confirmType = ref<string | null>(null);
  const confirmGroupId = ref<number | null>(null);

  function openConfirmDeleteGroup(group: IGroupWithEnum) {
    confirmTitle.value = 'Are you sure?';
    confirmText.value = `You are about to delete the group "${group.name}"! If you delete this group, it will also be removed from all of the exercises that belong to it! Are you sure you want to continue?`;
    isConfirmModalOpen.value = true;
    confirmType.value = 'delete';
    confirmGroupId.value = group.id;
  }

  function openConfirmDeleteExercise(exercise: Exercise) {
    confirmTitle.value = 'Are you sure?';
    confirmText.value = `You are about to delete the exercise "${exercise.name}"! If you delete this exercise, all workouts that belong gto this exercise will also be deleted! Are you sure you want to continue?`;
    isConfirmModalOpen.value = true;
    confirmType.value = 'delete';
    confirmGroupId.value = exercise.id;
  }

  function closeConfirm() {
    confirmText.value = '';
    confirmTitle.value = null;
    isConfirmModalOpen.value = false;
    confirmType.value = null;
  }

  return {
    confirmTitle,
    confirmText,
    isConfirmModalOpen,
    confirmType,
    confirmGroupId,
    openConfirmDeleteGroup,
    openConfirmDeleteExercise,
    closeConfirm,
  };
}
