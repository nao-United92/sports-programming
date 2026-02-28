
const rotateLeft = require('./array-rotate-left');

test('rotates array to the left', () => {
  expect(rotateLeft([1, 2, 3, 4, 5], 2)).toEqual([3, 4, 5, 1, 2]);
});
