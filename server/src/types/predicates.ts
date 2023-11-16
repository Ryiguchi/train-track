import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';
import { SessionData } from 'express-session';
import { YogaInitialContext } from 'graphql-yoga';
import { ZodError } from 'zod';

export function isPrismaError(
  error: PrismaClientKnownRequestError | Error | ZodError
): error is PrismaClientKnownRequestError {
  return (error as PrismaClientKnownRequestError).code !== undefined;
}

export function isZodError(
  error: PrismaClientKnownRequestError | ZodError | Error
): error is ZodError {
  return (error as ZodError).errors !== undefined;
}

export function hasPassport(
  session: ISessionWithPassport | SessionData
): session is ISessionWithPassport {
  return (session as ISessionWithPassport).passport !== undefined;
}

export function isCustomRequest(
  req: Request | ICustomRequest
): req is ICustomRequest {
  return (req as ICustomRequest).session.passport !== undefined;
}

interface ContextWithUserId extends YogaInitialContext {
  req: {
    userId: number;
  };
}

export function hasUserId(
  context: YogaInitialContext | ContextWithUserId
): context is ContextWithUserId {
  return (context as ContextWithUserId).req?.userId !== undefined;
}
