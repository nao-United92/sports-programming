const xor = require('./array-xor');

test('xor calculates symmetric difference', () => {
  expect(xor([2, 1], [2, 3])).toEqual([1, 3]);
  expect(xor([2, 1], [2, 3], [1, 4])).toEqual([3, 4]);
});

test('xor handles empty arrays', () => {
  expect(xor([1, 2], [])).toEqual([1, 2]);
});
