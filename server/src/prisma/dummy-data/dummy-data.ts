import {
  getRandomDate,
  getRandomGroup,
  getRandomNumber,
} from './dummy-helpers';
import uniqid from 'uniqid';

export const dummyGroups = [
  {
    name: 'legs',
    color: 'blue',
    userId: 1,
  },
  {
    name: 'push',
    color: 'green',
    userId: 1,
  },
  {
    name: 'pull',
    color: 'orange',
    userId: 1,
  },
];

export const dummyExercises = [
  { name: 'Bench Press', slug: 'bench-press', groupId: 2, userId: 1 },
  {
    name: 'Incline Bench Press',
    slug: 'incline-bench-press',
    groupId: 2,
    userId: 1,
  },
  { name: 'Cable Crossovers', slug: 'cable-crossovers', groupId: 2, userId: 1 },
  { name: 'Tricep Extension', slug: 'tricep-extension', groupId: 2, userId: 1 },
  { name: 'Bent-over Rows', slug: 'bent-over-rows', groupId: 3, userId: 1 },
  { name: 'Push-ups', slug: 'push-ups', groupId: 2, userId: 1 },
  { name: 'Dumbell Curls', slug: 'dumbell-curls', groupId: 3, userId: 1 },
  { name: 'Squats', slug: 'squats', groupId: 1, userId: 1 },
  { name: 'Lunges', slug: 'lunges', groupId: 1, userId: 1 },
  { name: 'Calf Raises', slug: 'calf-raises', groupId: 1, userId: 1 },
  { name: 'Hammer Curls', slug: 'hammer-curls', groupId: 3, userId: 1 },
  { name: 'Shoulder Shrugs', slug: 'shoulder-shrugs', groupId: 3, userId: 1 },
];

// SCHEDULE

const getScheduleItem = () => ({
  date: getRandomDate('2023-06-01'),
  groupId: getRandomGroup(),
  userId: 1,
});

export const getSchedule = () => {
  const array = Array.from({ length: 100 }, getScheduleItem);

  return array;
};

// WORKOUTS

const getSet = (num: number) => {
  return {
    id: uniqid(),
    setNum: num,
    weight: getRandomNumber(20, 100),
    reps: getRandomNumber(5, 12),
  };
};

const getSetArray = () => {
  let array = [];

  for (let i = 1; i <= 4; i++) {
    array.push(getSet(i));
  }

  return array;
};

const getWorkoutItem = (date: Date) => {
  return {
    exerciseId: getRandomNumber(1, 12),
    date,
    sets: getSetArray(),
    userId: 1,
  };
};

export const getWorkouts = (dates: Date[]) => {
  let workouts: IAddWorkoutInput[] = [];

  dates.forEach(date => {
    for (let i = 0; i < 8; i++) workouts.push(getWorkoutItem(date));
  });

  return workouts;
};

export const dummyUser = {
  id: 100,
  name: 'Ryan',
  email: 'ryan.iguchi1@gmail.com',
  password: 'sdölksfnvlknskflnvklfdskv',
};
