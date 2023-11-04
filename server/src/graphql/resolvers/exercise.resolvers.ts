import { Resolvers } from '../../types/resolvers-types';
import {
  addExercise,
  getDefaultExercises,
} from '../../controllers/exercises.controller';

export const exerciseResolvers: Resolvers = {
  Exercise: {
    group: exercise => {
      const group = exercise.group as unknown as TGroupWithName;
      return group.name;
    },
  },
  Query: {
    exercises: async () => await getDefaultExercises(),
  },

  Mutation: {
    addExercise: async (parent, args) => {
      const exercise = await addExercise(args.userData as IExerciseInput);
      return exercise;
    },
  },
};
