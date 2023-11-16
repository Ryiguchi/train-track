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

    totalWeight: workout => {
      let totalWeight = 0;
      workout.sets.forEach(set => {
        const setWeight = set.weight * set.reps;
        totalWeight += setWeight;
      });

      return totalWeight;
    },

    totalReps: workout => {
      let totalReps = 0;
      workout.sets.forEach(set => {
        totalReps += set.reps;
      });

      return totalReps;
    },
  },

  Query: {
    workoutsByUserId: async (parent, args, { req }) =>
      await getWorkouts(req.userId),

    previousWorkout: async (parent, args, { req }) =>
      await getPreviousWorkout(args.exerciseId, req.userId),
  },

  Mutation: {
    addWorkout: async (parent, args, { req }) =>
      await addWorkout(args.workoutData, req.userId),

    deleteWorkout: async (parent, args, { req }) =>
      await deleteWorkout(args.id, req.userId),
  },
};
