import { prisma } from '../config/prisma.config';

export async function getDefaultExercises() {
  const exercises = await prisma.exercise.findMany({
    select: {
      id: true,
      name: true,
      slug: true,
      group: {
        select: {
          name: true,
        },
      },
    },
  });

  return exercises as unknown as IExerciseFormatted[];
}

export async function addExercise(data: IExerciseInput) {
  const exercise = await prisma.exercise.create({
    data,
    include: {
      group: true,
    },
  });

  return exercise as unknown as IExerciseFormatted;
}
