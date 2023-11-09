import { hash, compare } from 'bcryptjs';

export async function hashPassword(password: string) {
  return await hash(password, 12);
}

export async function verifyPassword(
  givenPassword: string,
  hashedPassword: string
) {
  const isValid = await compare(givenPassword, hashedPassword);
  return isValid;
}
