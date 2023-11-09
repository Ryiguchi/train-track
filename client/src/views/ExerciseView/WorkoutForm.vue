<script setup lang="ts">
import WorkoutFormSet from '../../components/workout/WorkoutFormSet.vue';

import { storeToRefs } from 'pinia';
import { useWorkoutStore } from '@/stores/workout.store';
import { computed, onUnmounted, ref } from 'vue';
import WorkoutHeader from '@/components/workout/WorkoutHeader.vue';
import WorkoutHeading from '@/components/workout/WorkoutHeading.vue';
import BaseButton from '@/components/base/BaseButton.vue';
import { onBeforeRouteLeave, useRoute, useRouter } from 'vue-router';
import { useExercises } from '@/utils/composables/useExercises';
import { z } from 'zod';
import { useMutation } from '@urql/vue';
import { ADD_WORKOUT } from '@/lib/graphQL/queries';
import { useUserStore } from '@/stores/user.store';
import { addWorkoutValidator } from '@/lib/types/zod';
import { useToastStore } from '@/stores/toast.store';
import {
  addWorkoutSuccessToast,
  addWorkoutFailedToast,
} from '@/utils/helpers/toasts.helpers';

// PROPS
const { color } = defineProps({
  color: {
    type: String,
    required: false,
    default: 'blue',
  },
});

// STORE
const { sets } = storeToRefs(useWorkoutStore());
const { clearSets } = useWorkoutStore();
const { userId } = useUserStore();
const { showToast } = useToastStore();

// QUERY
const { executeMutation: addWorkout } = useMutation(ADD_WORKOUT);

// HOOKS
const { params } = useRoute();
const router = useRouter();
const { getIdFromSlug } = useExercises();

// REFS
const setsLengthPlus1 = computed(() => sets.value.length + 1);
const hasUnsavedValues = ref(false);

// LIFECYCLE
onBeforeRouteLeave((to, from, next) => {
  if (!hasUnsavedValues.value && sets.value.length === 0) {
    next();
    return;
  }

  const leavePage = confirm(
    "Wait! You haven't saved your workout! If you continue, your workout will be lost. Are you sure you want to continue?"
  );

  if (leavePage) {
    clearSets();
    next();
  } else {
    next(false);
  }
});

// FUNCTIONS
async function saveWorkout() {
  if (hasUnsavedValues.value) {
    const userWantsToContinue = confirm(
      'You have unsaved workout data! If you continue, your unsaved data will be lost. Are you sure you want to continue?'
    );

    if (!userWantsToContinue) return;
  }

  try {
    const slug = z.string().min(1).parse(params.slug);

    const workoutData = {
      date: new Date().toISOString(),
      sets: sets.value,
      exerciseId: getIdFromSlug(slug),
      userId,
    };

    const validWorkoutData = addWorkoutValidator.parse(workoutData);

    const addedWorkout = await addWorkout({ workoutData: validWorkoutData });
    showToast(addWorkoutSuccessToast);
    clearSets();
    router.push('/exercises');
  } catch (error: any) {
    showToast(addWorkoutFailedToast(error));
  }
}

function setHasUnsavedValues(hasUnsaved: boolean) {
  hasUnsavedValues.value = hasUnsaved;
}
</script>

<template>
  <section :class="color">
    <form @submit.prevent="saveWorkout">
      <WorkoutHeader>Current Workout</WorkoutHeader>
      <WorkoutHeading />

      <ul class="set-list">
        <WorkoutFormSet
          v-for="(set, i) in sets"
          :key="set.setNum"
          :set="i + 1"
          :weight="set.weight"
          :reps="set.reps"
        />

        <WorkoutFormSet
          :set="setsLengthPlus1"
          :isNew="true"
          @hasUnsavedValues="setHasUnsavedValues"
        />
      </ul>
      <BaseButton color="ghost-dark">Save Workout</BaseButton>
    </form>
  </section>
</template>

<style scoped lang="sass">
section
  @include section-styles

  &.orange
   background-color: $c1-lt

  &.blue
    background-color: $c2-lt

  &.green
    background-color: $c3

  ul
    display: flex
    flex-direction: column
    list-style: none
    @include text-md
    color: $c-dk

  button
    margin-top: $sp_5
</style>
