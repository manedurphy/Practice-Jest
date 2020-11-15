const db = require('./db');

describe('Database initialization', () => {
  test('It should execute addition query with database', async (done) => {
    db.query('SELECT 1 + 1 AS solution', (err, results, fields) => {
      expect(results[0].solution).toBe(2);
      db.end();
      done();
    });
  });
});
