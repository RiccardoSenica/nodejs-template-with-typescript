import { createAddition } from '../database/database';

/**
 * Increase the user imput value by one, and creates an Addition record with that value.
 * @param number - The user input value.
 * @returns The value increased by one.
 */
export async function addition(value: number) {
  await createAddition(value);

  return value + 1;
}
