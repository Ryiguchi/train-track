export {};

declare global {
  interface IUser {
    id: number;
    name: string | null;
    email: string | null;
  }
}
