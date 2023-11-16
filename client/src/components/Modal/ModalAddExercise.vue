<script setup lang="ts">
import BaseInput from '../Base/BaseInput.vue';
import BaseButton from '../Base/BaseButton.vue';
import BaseRadioButtons from '../Base/BaseRadioButtons.vue';
import TheModalHeading from '../UI/TheModalHeading.vue';
import BaseConfirm from '../Base/BaseConfirm.vue';

import { useMutation } from '@urql/vue';
import { ref, type PropType, computed } from 'vue';

import { useExercisesQuery } from '@/utils/composables/queries/useExerciseQuery';
import {
  ADD_EXERCISE,
  UPDATE_EXERCISE,
  DELETE_EXERCISE,
} from '@/lib/graphQL/queries';
import { useGroups } from '@/utils/composables/useGroups';
import { useConfirm } from '@/utils/composables/useConfirm';
import { useToastStore } from '@/stores/toast.store';
import { capitalize, createSlug } from '@/utils/helpers/general.helpers';
import {
  addExerciseFailedToast,
  addExerciseSuccessToast,
  deleteExerciseSuccessToast,
  deleteExerciseFailedToast,
} from '@/utils/helpers/toasts.helpers';

import {
  exerciseDataValidator,
  updateExerciseDataValidator,
} from '@/lib/types/zod';
import type { Exercise } from '@/lib/graphQL/gql/graphql';

// PROPS
const { mode, exerciseToEdit } = defineProps({
  mode: {
    type: String as PropType<'new' | 'edit'>,
    required: false,
    default: 'new',
  },

  exerciseToEdit: {
    type: Object as PropType<Exercise>,
    required: false,
  },
});

// EMITS
const emits = defineEmits<{
  closeModal: [];
}>();

// STORE
const enteredExercise = ref(exerciseToEdit ? exerciseToEdit.name : '');
const { showToast } = useToastStore();

// QUERY
const { groupNames, refreshExercises } = useExercisesQuery();

const {
  executeMutation: addExercise,
  error: errorAddingExercise,
  fetching: fetchingAddingExercise,
  data: addedExercise,
} = useMutation(ADD_EXERCISE);

const {
  executeMutation: updateExercise,
  error: errorUpdatingExercise,
  fetching: fetchingUpdatingExercise,
  data: updatedExercise,
} = useMutation(UPDATE_EXERCISE);

const {
  executeMutation: deleteExercise,
  error: errorDeletingExercise,
  fetching: fetchingDeletingExercise,
  data: deletedExercise,
} = useMutation(DELETE_EXERCISE);

// HOOKS
const { getIdFromName } = useGroups();
const {
  confirmTitle,
  confirmText,
  isConfirmModalOpen,
  openConfirmDeleteExercise,
  closeConfirm,
} = useConfirm();

// REFS
const headingText = computed(() => {
  return mode === 'new'
    ? 'Add a New Exercise:'
    : `Editing Exercise "${capitalize(exerciseToEdit?.name!)}"`;
});

const buttonText = computed(() => {
  return mode === 'new' ? 'Add' : 'Update';
});

// FUNCTIONS
async function handleSubmit(option: string) {
  const exerciseData = {
    name: capitalize(enteredExercise.value),
    slug: createSlug(enteredExercise.value),
    groupId: getIdFromName(option),
  };

  try {
    if (mode === 'new') {
      const validExerciseData = exerciseDataValidator.parse(exerciseData);

      await addExercise({
        exerciseData: validExerciseData,
      });
    }

    if (mode === 'edit') {
      const exerciseDataWithId = {
        ...exerciseData,
        id: exerciseToEdit?.id,
      };

      const validExerciseData =
        updateExerciseDataValidator.parse(exerciseDataWithId);

      await updateExercise({ exerciseData: validExerciseData });
    }

    if (errorAddingExercise.value) {
      throw errorAddingExercise.value;
    }

    if (errorUpdatingExercise.value) {
      throw errorUpdatingExercise.value;
    }

    if (updatedExercise.value || addedExercise.value) {
      emits('closeModal');
      showToast(addExerciseSuccessToast);
    }
  } catch (error: any) {
    showToast(addExerciseFailedToast(error));
  }
}

function handleCancel() {
  emits('closeModal');
}

function handleChangeValue(value: string) {
  enteredExercise.value = value;
}

async function handleConfirmDelete() {
  if (!exerciseToEdit) return;

  try {
    await deleteExercise({ id: exerciseToEdit.id });

    if (errorDeletingExercise.value) {
      throw errorDeletingExercise.value;
    }

    if (deletedExercise.value) {
      refreshExercises();
      emits('closeModal');
      showToast(deleteExerciseSuccessToast);
    }
  } catch (error: any) {
    showToast(deleteExerciseFailedToast(error));
  }
}
</script>

<template>
  <BaseConfirm
    v-if="isConfirmModalOpen"
    :title="confirmTitle"
    :text="confirmText"
    @cancel="closeConfirm"
    @confirm="handleConfirmDelete"
  />
  <TheModalHeading>{{ headingText }}</TheModalHeading>
  <div class="wrapper">
    <BaseInput
      @change-value="handleChangeValue"
      name="exercise"
      color="ghost"
      :value="exerciseToEdit?.name"
      >Exercise name:</BaseInput
    >
    <BaseRadioButtons
      :options="groupNames"
      @submit="handleSubmit"
      @cancel="handleCancel"
      :initialItem="exerciseToEdit?.group.name"
    >
      <h2>Exercise group:</h2>
      <template v-slot:button>{{ buttonText }}</template>
      <template v-slot:cancel>cancel</template>
    </BaseRadioButtons>
    <div class="button-wrapper">
      <BaseButton
        v-if="exerciseToEdit"
        color="secondary"
        size="small"
        @click="openConfirmDeleteExercise"
        >Delete</BaseButton
      >
    </div>
  </div>
</template>

<style scoped lang="sass">
.wrapper
  display: flex
  flex-direction: column
  gap: $sp_8

  h2
    font-size: 1.4rem
    color: $c1
    font-weight: 400
    margin-bottom: $sp_5

  .button-wrapper
    display: flex
    justify-content: center
    margin-top: -2rem
</style>
@/lib/helpers/general.helpers
