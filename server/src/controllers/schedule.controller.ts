import { prisma } from '../config/prisma.config';

export async function getSchedule() {
  const schedule = await prisma.schedule.findMany({
    select: {
      id: true,
      date: true,
      group: {
        select: {
          name: true,
        },
      },
    },
  });

  return schedule as unknown as IScheduleFormatted[];
}

export async function addScheduleDay(data: IScheduleInput) {
  const newScheduleDay = await prisma.schedule.create({
    data,
    include: { group: true },
  });
  return newScheduleDay as unknown as IScheduleFormatted;
}

export async function upadteScheduleDay(fieldsToUpdate: IScheduleUpdateInput) {
  const updatedSchedule = await prisma.schedule.update({
    where: { id: fieldsToUpdate.id },
    data: fieldsToUpdate,
    include: { group: true },
  });

  return updatedSchedule as unknown as IScheduleFormatted;
}
