const functionComposeRight = require('./function-compose-right');

test('composes functions from left to right', () => {
  const add = (x, y) => x + y;
  const square = n => n * n;
  const addAndSquare = functionComposeRight(add, square);
  expect(addAndSquare(1, 2)).toBe(9);
});
