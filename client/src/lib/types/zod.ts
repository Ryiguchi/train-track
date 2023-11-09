import z from 'zod';

const isSlug = z.string().refine(value => !/\s/.test(value), {
  message: 'Slugs can not contain spaces',
});

// export const dateISOValidator = z.string().regex(/^\d{4}-\d{2}-\d{2}$/);

export const exerciseDataValidator = z.object({
  name: z
    .string()
    .trim()
    .min(1, 'You must enter a name for your exercise!')
    .max(25, 'Exercise names can not be more than 25 characters long.'),
  slug: isSlug,
  groupId: z.number().positive(),
  userId: z.number().positive(),
});

export const todaysGroupDataValidator = z.object({
  userId: z.number().positive(),
  groupId: z.number().positive(),
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
  exerciseId: z.number().positive(),
  userId: z.number().positive(),
  sets: z.array(setsValidator),
});

export const credentialsValidator = z.object({
  email: z
    .string()
    .trim()
    .email(
      'The entered email is not valid. Please enter a valid email address.'
    ),
  password: z
    .string()
    .trim()
    .min(8, 'Passwords must have at least 8 characters.')
    .regex(/[0-9]/, 'Passwords must contain at least 1 number.')
    .regex(/[a-z]/, 'Passwords must contain at least 1 lowercase letter.')
    .regex(/[A-Z]/, 'Passwords must contain at least 1 capital letter.'),
  mode: z.enum(['signin', 'signup']),
});
