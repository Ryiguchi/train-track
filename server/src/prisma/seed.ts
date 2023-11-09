import { PrismaClient } from '@prisma/client';
import {
  dummyExercises,
  dummyGroups,
  dummyUser,
  getSchedule,
  getWorkouts,
} from './dummy-data/dummy-data';

const prisma = new PrismaClient();

async function main() {
  // const user = await prisma.user.create({ data: dummyUser });

  const groups = await prisma.group.createMany({
    data: dummyGroups,
    skipDuplicates: true,
  });

  const exercises = await prisma.exercise.createMany({
    data: dummyExercises,
    skipDuplicates: true,
  });

  // await prisma.schedule.deleteMany();

  const schedules = await prisma.schedule.createMany({
    data: getSchedule(),
    skipDuplicates: true,
  });

  const createdSchedules = await prisma.schedule.findMany();
  const dates = createdSchedules.map(item => item.date);

  await prisma.workout.deleteMany();
  const workouts = await prisma.workout.createMany({
    data: getWorkouts(dates),
  });

  console.log(groups);
  console.log(exercises);
  console.log(schedules);
  console.log(workouts);
  // console.log(user);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async error => {
    console.log(error);
    await prisma.$disconnect();
    process.exit(1);
  });
