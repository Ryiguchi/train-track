import { Resolvers } from '../../types/resolvers-types';
import {
  addGroup,
  deleteGroup,
  getGroupsByUserId,
  updateGroup,
} from '../../controllers/group.controller';

export const groupResolvers: Resolvers = {
  Query: {
    groupsByUserId: async (parent, args) =>
      await getGroupsByUserId(args.userId),
  },

  Mutation: {
    addGroup: async (parent, args) => await addGroup(args),

    deleteGroup: async (parent, args) => await deleteGroup(args),

    updateGroup: async (parent, args) => await updateGroup(args),
  },
};
