const arrayUnion = require('./array-union');

test('returns the union of two arrays', () => {
  expect(arrayUnion([1, 2, 3], [4, 3, 2])).toEqual([1, 2, 3, 4]);
});

test('handles empty arrays', () => {
  expect(arrayUnion([], [1, 2])).toEqual([1, 2]);
});
