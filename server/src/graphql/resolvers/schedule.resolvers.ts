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
    scheduleByUserId: async (parent, args, { req }) =>
      await getScheduleByUserId(req.userId),

    isTodaysGroupSet: async (parent, args, { req }) =>
      await checkIsTodaysGroupSet(req.userId),
  },

  Mutation: {
    addScheduleDay: async (parent, args, { req }) =>
      await addScheduleDay(args.scheduleData, req.userId),

    updateScheduleDay: async (parent, args, { req }) =>
      await upadteScheduleDay(args.fieldsToUpdate, req.userId),
  },
};
