import { createAddition, readAddition } from './database';

describe('Database', () => {
  it('creates a new record in the Addition table and reads it', async () => {
    const value = 13;

    const createResult = await createAddition(value);

    const readResult = await readAddition(createResult.id);
    expect(readResult).toBeDefined();
    expect(readResult.value).toBe(value);
  });
});
