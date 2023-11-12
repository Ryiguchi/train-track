import { Resolvers } from '../../types/resolvers-types';
import {
  addGroup,
  deleteGroup,
  getGroupsByUserId,
  updateGroup,
} from '../../controllers/group.controller';

export const groupResolvers: Resolvers = {
  Query: {
    groupsByUserId: async (parent, args, { req }) =>
      await getGroupsByUserId(req.userId),
  },

  Mutation: {
    addGroup: async (parent, args, { req }) =>
      await addGroup(args.addGroupData, req.userId),

    deleteGroup: async (parent, args, { req }) =>
      await deleteGroup(args.id, req.userId),

    updateGroup: async (parent, args, { req }) =>
      await updateGroup(args.updateGroupData, req.userId),
  },
};
