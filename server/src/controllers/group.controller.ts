import { prisma } from '../config/prisma.config';

export async function getGroups() {
  const groups = await prisma.group.findMany();

  return groups;
}

export async function addGroup(name: string) {
  const newGroup = await prisma.group.create({ data: { name } });

  return newGroup;
}

export async function deleteGroup(name: string) {
  const deletedGroup = await prisma.group.delete({ where: { name } });

  return deletedGroup;
}
