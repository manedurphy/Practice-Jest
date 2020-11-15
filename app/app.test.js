const request = require('supertest');
const app = require('./app');

describe('GET /', () => {
  test('It should response with an array of students', async (done) => {
    try {
      const response = await request(app).get('/');
      expect(response.body).toEqual(['Elie', 'Matt', 'Joel', 'Michael']);
      expect(response.statusCode).toBe(200);
      done();
    } catch (error) {
      throw error;
    }
  });
});

describe('GET /post', () => {
  test('It should respond with a post object', async (done) => {
    const response = await request(app).get('/post');
    expect(response.body).toEqual({
      userId: 1,
      id: 1,
      title:
        'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
      body:
        'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
    });
    expect(response.statusCode).toBe(200);
    done();
  });
});
