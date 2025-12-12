const request = require('supertest');
const app = require('../../src/app');

describe('Health Check API', () => {
  test('GET /api/health devuelve status ok', async () => {
    const response = await request(app).get('/api/health');

    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty('status', 'ok');
    expect(response.body).toHaveProperty('message');
    expect(response.body).toHaveProperty('timestamp');
  });
});

describe('Hello API', () => {
  test('GET / devuelve HTML', async () => {
    const response = await request(app).get('/');
    expect(response.statusCode).toBe(200);
  });
});
