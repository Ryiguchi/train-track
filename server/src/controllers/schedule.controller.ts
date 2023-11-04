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
