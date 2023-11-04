import { Resolvers } from '../../types/resolvers-types';
import {
  addExercise,
  deleteExercise,
  getDefaultExercises,
  updateExercise,
} from '../../controllers/exercises.controller';

export const exerciseResolvers: Resolvers = {
  Exercise: {
    group: exercise => {
      const group = exercise.group as unknown as TFieldWithName;
      return group.name;
    },
  },

  Query: {
    exercises: async () => await getDefaultExercises(),
  },

  Mutation: {
    addExercise: async (parent, args) =>
      await addExercise(args.userData as IExerciseInput),

    updateExercise: async (parent, args) =>
      await updateExercise(args.fieldsToUpdate as IExerciseUpdateInput),

    deleteExercise: async (parent, args) =>
      await deleteExercise(args.id as number),
  },
};
