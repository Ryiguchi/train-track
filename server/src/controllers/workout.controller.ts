import { prisma } from '../config/prisma.config';
import {
  DeletedWorkout,
  MutationAddWorkoutArgs,
  MutationDeleteWorkoutArgs,
  QueryPreviousWorkoutArgs,
  Workout,
} from '../types/resolvers-types';

const selectOptions = {
  id: true,
  date: true,
  sets: true,
  exercise: {
    select: {
      name: true,
    },
  },
};

export async function getWorkouts(userId: number) {
  const workoutsResults = await prisma.workout.findMany({
    where: { userId },
    select: selectOptions,
  });

  return workoutsResults as unknown as Workout[];
}

export async function getPreviousWorkout({
  exerciseId,
  userId,
}: QueryPreviousWorkoutArgs) {
  const workout = await prisma.workout.findFirstOrThrow({
    where: {
      exerciseId,
      userId,
    },
    orderBy: { date: 'desc' },
    select: selectOptions,
  });

  return workout as unknown as Workout;
}

export async function addWorkout({
  addWorkoutData,
  userId,
}: MutationAddWorkoutArgs) {
  const data = {
    ...addWorkoutData,
    userId,
  };

  const addedWorkout = await prisma.workout.create({
    data,
    include: { exercise: true },
  });

  return addedWorkout as unknown as Workout;
}

export async function deleteWorkout({ id, userId }: MutationDeleteWorkoutArgs) {
  const deletedWorkout = await prisma.workout.delete({
    where: { id, userId },
  });

  return deletedWorkout as unknown as DeletedWorkout;
}
