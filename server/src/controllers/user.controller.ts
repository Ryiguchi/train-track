import { z } from 'zod';
import { prisma } from '../config/prisma.config';
import { isPrismaError, isZodError } from '../types/predicates';
import { GraphQLError } from 'graphql';
import {
  updateEmailInputValidator,
  updatePasswordInputValidator,
} from '../utils/zod.utils';
import { EErrorActions, getPrismaErrorMessage } from '../utils/error.utils';
import { hashPassword } from '../utils/bcryptjs.utils';
import { isPasswordValid } from './auth.controller';
import {
  MutationUpdateEmailArgs,
  MutationUpdateNameArgs,
  MutationUpdatePasswordArgs,
} from '../types/resolvers-types';
import { User } from '@prisma/client';

function regenerateSession(user: User, session: ISessionWithPassport) {
  const userData = {
    id: user.id,
    name: user.name,
    email: user.email,
  };

  session.passport.user = userData;

  session.save((error: any) => {
    if (error) {
      console.log(error);
      throw error;
    }
  });
}

export async function getUserById(userId: number) {
  try {
    const user = await prisma.user.findUnique({ where: { id: userId } });

    if (!user) {
      throw new Error('No user found!');
    }

    return user as unknown as IUser;
  } catch (error: any) {
    if (isPrismaError(error)) {
      throw new GraphQLError(error.message);
    }

    throw error;
  }
}

export async function updateUserName(
  { name, userId }: MutationUpdateNameArgs,
  req: ICustomRequest
) {
  try {
    const userDataVerified = z
      .string()
      .min(1, 'Username can not be empty')
      .parse(name);

    const updatedUser = await prisma.user.update({
      where: { id: userId },
      data: { name: userDataVerified },
    });

    regenerateSession(updatedUser, req.session);

    return updatedUser as unknown as IUser;
  } catch (error: any) {
    if (isPrismaError(error)) {
      throw new GraphQLError(error.message);
    }

    if (isZodError(error)) {
      throw new GraphQLError(error.errors[0].message);
    }

    throw error;
  }
}

export async function updateUserEmail(
  { updateEmailData, userId }: MutationUpdateEmailArgs,
  req: ICustomRequest
) {
  try {
    const userDataValidated = updateEmailInputValidator.parse(updateEmailData);

    const updatedUser = await prisma.user.update({
      where: { id: userId },
      data: userDataValidated,
    });

    regenerateSession(updatedUser, req.session);

    return updatedUser as unknown as IUser;
  } catch (error: any) {
    if (isPrismaError(error)) {
      const errorMessage = getPrismaErrorMessage(
        error.code,
        EErrorActions.UPDATE_USER,
        updateEmailData.email
      );
      throw new GraphQLError(error.message);
    }

    if (isZodError(error)) {
      throw new GraphQLError(error.errors[0].message);
    }

    throw error;
  }
}

export async function updateUserPassword({
  updatePasswordData,
  userId,
}: MutationUpdatePasswordArgs) {
  try {
    const userDataValidated =
      updatePasswordInputValidator.parse(updatePasswordData);

    const isValidPassword = await isPasswordValid(
      userDataValidated.oldPassword,
      userId
    );

    if (!isValidPassword) {
      throw new Error('Invalid Password!');
    }

    const newHashedPassword = await hashPassword(userDataValidated.newPassword);

    const updatedUser = prisma.user.update({
      where: { id: userId },
      data: { password: newHashedPassword },
    });

    return updatedUser as unknown as IUser;
  } catch (error: any) {
    if (isPrismaError(error)) {
      const errorMessage = getPrismaErrorMessage(
        error.code,
        EErrorActions.UPDATE_USER
      );
      throw new GraphQLError(error.message);
    }

    if (isZodError(error)) {
      throw new GraphQLError(error.errors[0].message);
    }

    if (error.message) {
      throw new GraphQLError(error.message);
    }

    throw error;
  }
}
