import { Resolvers } from '../../types/resolvers-types';
import {
  addExercise,
  deleteExercise,
  getexercisesByUserId,
  updateExercise,
} from '../../controllers/exercises.controller';

export const exerciseResolvers: Resolvers = {
  Query: {
    exercisesByUserId: async (parent, args) =>
      await getexercisesByUserId(args.userId),
  },

  Mutation: {
    addExercise: async (parent, args) => await addExercise(args),

    updateExercise: async (parent, args, { req }) => await updateExercise(args),

    deleteExercise: async (parent, args, { req }) => await deleteExercise(args),
  },
};
