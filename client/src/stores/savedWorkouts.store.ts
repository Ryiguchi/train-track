import { getWorkouts } from '@/helpers/dummy-data/dummy-workouts';
import { defineStore } from 'pinia';
import { useCalenderStore } from './calender.store';

export const useSavedWorkoutsStore = defineStore('savedWorkouts', {
  state() {
    return {
      workouts: getWorkouts(
        useCalenderStore().schedule.map(event => event.date)
      ) as IWorkout[],
    };
  },

  actions: {
    filterWorkoutsByMonth(date: string) {
      return this.workouts.filter(workout => workout.date.startsWith(date));
    },

    filterWorkoutsByMonthAndExercise(date: string, exercise: string) {},

    getWorkoutsByDate(date: string) {
      return this.workouts.filter(workout => workout.date === date);
    },

    getWorkoutByDateAndExercise(date: string, exercise: string) {
      return this.workouts.find(
        workout => workout.date === date && workout.exercise.name === exercise
      );
    },
  },
});
