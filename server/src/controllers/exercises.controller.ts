import { GraphQLError } from 'graphql';
import { prisma } from '../config/prisma.config';
import { Exercise, ExerciseData } from '../types/resolvers-types';
import { isPrismaError } from '../types/predicates';
import { EErrorActions, getPrismaErrorMessage } from '../utils/error.utils';

export async function getexercisesByUserId(userId: number) {
  const exercises = await prisma.exercise.findMany({
    where: {
      userId,
    },
    include: {
      group: true,
    },
  });

  return exercises as unknown as Exercise[];
}

export async function addExercise(data: ExerciseData) {
  try {
    const exercise = await prisma.exercise.create({
      data,
      include: {
        group: true,
      },
    });
    return exercise as unknown as Exercise;
  } catch (error: any) {
    if (isPrismaError(error)) {
      const errorMessage = getPrismaErrorMessage(
        error.code,
        EErrorActions.ADD_EXERCISE,
        data.name
      );

      throw new GraphQLError(errorMessage);
    }
    throw error;
  }
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

  return updatedExercise as unknown as Exercise;
}

export async function deleteExercise(id: number) {
  const deletedExercise = await prisma.exercise.delete({ where: { id } });

  return deletedExercise;
}