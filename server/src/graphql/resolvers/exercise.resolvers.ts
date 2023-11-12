import { Resolvers } from '../../types/resolvers-types';
import {
  addExercise,
  deleteExercise,
  getexercisesByUserId,
  updateExercise,
} from '../../controllers/exercises.controller';

export const exerciseResolvers: Resolvers = {
  Query: {
    exercisesByUserId: async (parent, args, { req }) =>
      await getexercisesByUserId(req.userId),
  },

  Mutation: {
    addExercise: async (parent, args, { req }) =>
      await addExercise(args.exerciseData, req.userId),

    updateExercise: async (parent, args, { req }) =>
      await updateExercise(
        args.fieldsToUpdate as IExerciseUpdateInput,
        req.userId
      ),

    deleteExercise: async (parent, args, { req }) =>
      await deleteExercise(args.id as number, req.userId),
  },
};
