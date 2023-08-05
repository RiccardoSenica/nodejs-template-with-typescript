import { createAddition } from '../database/database';
import { logger } from './logger';

/**
 * Increase the user imput value by one, and creates an Addition record with that value.
 * @param number - The user input value.
 * @returns The value increased by one.
 */
export async function addition(value: number) {
  logger.info(`addition(${value})`);
  return value + 1;
}
