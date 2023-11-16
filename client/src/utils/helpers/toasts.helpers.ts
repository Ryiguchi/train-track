import { EToastType } from '@/lib/types/enums';
import {
  isError,
  isGraphQlError,
  isNetworkError,
  isZodError,
} from '@/lib/types/predicates';

const defaultErrorMessage = 'An error occurred. Please try again later!';

// MESSAGE EXTRACTOR
function extractErrorMessage(error: any) {
  if (isZodError(error)) {
    return error.errors[0].message;
  }

  if (isNetworkError(error) && error.networkError) {
    return error.networkError.message;
  }

  if (isGraphQlError(error)) {
    return error.graphQLErrors[0].message;
  }

  if (isError(error)) {
    return error.message;
  }

  return defaultErrorMessage;
}

// TOAST BUILDERS
function successToast(message: string) {
  return {
    title: 'Success!',
    message,
    type: EToastType.SUCCESS,
  };
}

function failedToast(message: string) {
  return {
    title: 'Failed!',
    message,
    type: EToastType.FAILED,
  };
}

// SIGNIN
export const signInSuccessToast = successToast(
  'You have successfully logged in!'
);

export function signInFailedToast(error: string) {
  return failedToast(extractErrorMessage(error));
}

// SIGNOUT
export const signOutSuccessToast = successToast(
  'You have successfully logged out!'
);

export function signOutFailedToast(error: string) {
  return failedToast(extractErrorMessage(error));
}

// ADD EXERCISE
export const addExerciseSuccessToast = successToast(
  'Your exercise was successfully added/updated!'
);

export function addExerciseFailedToast(error: any) {
  return failedToast(extractErrorMessage(error));
}

// DELETE EXERCISE

export const deleteExerciseSuccessToast = successToast(
  'Your exercise has been successfully deleted!'
);

export function deleteExerciseFailedToast(error: any) {
  return failedToast(extractErrorMessage(error));
}

// SET TODAYS GROUP
export const setTodaysGroupSuccessToast = successToast(
  "Today's group has been successfully set!"
);

export function setTodaysGroupFailedToast(error: any) {
  return failedToast(extractErrorMessage(error));
}

// ADD WORKOUT
export const addWorkoutSuccessToast = successToast(
  'Your workout has been successfully added!'
);

export function addWorkoutFailedToast(error: any) {
  return failedToast(extractErrorMessage(error));
}

// ADD GROUP
export const addGroupSuccessToast = successToast(
  'Your group has been successfully added/updated!'
);

export function addGroupFailedToast(error: any) {
  return failedToast(extractErrorMessage(error));
}

// DELETE GROUP
export const deleteGroupSuccessToast = successToast(
  'Your group has been successfully deleted!'
);

export function deleteGroupFailedToast(error: any) {
  return failedToast(extractErrorMessage(error));
}

// UPDATE NAME
export function updateUserSuccessToast(userDataType: string) {
  return successToast(`Your ${userDataType} has been successfully updated!`);
}

export function updateUserFailedToast(error: any) {
  return failedToast(extractErrorMessage(error));
}
