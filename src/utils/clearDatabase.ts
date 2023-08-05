import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

/**
 * Clear the database of all records.
 */
export const clearDatabase = async () => {
  await prisma.addition.deleteMany({});
};

global.beforeAll(async () => {
  await clearDatabase();
});
