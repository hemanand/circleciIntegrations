const http = require('http');
const request = require('supertest');

// Import the server code
const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('My Nodejs Sample project');
});

describe('HTTP Server', () => {
  let app;

  beforeAll((done) => {
    app = server.listen(3000, done);
  });

  afterAll((done) => {
    app.close(done);
  });

  test('responds with "My Nodejs Sample project"', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
    expect(response.text).toBe('My Nodejs Sample project');
  });
});
