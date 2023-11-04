import { Resolvers } from '../../types/resolvers-types';
import { getGroups } from '../../controllers/group.controller';

export const groupResolvers: Resolvers = {
  Query: {
    groups: async () => await getGroups(),
  },
};
