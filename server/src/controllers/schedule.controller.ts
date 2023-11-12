import { prisma } from '../config/prisma.config';
import {
  ScheduleInput,
  Schedule,
  UpdateScheduleInput,
} from '../types/resolvers-types';

export async function getScheduleByUserId(userId: number) {
  const schedule = await prisma.schedule.findMany({
    where: {
      userId,
    },
    include: { group: true },
  });

  return schedule as unknown as Schedule[];
}

export async function checkIsTodaysGroupSet(userId: number) {
  const today = new Date().toISOString().slice(0, 10);

  const schedule = await prisma.schedule.findMany({ where: { userId } });

  const isScheduleForToday = schedule.find(
    day => day.date.toISOString().slice(0, 10) === today
  );

  if (isScheduleForToday) {
    return true;
  } else {
    return false;
  }
}

export async function addScheduleDay(
  scheduleData: ScheduleInput,
  userId: number
) {
  const data = {
    ...scheduleData,
    userId,
  };

  const newScheduleDay = await prisma.schedule.create({
    data,
    include: { group: true },
  });
  return newScheduleDay as unknown as Schedule;
}

export async function upadteScheduleDay(
  fieldsToUpdate: UpdateScheduleInput,
  userId: number
) {
  const updatedSchedule = await prisma.schedule.update({
    where: { id: fieldsToUpdate.id, userId },
    data: fieldsToUpdate,
    include: { group: true },
  });

  return updatedSchedule as unknown as Schedule;
}
