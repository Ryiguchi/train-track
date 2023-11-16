import { Response } from 'express';

export function sendAxiosResponse(
  res: Response,
  data: any,
  statusCode: number = 200
) {
  return res.status(200).json({
    statusCode,
    ok: true,
    data,
  });
}

export function sendAxiosError(
  res: Response,
  error: string = 'An error occured',
  statusCode: number = 500
) {
  return res.status(200).json({
    statusCode,
    ok: false,
    error,
  });
}

export enum EErrorActions {
  SIGN_UP,
  SIGN_IN,
  ADD_EXERCISE,
  ADD_GROUP,
  UPDATE_GROUP,
  UPDATE_EXERCISE,
  UPDATE_USER,
}

export function getPrismaErrorMessage(
  code: string,
  action: EErrorActions,
  description: string = ''
) {
  switch (action) {
    case EErrorActions.SIGN_UP:
      switch (code) {
        case 'P2002':
          return 'An account already exists with the provided email. Sign in instead!';

        default:
          return 'There was a problem signing you up. Please try again later!';
      }

    case EErrorActions.SIGN_IN: {
      switch (code) {
        default:
          return 'There was a problem signing you in. Please try again later!';
      }
    }

    case EErrorActions.ADD_EXERCISE: {
      switch (code) {
        case 'P2002':
          return `The exercise, "${description}" already exists!`;

        default:
          return 'An error occurred while trying to save your exercise!';
      }
    }

    case EErrorActions.UPDATE_EXERCISE: {
      switch (code) {
        case 'P2002':
          return `The exercise, "${description}" already exists!`;

        default:
          return 'An error occurred while trying to update your exercise!';
      }
    }

    case EErrorActions.ADD_GROUP: {
      switch (code) {
        case 'P2002':
          return `The group, "${description}" already exists!`;

        default:
          return 'An error occurred while trying to save your group!';
      }
    }

    case EErrorActions.UPDATE_GROUP: {
      switch (code) {
        case 'P2002':
          return `The group, "${description}" already exists!`;

        default:
          return 'An error occurred while trying to update your group!';
      }
    }

    case EErrorActions.UPDATE_USER: {
      switch (code) {
        case 'P2002':
          return `An account with the email, "${description}" already exists!`;

        default:
          return 'An error occurred while trying to update your account!';
      }
    }

    default:
      return 'An Error Occured. Please try again later.';
  }
}
