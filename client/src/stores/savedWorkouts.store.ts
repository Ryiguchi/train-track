import { defineStore } from 'pinia';
import type { Workout } from '@/lib/graphQL/gql/graphql';

export const useSavedWorkoutsStore = defineStore('savedWorkouts', {
  state() {
    return {
      workouts: [] as Workout[],
    };
  },

  actions: {
    setWorkouts(workouts: Workout[]) {
      this.workouts = workouts;
    },

    filterWorkoutsByMonth(date: string) {
      return this.workouts.filter(workout => workout.date.startsWith(date));
    },

    filterWorkoutsByMonthAndExercise(date: string, exercise: string) {},

    getWorkoutsByDate(date: string) {
      return this.workouts.filter(workout => workout.date === date);
    },

    getWorkoutByDateAndExercise(date: string, exercise: string) {
      return this.workouts.find(
        workout => workout.date === date && workout.exercise === exercise
      );
    },
  },
});
