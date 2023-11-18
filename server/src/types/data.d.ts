import { User } from './resolvers-types';

export {};

declare global {
  interface IExerciseUpdateInput {
    id: number;
    name?: string;
    slug?: string;
    groupId?: number;
  }

  interface IUser extends User {
    createdAt: string;
    updatedAt: string;
  }

  interface ICreateWorkoutData {
    userId: number;
    exerciseId: number;
    date: Date;
    sets: {
      id: string;
      setNum: number;
      weight: number;
      reps: number;
    }[];
  }

  interface IArgsIsUserId {
    userId: number;
  }

  interface IArgsHasUserId {
    [key: string]: {
      userId: number;
    };
  }
}
