import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';

export function isPrismaError(
  error: PrismaClientKnownRequestError | Error
): error is PrismaClientKnownRequestError {
  return (error as PrismaClientKnownRequestError).code !== undefined;
}
