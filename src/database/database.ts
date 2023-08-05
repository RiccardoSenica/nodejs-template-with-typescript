import { PrismaClient } from '@prisma/client';
import { randomUUID } from 'crypto';

const prisma = new PrismaClient();

/**
 * Create a new record in the Addition table.
 * @param value - The value number to add as a new record.
 * @returns Whether the database operation succeeded.
 */
export async function createAddition(value: number) {
  return await prisma.addition.create({
    data: {
      id: randomUUID(),
      datetime: new Date(),
      value
    }
  });
}

/**
 * Retrieve a record from the Addition table.
 * @param id - The id of the record.
 * @returns The retrieved record, or an error.
 */
export async function readAddition(id: string) {
  return await prisma.addition.findUniqueOrThrow({
    where: {
      id
    }
  });
}
