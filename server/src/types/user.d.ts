export {};

declare global {
  interface IUserWithIndex {
    [key: string]: string | number | Date | null;

    id: number;
    createdAt: Date;
    updatedAt: Date;
    name: string | null;
    email: string | null;
    password: string | null;
    googleId: string | null;
  }

  interface IUserLoginReturnData {
    id: number;
    name: string | null;
    email: string | null;
  }
}
