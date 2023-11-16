import { z } from 'zod';

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

export const positiveNumber = z.number().min(1);
export const nonNullString = z.string().min(1, '');

export const passportUserDataVerifier = z.object({
  id: positiveNumber,
  name: z.nullable(nonNullString),
  email: z.nullable(nonNullString.email({ message: 'Invalid email!' })),
});

export const updateEmailInputValidator = z.object({
  email: isValidEmail,
  password: isPassword,
});

export const updatePasswordInputValidator = z.object({
  newPassword: isPassword,
  oldPassword: isPassword,
});
