const sortedIndexBy = require('./array-sorted-index-by-utils');

test('finds the sorted index by a given iteratee', () => {
  const arr = [{ x: 4 }, { x: 5 }, { x: 7 }];
  const result = sortedIndexBy(arr, { x: 6 }, o => o.x);
  expect(result).toBe(2);
});

test('handles an empty array', () => {
  const arr = [];
  const result = sortedIndexBy(arr, { x: 5 }, o => o.x);
  expect(result).toBe(0);
});
