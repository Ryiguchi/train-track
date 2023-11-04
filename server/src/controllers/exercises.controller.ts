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

  return exercises as unknown as IExerciseQueryResult[];
}

export async function addExercise(data: IExerciseInput) {
  const exercise = await prisma.exercise.create({
    data,
    include: {
      group: true,
    },
  });

  return exercise as unknown as IExerciseQueryResult;
}

export async function updateExercise(fieldsToUpdate: IExerciseUpdateInput) {
  const updatedExercise = await prisma.exercise.update({
    where: {
      id: fieldsToUpdate.id,
    },
    data: {
      ...fieldsToUpdate,
    },
    include: {
      group: true,
    },
  });

  return updatedExercise as unknown as IExerciseQueryResult;
}

export async function deleteExercise(id: number) {
  const deletedExercise = await prisma.exercise.delete({ where: { id } });

  return deletedExercise as unknown as IExerciseDeleteResult;
}
