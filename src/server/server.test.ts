import requests from 'supertest';
import server from './server';

beforeAll(() => {
  jest.mock('../utils/addition', () => ({
    addition: jest.fn((value: number) => value + 1)
  }));
});

afterAll(() => {
  jest.clearAllMocks();
});

describe('server', () => {
  it('returns input value increased by one', async () => {
    const value = 1;
    const res = await requests(server)
      .post('/')
      .send({ value: value })
      .set('Content-Type', 'application/json')
      .set('Accept', 'application/json');

    expect(res.body.response).toBeDefined();
    expect(res.body.response).toBe(value + 1);
  });
});
