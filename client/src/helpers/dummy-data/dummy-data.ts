export const exerciseList = [
  { name: 'Bench Press', slug: 'bench-press', group: 'push' },
  { name: 'Incline Bench Press', slug: 'incline-bench-press', group: 'push' },
  { name: 'Cable Crossovers', slug: 'cable-crossovers', group: 'pull' },
  { name: 'Tricep Extension', slug: 'tricep-extension', group: 'pull' },
  { name: 'Bent-over Rows', slug: 'bent-over-rows', group: 'push' },
  { name: 'Push-ups', slug: 'push-ups', group: 'pull' },
  { name: 'Sit-ups', slug: 'sit-ups', group: 'legs' },
  { name: 'Dumbell Curls', slug: 'dumbell-curls', group: 'legs' },
];

export const previousWorkout = [
  {
    setNum: 1,
    weight: 75,
    reps: 10,
  },
  {
    setNum: 2,
    weight: 77,
    reps: 10,
  },
  {
    setNum: 3,
    weight: 80,
    reps: 8,
  },
  {
    setNum: 4,
    weight: 85,
    reps: 6,
  },
];

export const getRandomItemFromArray = (array: any[]) => {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
};

export function getRandomDate(start: string) {
  // Define the start date (June 1, 2023)
  const startDate = new Date(start);

  // Get the current date
  const currentDate = new Date();

  // Calculate the time difference between the start and current date in milliseconds
  const timeDiff = currentDate.getTime() - startDate.getTime();

  // Generate a random timestamp within the time difference
  const randomTimestamp = Math.floor(Math.random() * timeDiff);

  // Create a new date by adding the random timestamp to the start date
  const randomDate = new Date(startDate.getTime() + randomTimestamp);

  // Format the date to ISO 8601 format
  const iso8601Date = randomDate.toISOString().split('T')[0];

  return iso8601Date;
}

export const getRandomNumber = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
