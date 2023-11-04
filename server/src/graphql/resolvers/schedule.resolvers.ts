import { Resolvers } from '../../types/resolvers-types';
import { getSchedule } from '../../controllers/schedule.controller';

export const scheduleResolvers: Resolvers = {
  Schedule: {
    date: day => new Date(day.date).toISOString().slice(0, 10),
    group: day => {
      const group = day.group as unknown as TGroupWithName;
      return group.name;
    },
  },
  Query: {
    schedule: async () => await getSchedule(),
  },
};
