import { NextFunction, Request, Response } from 'express';
import { hasPassport } from '../types/predicates';

export async function contextMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  if (!hasPassport(req.session)) return next();

  const userId = req.session.passport.user.id;
  (req as unknown as ICustomRequest).userId = userId;
  next();
}
