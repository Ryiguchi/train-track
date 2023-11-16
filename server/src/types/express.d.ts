import { NextFunction, Request, Response, User, Express } from 'express';
import { Session, SessionData } from 'express-session';

export {};

declare global {
  interface IUserBody {
    name: string | null;
    email: string | null;
  }
  interface IRequestWithBody<T> extends Request {
    body: T;
  }
  interface IResponseWithBody<T> extends Response {
    body: T;
  }

  interface IExpressUserWithId extends User {
    userId: number;
  }

  type TExpresssHandler = (
    req: Request,
    res: Response,
    next: NextFunction
  ) => void;

  interface ISessionWithPassport extends Session {
    passport: {
      user: IUserLoginReturnData;
    };
  }
  interface ICustomRequest extends Request {
    session: ISessionWithPassport;
    userId: number;
  }
}
