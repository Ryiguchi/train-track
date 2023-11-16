import { useSavedWorkoutsStore } from '@/stores/savedWorkouts.store';
import { toRefs } from 'vue';

export function useWorkouts() {
  const { workouts } = toRefs(useSavedWorkoutsStore());

  function filterByExercise(exercise: string) {
    return workouts.value.filter(workout => workout.exercise === exercise);
  }

  return {
    filterByExercise,
  };
}
