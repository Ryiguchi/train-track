import { prisma } from '../config/prisma.config';

export async function getWorkouts(
  query: IStringIndexSig<string | IStringIndexSig<string>> = {}
) {
  const workoutsResults = await prisma.workout.findMany({
    where: query,
    select: {
      id: true,
      date: true,
      sets: true,
      exercise: {
        select: {
          name: true,
        },
      },
    },
  });

  return workoutsResults as unknown as IWorkoutQueryResult[];
}

export async function addWorkout(data: IAddWorkoutInput) {
  const addedWorkout = await prisma.workout.create({
    data,
    include: { exercise: true },
  });

  return addedWorkout as unknown as IWorkoutQueryResult;
}

export async function deleteWorkout(id: number) {
  const deletedWorkout = await prisma.workout.delete({ where: { id } });

  return deletedWorkout as unknown as IDeletedWorkoutResult;
}
