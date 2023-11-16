import { getPrismaClient } from '@prisma/client/runtime/library';
import { prisma } from '../config/prisma.config';
import { isPrismaError } from '../types/predicates';
import { AddGroupInput, UpdateGroupInput } from '../types/resolvers-types';
import { EErrorActions, getPrismaErrorMessage } from '../utils/error.utils';
import { GraphQLError } from 'graphql';

export async function getGroupsByUserId(userId: number) {
  const groups = await prisma.group.findMany({ where: { userId } });

  return groups;
}

export async function addGroup(addGroupData: AddGroupInput, userId: number) {
  const data = {
    ...addGroupData,
    userId,
  };

  try {
    const newGroup = await prisma.group.create({ data });
    return newGroup;
  } catch (error: any) {
    if (isPrismaError(error)) {
      const errorMessage = getPrismaErrorMessage(
        error.code,
        EErrorActions.ADD_GROUP,
        data.name
      );

      throw new GraphQLError(errorMessage);
    }

    throw error;
  }
}

export async function updateGroup(
  updateGroupData: UpdateGroupInput,
  userId: number
) {
  const data = {
    name: updateGroupData.name,
    color: updateGroupData.color,
  };

  const updatedGroup = await prisma.group.update({
    where: { userId, id: updateGroupData.id },
    data,
  });

  return updatedGroup;
}

export async function deleteGroup(id: number, userId: number) {
  const deletedGroup = await prisma.group.delete({
    where: { id, userId },
  });

  return deletedGroup;
}
