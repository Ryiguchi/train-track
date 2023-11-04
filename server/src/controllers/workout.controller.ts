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

  return workoutsResults as unknown as IWorkoutFormatted[];
}
