import { prisma } from '../config/prisma.config';

export async function getGroupsByUserId(userId: number) {
  const groups = await prisma.group.findMany({ where: { userId } });

  return groups;
}

export async function addGroup(name: string, color: string) {
  const newGroup = await prisma.group.create({ data: { name, color } });

  return newGroup;
}

export async function deleteGroup(name: string) {
  const deletedGroup = await prisma.group.delete({ where: { name } });

  return deletedGroup;
}
