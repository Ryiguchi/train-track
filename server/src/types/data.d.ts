export {};

declare global {
  interface IExerciseUpdateInput {
    id: number;
    name?: string;
    slug?: string;
    groupId?: number;
  }
}
