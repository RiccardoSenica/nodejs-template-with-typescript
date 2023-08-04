import { addition } from './addition';

describe('call', () => {
  it('returns the input value increased by one', async () => {
    const response = addition(3);

    expect(response).toBe(4);
  });
});
