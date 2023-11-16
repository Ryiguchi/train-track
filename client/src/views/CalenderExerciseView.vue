<script setup lang="ts">
import BaseCalender from '@/components/Base/BaseCalender.vue';
import ModalDisplayWorkout from '@/components/Modal/ModalDisplayWorkout.vue';
import BaseTitle from '@/components/Base/BaseTitle.vue';

import { storeToRefs } from 'pinia';
import { computed, ref } from 'vue';

import { useCalenderStore } from '@/stores/calender.store';
import { useSavedWorkoutsStore } from '@/stores/savedWorkouts.store';

import { useExercises } from '@/utils/composables/useExercises';
import { convertDateToCalenderFormat } from '@/utils/helpers/calender.helpers';
import { useWorkoutsQuery } from '@/utils/composables/queries/useWorkoutsQuery';

import type { Workout } from '@/lib/graphQL/gql/graphql';

// PROPS
const { slug } = defineProps<{
  slug: string;
}>();

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
      <div v-if="isModalOpen" class="overlay" @click="closeModal"></div>
      <Transition name="modal">
        <base-modal v-if="isModalOpen">
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
      <BaseTitle>{{ name }}</BaseTitle>
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

.overlay
  @include overlay
</style>
