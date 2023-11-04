export {};

declare global {
  interface IExerciseQueryResult {
    id: number;
    name: string;
    slug: string;
    group: string;
  }

  interface IExerciseDeleteResult extends Omit<IExerciseQueryResult, 'group'> {
    groupId: number;
  }

  interface IExerciseInput {
    name: string;
    slug: string;
    groupId?: number;
  }

  interface IExerciseUpdateInput extends Partial<IExerciseInput> {
    id: number;
  }
}
