import { getWorkouts } from '../../controllers/workout.controller';
import { Resolvers } from '../../types/resolvers-types';

export const workoutResolvers: Resolvers = {
  Workout: {
    date: workout => new Date(workout.date).toISOString().slice(0, 10),
    exercise: workout => {
      const exercise = workout.exercise as unknown as TExerciseWithName;
      return exercise.name;
    },
  },
  Query: {
    workouts: async () => await getWorkouts(),

    workoutsByDate: async (parent, args, context, info) => {
      const dateInIsoFormat = new Date(args.date).toISOString();

      return await getWorkouts({ date: dateInIsoFormat });
    },

    workoutsByExercise: async (parent, args) =>
      await getWorkouts({ exercise: { name: args.exercise } }),
  },
};
