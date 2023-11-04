import { Resolvers } from '../../types/resolvers-types';
import {
  addScheduleDay,
  getSchedule,
  upadteScheduleDay,
} from '../../controllers/schedule.controller';

export const scheduleResolvers: Resolvers = {
  Schedule: {
    date: day => new Date(day.date).toISOString().slice(0, 10),

    group: day => {
      const group = day.group as unknown as TFieldWithName;
      return group.name;
    },
  },

  Query: {
    schedule: async () => await getSchedule(),
  },

  Mutation: {
    addScheduleDay: async (parent, args) =>
      await addScheduleDay(args.scheduleData as IScheduleInput),

    updateScheduleDay: async (parent, args) =>
      await upadteScheduleDay(args.fieldsToUpdate as IScheduleUpdateInput),
  },
};
