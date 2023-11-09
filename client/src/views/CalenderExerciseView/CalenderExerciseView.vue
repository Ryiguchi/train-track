<script setup lang="ts">
import BaseCalender from '@/components/base/BaseCalender.vue';
import ModalDisplayWorkout from '@/components/modals/ModalDisplayWorkout.vue';
import { useExercises } from '@/utils/composables/useExercises';
import { useCalenderStore } from '@/stores/calender.store';
import { useSavedWorkoutsStore } from '@/stores/savedWorkouts.store';
import { storeToRefs } from 'pinia';
import { computed, ref } from 'vue';
import { convertDateToCalenderFormat } from '@/utils/helpers/calender.helpers';
import type { Workout } from '@/lib/graphQL/gql/graphql';
import { useWorkoutsQuery } from '@/utils/composables/queries/useWorkoutsQuery';
import BaseTitle from '@/components/base/BaseTitle.vue';

// PROPS
const { slug } = defineProps({
  slug: {
    type: String,
    required: true,
  },
});

// QUERY
useWorkoutsQuery();

// STORE
const { changeMonth, getCalenderDaysArray } = useCalenderStore();
const { displayedDate } = storeToRefs(useCalenderStore());
const { getWorkoutByDateAndExercise } = useSavedWorkoutsStore();

// HOOKS

const { getExerciseFromSlug } = useExercises();

// REFS

const isModalOpen = ref(false);
const modalDate = ref<string | null>(null);
const modalWorkout = ref<Workout | null>(null);
const formattedDate = computed(() => {
  return modalDate.value ? convertDateToCalenderFormat(modalDate.value) : '';
});

// VARIABLES
const exercise = getExerciseFromSlug(slug);
const { name } = exercise;
const { color } = exercise.group;
const legend = [{ name, color }];

// FUNCTIONS

function handleClickDay(date: string) {
  if (!name) return;

  const workout = getWorkoutByDateAndExercise(date, name);

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
  <div>
    <Teleport to="body">
      <Transition name="modal">
        <base-modal v-if="isModalOpen" @overlay="closeModal">
          <ModalDisplayWorkout
            :color="color"
            :date="formattedDate"
            :workout="modalWorkout"
            @close="closeModal"
          />
        </base-modal>
      </Transition>
    </Teleport>
    <main>
      <BaseTitle :color="color">{{ name }}</BaseTitle>
      <BaseCalender
        :color="color"
        :days="getCalenderDaysArray(name)"
        :legend="legend"
        :displayedDate="displayedDate"
        :changeMonthFn="changeMonth"
        :onClickFn="handleClickDay"
      />
    </main>
  </div>
</template>

<style scoped lang="sass">
main
  margin-top: $sp_8
  display: flex
  flex-direction: column
  align-items: center
  gap: $sp_10
</style>
