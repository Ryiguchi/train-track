import {
  addWorkout,
  deleteWorkout,
  getPreviousWorkout,
  getWorkouts,
} from '../../controllers/workout.controller';
import { Resolvers } from '../../types/resolvers-types';

export const workoutResolvers: Resolvers = {
  Workout: {
    date: workout => new Date(workout.date).toISOString().slice(0, 10),
    exercise: workout => {
      const exercise = workout.exercise as unknown as TFieldWithName;
      return exercise.name;
    },
  },
  Query: {
    workoutsByUserId: async (parent, args) =>
      await getWorkouts({ userId: args.userId }),

    previousWorkout: async (parent, args) =>
      await getPreviousWorkout(args.exerciseId),

    // workoutsByDate: async (parent, args, context, info) => {
    //   const dateInIsoFormat = new Date(args.date).toISOString();

    //   return await getWorkouts({ date: dateInIsoFormat });
    // },

    // workoutsByExercise: async (parent, args) =>
    //   await getWorkouts({ exercise: { name: args.exercise } }),
  },

  Mutation: {
    addWorkout: async (parent, args) => await addWorkout(args.workoutData),

    deleteWorkout: async (parent, args) => await deleteWorkout(args.id),
  },
};
