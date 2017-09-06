import request from 'supertest';
import app from './server';

test('when a get request is made to /todos the server responds with a status code of 200', (done) => {
  const getToDos = jest.fn(); // eslint-disable-line no-unused-vars
  request(app).get('/todos').then((response) => {
    expect(response.statusCode).toBe(200);
    done();
  });
});