import { Resolvers } from '../../types/resolvers-types';
import {
  addScheduleDay,
  checkIsTodaysGroupSet,
  getScheduleByUserId,
  upadteScheduleDay,
} from '../../controllers/schedule.controller';

export const scheduleResolvers: Resolvers = {
  Schedule: {
    date: day => new Date(day.date).toISOString().slice(0, 10),
  },

  Query: {
    scheduleByUserId: async (parent, args) =>
      await getScheduleByUserId(args.userId),

    isTodaysGroupSet: async () => await checkIsTodaysGroupSet(),
  },

  Mutation: {
    addScheduleDay: async (parent, args) =>
      await addScheduleDay(args.scheduleData),

    updateScheduleDay: async (parent, args) =>
      await upadteScheduleDay(args.fieldsToUpdate),
  },
};
