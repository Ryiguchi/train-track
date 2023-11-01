import {
  exerciseList,
  getRandomItemFromArray,
  getRandomNumber,
} from './dummy-data';
import uniqid from 'uniqid';

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

const getWorkoutItem = (date: string) => {
  return {
    id: uniqid(),
    exercise: getRandomItemFromArray(exerciseList),
    date,
    sets: getSetArray(),
  };
};

export const getWorkouts = (dates: string[]) => {
  let workouts: IWorkout[] = [];

  dates.forEach(date => {
    for (let i = 0; i < 8; i++) workouts.push(getWorkoutItem(date));
  });

  return workouts;
};
