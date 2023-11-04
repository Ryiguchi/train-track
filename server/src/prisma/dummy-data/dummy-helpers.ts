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
  // const iso8601Date = randomDate.toISOString().split('T')[0];
  const iso8601Date = randomDate.toISOString();

  return iso8601Date;
}

export const getRandomGroup = () => {
  const randomNum = Math.floor(Math.random() * 3) + 1;
  return randomNum;
};

export const getRandomNumber = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
