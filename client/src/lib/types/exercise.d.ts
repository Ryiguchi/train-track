export {};

declare global {
  interface IExercise {
    id: number;
    name: string;
    slug: string;
    group: string;
  }

  interface IAddExerciseData {
    name: string;
    slug: string;
    groupId: number;
    userId: number;
  }
}
