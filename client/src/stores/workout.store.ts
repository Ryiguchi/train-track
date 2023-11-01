import { defineStore } from 'pinia';
import { previousWorkout } from '@/helpers/dummy-data/dummy-data';

export const useWorkoutStore = defineStore('workout', {
  state() {
    return {
      sets: [] as IWorkoutSetData[],
      exercise: null as null | string,
      previousWorkout,
    };
  },

  getters: {
    setsLength(state) {
      return state.sets.length;
    },
  },

  actions: {
    setExercise(exercise: string | null = null) {
      this.exercise = exercise;
    },

    addSet(setData: IWorkoutSetData) {
      const newSets = [...this.sets, setData];
      this.sets = newSets;
      console.log(this.sets);
    },

    updateSet(setIndex: number, setData: IWorkoutSetData) {
      this.sets.splice(setIndex, 1, setData);
      console.log(this.sets);
    },
  },
});
