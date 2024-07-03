import { randomUUID } from 'crypto';
import { addition } from './addition';

jest.mock('../database/database', () => ({
  createAddition: jest.fn((value: number) => ({
    id: randomUUID(),
    datetime: new Date(),
    value
  }))
}));

afterEach(() => {
  jest.restoreAllMocks();
});

describe('call', () => {
  it('returns the input value increased by one', async () => {
    const response = await addition(3);

    expect(response).toBe(4);
  });
});
