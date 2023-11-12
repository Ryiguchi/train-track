export {};

declare global {
  interface IGraphqlRequestWithUserId extends Request {
    userId: number;
  }
}
