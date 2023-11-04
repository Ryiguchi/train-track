import { prisma } from '../config/prisma.config';

export async function getGroups() {
  const groups = await prisma.group.findMany();

  return groups;
}
