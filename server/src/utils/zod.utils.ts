import { ZodNumber, ZodString, z } from 'zod';

export const positiveNumber = z.number().min(1);
export const nonNullString = z.string().min(1);

export const passportUserDataVerifier = z.object({
  id: positiveNumber,
  name: z.nullable(nonNullString),
  email: z.nullable(nonNullString.email({ message: 'Invalid email!' })),
});
