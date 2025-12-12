const request = require('supertest');
const express = require('express');
const routes = require('../routes');

const app = express();
app.use(express.json());
app.use('/api', routes);

test('GET /api/hello responde correctamente', async () => {
  const res = await request(app).get('/api/hello?name=Test');

  expect(res.statusCode).toBe(200);
  expect(res.body.message).toBe('Hola Test, bienvenido a la app DevOps!');
});
