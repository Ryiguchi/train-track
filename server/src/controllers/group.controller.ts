import { prisma } from '../config/prisma.config';
import { isPrismaError } from '../types/predicates';
import {
  MutationAddGroupArgs,
  MutationDeleteGroupArgs,
  MutationUpdateGroupArgs,
} from '../types/resolvers-types';
import { EErrorActions, getPrismaErrorMessage } from '../utils/error.utils';
import { GraphQLError } from 'graphql';

export async function getGroupsByUserId(userId: number) {
  const groups = await prisma.group.findMany({ where: { userId } });

  return groups;
}

export async function addGroup({ addGroupData, userId }: MutationAddGroupArgs) {
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
        addGroupData.name
      );

      throw new GraphQLError(errorMessage);
    }

    throw error;
  }
}

export async function updateGroup({
  updateGroupData,
  userId,
}: MutationUpdateGroupArgs) {
  const updatedGroup = await prisma.group.update({
    where: { userId, id: updateGroupData.id },
    data: updateGroupData,
  });

  return updatedGroup;
}

export async function deleteGroup({ id, userId }: MutationDeleteGroupArgs) {
  const deletedGroup = await prisma.group.delete({
    where: { id, userId },
  });

  return deletedGroup;
}
