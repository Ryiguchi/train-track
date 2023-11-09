import type { Workout } from '@/lib/graphQL/gql/graphql';
import { defineStore } from 'pinia';

export const useWorkoutStore = defineStore('workout', {
  state() {
    return {
      sets: [] as IWorkoutSetData[],
      exercise: null as null | string,
      previousWorkout: null as Workout | null,
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
    },

    updateSet(setIndex: number, setData: IWorkoutSetData) {
      this.sets.splice(setIndex, 1, setData);
    },

    clearSets() {
      this.sets = [];
    },
  },
});
