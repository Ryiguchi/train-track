import { Resolvers } from '../../types/resolvers-types';
import {
  getUserById,
  updateUserEmail,
  updateUserName,
  updateUserPassword,
} from '../../controllers/user.controller';

export const userResolvers: Resolvers = {
  User: {
    createdAt: user => new Date(user.createdAt).toISOString().slice(0, 10),
    updatedAt: user => new Date(user.updatedAt).toISOString().slice(0, 10),
  },

  Query: {
    userById: async (parent, args, { req }) => await getUserById(req.userId),
  },

  Mutation: {
    updateName: async (parent, args, { req }) =>
      await updateUserName(args.name, req),

    updateEmail: async (parent, args, { req }) =>
      await updateUserEmail(args.updateEmailInput, req),

    updatePassword: async (parent, args, { req }) =>
      await updateUserPassword(args.updatePasswordInput, req.userId),
  },
};
