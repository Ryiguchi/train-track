<script setup lang="ts">
import IconAdd from '../Icon/IconAdd.vue';
import IconEdit from '../Icon/IconEdit.vue';

import { computed, ref, watch } from 'vue';
import { useWorkoutStore } from '@/stores/workout.store';
import { storeToRefs } from 'pinia';

// PROPS
const { set, isNew, weight, reps } = defineProps<{
  set: number;
  isNew?: boolean;
  weight?: number;
  reps?: number;
}>();

// EMITS
const emits = defineEmits<{
  hasUnsavedValues: [boolean];
}>();

// STORE
const { setsLength } = storeToRefs(useWorkoutStore());
const { addSet, updateSet } = useWorkoutStore();

// REFS
const isEditing = ref(isNew ? true : false);
const enteredWeight = ref<number | null>(null);
const enteredReps = ref<number | null>(null);

const setNum = computed(() => {
  return isNew ? setsLength.value + 1 : set;
});

// WATCH
watch([enteredReps, enteredWeight], ([newReps, newWeight]) => {
  if ((!newReps || newReps === 0) && (!newWeight || newWeight === 0)) {
    emits('hasUnsavedValues', false);
  } else {
    emits('hasUnsavedValues', true);
  }
});

// FUNCTIONS
function handleAddSet() {
  if (!enteredWeight.value || !enteredReps.value) {
    // message
    TODO: return;
  }

  const setData: IWorkoutSetData = {
    id: Date.now().toString(),
    setNum: setNum.value,
    weight: enteredWeight.value,
    reps: enteredReps.value,
  };

  if (isNew) {
    addSet(setData);
  } else {
    updateSet(set - 1, setData);
    isEditing.value = false;
  }

  enteredWeight.value = null;
  enteredReps.value = null;
}

function handleEdit() {
  isEditing.value = true;
  enteredWeight.value = weight ? weight : null;
  enteredReps.value = reps ? reps : null;
}

function handleSelectOnFocus(event: Event) {
  (event.target as HTMLInputElement).select();
}
</script>

<template>
  <li>
    <span>Set {{ setNum }}:</span>
    <div>
      <input
        type="number"
        min="1"
        max="300"
        v-if="isEditing"
        v-model.trim="enteredWeight"
        @focus="handleSelectOnFocus"
        aria-label="weight"
      />
      <span v-else> {{ weight }}</span>
    </div>
    <div>
      <input
        type="number"
        min="1"
        max="100"
        v-if="isEditing"
        v-model.trim="enteredReps"
        @focus="handleSelectOnFocus"
        aria-label="reps"
      />
      <span v-else> {{ reps }}</span>
    </div>
    <div class="icons">
      <IconAdd v-if="isEditing" @click="handleAddSet" />
      <IconEdit v-else @click="handleEdit" />
    </div>
  </li>
</template>

<style scoped lang="sass">
li
  display: flex
  align-items: center
  justify-content: space-between
  height: 5rem

  input
    border: 1px solid $c1
    background-color: $c-dk
    height: 3.6rem
    width: 7.5rem
    padding: $sp_2
    border-radius: $br_md
    @include text-md("bold")
    color: $c1
    text-align: center

    &:focus
      // outline-color: $c2
      background-color: $c1
      color: $c-dk

  .icons
    display: flex
    align-items: center
</style>
