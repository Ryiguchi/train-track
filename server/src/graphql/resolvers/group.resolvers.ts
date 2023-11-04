import { Resolvers } from '../../types/resolvers-types';
import {
  addGroup,
  deleteGroup,
  getGroups,
} from '../../controllers/group.controller';

export const groupResolvers: Resolvers = {
  Query: {
    groups: async () => await getGroups(),
  },

  Mutation: {
    addGroup: async (parent, args) => await addGroup(args.name),

    deleteGroup: async (parent, args) => await deleteGroup(args.name),
  },
};
