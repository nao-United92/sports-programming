const sortedUniq = require('./array-sorted-uniq-utils');

test('removes duplicate values from a sorted array', () => {
  const arr = [1, 2, 2, 3, 4, 4, 4, 5];
  const result = sortedUniq(arr);
  expect(result).toEqual([1, 2, 3, 4, 5]);
});

test('handles an array with no duplicates', () => {
  const arr = [1, 2, 3, 4, 5];
  const result = sortedUniq(arr);
  expect(result).toEqual([1, 2, 3, 4, 5]);
});

test('handles an empty array', () => {
  const arr = [];
  const result = sortedUniq(arr);
  expect(result).toEqual([]);
});
