import { formatResponse } from './call';

describe('call', () => {
  it('returns the formatted response string', async () => {
    const response = formatResponse('test');

    expect(response).toBe('This is the string from GET: test');
  });
});
