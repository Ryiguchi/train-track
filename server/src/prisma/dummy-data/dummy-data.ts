import {
  getRandomDate,
  getRandomGroup,
  getRandomNumber,
} from './dummy-helpers';
import uniqid from 'uniqid';

export const dummyGroups = [
  {
    name: 'Legs',
  },
  {
    name: 'Push',
  },
  {
    name: 'pull',
  },
];

export const dummyExercises = [
  { name: 'Bench Press', slug: 'bench-press', groupId: 2 },
  { name: 'Incline Bench Press', slug: 'incline-bench-press', groupId: 2 },
  { name: 'Cable Crossovers', slug: 'cable-crossovers', groupId: 2 },
  { name: 'Tricep Extension', slug: 'tricep-extension', groupId: 2 },
  { name: 'Bent-over Rows', slug: 'bent-over-rows', groupId: 3 },
  { name: 'Push-ups', slug: 'push-ups', groupId: 2 },
  { name: 'Dumbell Curls', slug: 'dumbell-curls', groupId: 3 },
  { name: 'Squats', slug: 'squats', groupId: 1 },
  { name: 'Lunges', slug: 'lunges', groupId: 1 },
  { name: 'Calf Raises', slug: 'calf-raises', groupId: 1 },
  { name: 'Hammer Curls', slug: 'hammer-curls', groupId: 3 },
  { name: 'Shoulder Shrugs', slug: 'shoulder-shrugs', groupId: 3 },
];

// SCHEDULE

const getScheduleItem = () => ({
  date: getRandomDate('2023-06-01'),
  groupId: getRandomGroup(),
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
  };
};

export const getWorkouts = (dates: Date[]) => {
  let workouts: IWorkout[] = [];

  dates.forEach(date => {
    for (let i = 0; i < 8; i++) workouts.push(getWorkoutItem(date));
  });

  return workouts;
};
