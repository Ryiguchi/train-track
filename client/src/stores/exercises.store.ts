import { defineStore } from 'pinia';
import { exerciseList } from '@/helpers/dummy-data/dummy-data';

export const useExerciseStore = defineStore('exercises', {
  state() {
    return {
      exercises: exerciseList,
      groups: ['pull', 'push', 'legs'],
    };
  },

  getters: {
    exerciseNames(state) {
      return state.exercises.map(item => item.name);
    },
  },

  actions: {
    filterByGroup(group: string) {
      return this.exercises
        .filter(item => item.group === group)
        .map(item => item.name);
    },

    getSlugFromName(exerciseName: string) {
      const exercise = this.exercises.find(item => item.name === exerciseName);
      return exercise?.slug;
    },

    getNameFromSlug(slug: string) {
      const exercise = this.exercises.find(item => item.slug === slug);
      return exercise?.name;
    },

    addExercise(exerciseData: IExercise) {
      // TODO: check if already exists
      this.exercises.push(exerciseData);
      console.log(this.exercises);
    },
  },
});
