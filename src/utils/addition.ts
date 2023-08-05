import { logger } from './logger';

/**
 * Format a response message containing a user input.
 * @param number - The user input value.
 * @returns The value increased by one.
 */
export function addition(value: number) {
  logger.info(`addition(${value})`);
  return value + 1;
}
