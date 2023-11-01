<script setup lang="ts">
import BaseCalender from '@/components/base/BaseCalender.vue';
import ModalDisplayWorkout from '@/components/modals/ModalDisplayWorkout.vue';
import { useExerciseStore } from '@/stores/exercises.store';
import { useCalenderStore } from '@/stores/calender.store';
import { useSavedWorkoutsStore } from '@/stores/savedWorkouts.store';
import { storeToRefs } from 'pinia';
import { computed, ref } from 'vue';
import { convertDateToCalenderFormat } from '@/helpers/calender.helpers';

const { changeMonth, getCalenderDaysArray } = useCalenderStore();
const { displayedDate } = storeToRefs(useCalenderStore());

const { getNameFromSlug } = useExerciseStore();
const { getWorkoutByDateAndExercise } = useSavedWorkoutsStore();

const { name } = defineProps({
  name: {
    type: String,
    required: true,
  },
});

const isModalOpen = ref(false);
const modalDate = ref<string | null>(null);
const modalWorkout = ref<IWorkout | null>(null);
const formattedDate = computed(() => {
  return modalDate.value ? convertDateToCalenderFormat(modalDate.value) : '';
});

const title = getNameFromSlug(name);

const legend = [{ name, color: 'blue' }];

function handleClickDay(date: string) {
  if (!title) return;

  const workout = getWorkoutByDateAndExercise(date, title);

  if (!workout) return;

  modalWorkout.value = workout;
  modalDate.value = date;
  isModalOpen.value = true;
}

function closeModal() {
  isModalOpen.value = false;
}
</script>

<template>
  <base-modal v-if="isModalOpen" @overlay="closeModal">
    <ModalDisplayWorkout
      :date="formattedDate"
      :workout="modalWorkout"
      @close="closeModal"
    />
  </base-modal>
  <main>
    <base-title>{{ title }}</base-title>
    <BaseCalender
      :days="getCalenderDaysArray(title)"
      :legend="legend"
      :displayedDate="displayedDate"
      :changeMonthFn="changeMonth"
      :onClickFn="handleClickDay"
    />
  </main>
</template>

<style scoped lang="sass">
main
  margin-top: $sp_8
  display: flex
  flex-direction: column
  align-items: center
  gap: $sp_10
</style>
