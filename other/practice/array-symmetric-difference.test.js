const arraySymmetricDifference = require('./array-symmetric-difference');

test('returns the symmetric difference of two arrays', () => {
  expect(arraySymmetricDifference([1, 2, 3], [1, 2, 4])).toEqual([3, 4]);
});

test('handles no symmetric difference', () => {
  expect(arraySymmetricDifference([1, 2], [1, 2])).toEqual([]);
});
