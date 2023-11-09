import { prisma } from '../config/prisma.config';
import {
  AddWorkoutInput,
  DeletedWorkout,
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

export async function getWorkouts(
  query: IStringIndexSig<string | number | IStringIndexSig<string>> = {}
) {
  const workoutsResults = await prisma.workout.findMany({
    where: query,
    select: selectOptions,
  });

  return workoutsResults as unknown as Workout[];
}

export async function getPreviousWorkout(exerciseId: number) {
  const workout = await prisma.workout.findFirstOrThrow({
    where: { exerciseId },
    orderBy: { date: 'desc' },
    select: selectOptions,
  });

  return workout as unknown as Workout;
}

export async function addWorkout(data: AddWorkoutInput) {
  const addedWorkout = await prisma.workout.create({
    data,
    include: { exercise: true },
  });

  return addedWorkout as unknown as Workout;
}

export async function deleteWorkout(id: number) {
  const deletedWorkout = await prisma.workout.delete({ where: { id } });

  return deletedWorkout as unknown as DeletedWorkout;
}
