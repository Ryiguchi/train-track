<script setup lang="ts">
import { capitalize, computed, ref } from 'vue';
import BaseInput from '../base/BaseInput.vue';
import { EColors } from '@/lib/types/enums';
import { useExercisesQuery } from '@/utils/composables/queries/useExerciseQuery';
import { newGroupValidator, editGroupValidator } from '@/lib/types/zod';
import TheModalButtons from '../UI/TheModalButtons.vue';
import { useMutation } from '@urql/vue';
import { ADD_GROUP, UPDATE_GROUP } from '@/lib/graphQL/queries';
import { useToastStore } from '@/stores/toast.store';
import {
  addGroupSuccessToast,
  addGroupFailedToast,
} from '@/utils/helpers/toasts.helpers';

// PROPS
const { mode, groupToEdit } = defineProps<{
  mode: 'edit' | 'new';
  groupToEdit: IGroupWithEnum | null;
}>();

// EMITS
const emits = defineEmits<{
  closeModal: [];
}>();

// STORE
const { showToast } = useToastStore();

// QUERY
const { groups } = useExercisesQuery();
const {
  executeMutation: addGroup,
  data: dataAdd,
  error: errorAdd,
  fetching: fetchingAdd,
} = useMutation(ADD_GROUP);

const {
  executeMutation: updateGroup,
  data: dataUpdate,
  error: errorUpdate,
  fetching: fetchingUpdate,
} = useMutation(UPDATE_GROUP);

// REFS
const selectedColor = ref<EColors | null>(
  groupToEdit ? groupToEdit.color : null
);

const groupInputValue = ref('');

const headingText = computed(() => {
  return mode === 'new'
    ? 'Add a New Group:'
    : `Editing Group "${capitalize(groupToEdit?.name!)}"`;
});

const buttonText = computed(() => {
  return mode === 'new' ? 'Add' : 'Update';
});

const availableColors = computed(() => {
  const allColors = Object.values(EColors);
  const usedColors = groups.value.map(group => group.color);
  const remainingColors = allColors.filter(
    color => !usedColors.includes(color)
  );

  if (mode === 'edit' && groupToEdit) {
    remainingColors.push(groupToEdit.color);
    return remainingColors;
  }

  return remainingColors;
});

// FUNCTIONS
function selectColor(color: EColors) {
  selectedColor.value = color;
}

function handleChangeInput(value: string) {
  groupInputValue.value = value;
}

async function saveGroup() {
  const groupData = {
    name: capitalize(groupInputValue.value),
    color: selectedColor.value,
  };

  try {
    // NEW GROUP
    if (mode === 'new') {
      const validatedGroupData = newGroupValidator.parse(groupData);

      await addGroup({ addGroupData: validatedGroupData });
    }
    // EDIT GROUP
    if (mode === 'edit') {
      const groupToEditData = {
        name: groupData.name ? groupData.name : groupToEdit?.name,
        color: groupData.color,
        id: groupToEdit?.id,
      };
      const validatedEditGroupData = editGroupValidator.parse(groupToEditData);

      await updateGroup({ updateGroupData: validatedEditGroupData });
    }

    if (dataAdd.value || dataUpdate.value) {
      showToast(addGroupSuccessToast);
      emits('closeModal');
    }
    if (errorAdd.value) {
      throw errorAdd.value;
    }
    if (errorUpdate.value) {
      throw errorUpdate.value;
    }
    if (fetchingAdd.value || fetchingUpdate.value) {
    }
  } catch (error) {
    showToast(addGroupFailedToast(error));
    console.log(error);
  }
}
</script>

<template>
  <div class="input-wrapper">
    <h1>{{ headingText }}</h1>
    <BaseInput
      name="group"
      color="ghost"
      @changeValue="handleChangeInput"
      :value="groupToEdit?.name"
      >Group name:</BaseInput
    >
  </div>
  <div class="color-chooser-wrapper">
    <h2>Choose a color:</h2>
    <div class="color-wrapper">
      <div
        v-for="color in availableColors"
        :class="[{ selected: color === selectedColor }, color]"
        @click="selectColor(color)"
        :key="color"
      ></div>
    </div>
  </div>
  <TheModalButtons @cancel="emits('closeModal')" @accept="saveGroup">{{
    buttonText
  }}</TheModalButtons>
</template>

<style scoped lang="sass">
.input-wrapper
  display: flex
  flex-direction: column
  align-items: center
  margin-bottom: $sp_4

  h1
    color: $c1
    text-align: center
    margin-bottom: $sp_10

.color-chooser-wrapper
  margin-bottom: $sp_10

  h2
    font-size: 1.4rem
    color: $c-lt
    font-weight: 400
    margin-bottom: $sp_5

  .color-wrapper
    display: grid
    grid-template-columns: repeat(4, 1fr)
    row-gap: $sp_6
    div
      width: 2rem
      height: 2rem
      border-radius: 5px

      @each $class-name, $color in $colors
        @include colorFill($class-name, $color)

      &.selected
        outline: 3px solid $c1
        outline-offset: 2px
</style>
