
const rotateRight = require('./array-rotate-right');

test('rotates array to the right', () => {
  expect(rotateRight([1, 2, 3, 4, 5], 2)).toEqual([4, 5, 1, 2, 3]);
});
