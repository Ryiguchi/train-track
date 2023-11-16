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
}
