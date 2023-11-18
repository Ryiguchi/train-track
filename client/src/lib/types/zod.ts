import z from 'zod';
import { EColors } from './enums';

const isSlug = z.string().refine(value => !/\s/.test(value), {
  message: 'Slugs can not contain spaces',
});

const isId = z.number().int().positive();

const isPassword = z
  .string()
  .trim()
  .min(8, 'Passwords must have at least 8 characters.')
  .regex(/[0-9]/, 'Passwords must contain at least 1 number.')
  .regex(/[a-z]/, 'Passwords must contain at least 1 lowercase letter.')
  .regex(/[A-Z]/, 'Passwords must contain at least 1 capital letter.');

const isValidEmail = z
  .string()
  .trim()
  .email('The entered email is not valid. Please enter a valid email address.');
// export const dateISOValidator = z.string().regex(/^\d{4}-\d{2}-\d{2}$/);

const isValidColorEnum = z
  .string({
    required_error: 'You must choose a color!',
    invalid_type_error: 'You must choose a color!',
  })
  .refine(
    data => {
      return Object.values(EColors).includes(data as EColors);
    },
    { message: 'You must choose a color!' }
  );

export const exerciseDataValidator = z.object({
  name: z
    .string()
    .trim()
    .min(1, 'You must enter a name for your exercise!')
    .max(25, 'Exercise names can not be more than 25 characters long.'),
  slug: isSlug,
  groupId: isId,
});

export const updateExerciseDataValidator = exerciseDataValidator.extend({
  id: isId,
});

export const todaysGroupDataValidator = z.object({
  groupId: isId,
  date: z.string().datetime(),
});

export const setsValidator = z.object({
  id: z.string().min(1),
  setNum: z.number().positive(),
  weight: z.number().positive(),
  reps: z.number().positive(),
});

export const addWorkoutValidator = z.object({
  date: z.string().datetime(),
  exerciseId: isId,
  sets: z.array(setsValidator).nonempty('There is no workout data to save!'),
});

export const credentialsValidator = z.object({
  email: isValidEmail,
  password: isPassword,
  mode: z.enum(['signin', 'signup']),
});

export const newGroupValidator = z.object({
  name: z.string().min(1),
  color: isValidColorEnum,
});

export const editGroupValidator = newGroupValidator.extend({
  id: isId,
});

export const userReturnTypeValidator = z.object({
  id: z.number(),
  name: z.string().nullable(),
  email: z.string().nullable(),
});

export const updateEmailInputValidator = z.object({
  email: isValidEmail,
  password: isPassword,
});

export const updateNameInputValidator = z
  .string()
  .min(1, '"Username" can not be empty!');

export const updatePasswordInputValidator = z.object({
  newPassword: isPassword,
  confirmPassword: isPassword,
  oldPassword: isPassword,
});

export const legendValidator = z.array(
  z.object({
    name: z.string().min(1),
    color: isValidColorEnum,
  })
);
