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
    addExercise: async (parent, args) => await addExercise(args.exerciseData),

    updateExercise: async (parent, args) =>
      await updateExercise(args.fieldsToUpdate as IExerciseUpdateInput),

    deleteExercise: async (parent, args) =>
      await deleteExercise(args.id as number),
  },
};
