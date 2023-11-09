import type { Request, Response } from 'express';
import { hashPassword } from '../utils/bcryptjs.utils';
import { prisma } from '../config/prisma.config';
import passport from 'passport';
import {
  EErrorActions,
  getPrismaErrorMessage,
  sendAxiosError,
  sendAxiosResponse,
} from '../utils/error.utils';
import { isPrismaError } from '../types/predicates';

function sendSessionCookie(
  req: Request,
  res: Response,
  user: IUserLoginReturnData
) {
  req.login(user, loginError => {
    if (loginError) {
      return sendAxiosError(res, 'Login failed!');
    }

    return sendAxiosResponse(res, user);
  });
}

export function signin(req: Request, res: Response) {
  passport.authenticate('local', (error: any, user: IUserLoginReturnData) => {
    if (error) {
      return sendAxiosError(res, error.message, error.code);
    }

    sendSessionCookie(req, res, user);
  })(req, res);
}

export async function signup(req: Request, res: Response) {
  const { email, password } = req.body;

  const hashedPassword = await hashPassword(password);

  try {
    const newUser = await prisma.user.create({
      data: { email, password: hashedPassword },
    });

    const userData = {
      id: newUser.id,
      name: newUser.name || null,
      email: newUser.email,
    };

    sendSessionCookie(req, res, userData);
  } catch (error: any) {
    // console.log('ERROR', error.code);

    let errorMessage: string;

    if (isPrismaError(error)) {
      errorMessage = getPrismaErrorMessage(error.code, EErrorActions.SIGN_UP);
    } else {
      errorMessage = 'An error occured. Please try again later.';
    }

    sendAxiosError(res, errorMessage);
  }
}

export function signout(req: Request, res: Response) {
  req.session.destroy((error: any) => {
    if (error) {
      sendAxiosError(
        res,
        'There was an error logging you out. Please try again.'
      );
    } else {
      sendAxiosResponse(res, null, 204);
    }
  });
}

export async function validateSession(req: Request, res: Response) {
  const sessionWithPassport = req.session as unknown as ISessionWithPassport;

  if (sessionWithPassport.passport) {
    const userData = {
      id: sessionWithPassport.passport.user.id,
      name: sessionWithPassport.passport.user.name,
      email: sessionWithPassport.passport.user.email,
    };

    sendAxiosResponse(res, userData);
  } else {
    sendAxiosError(res, 'You are not logged in!', 401);
  }
}
