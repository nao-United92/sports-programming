const sortedLastIndexBy = require('./array-sorted-last-index-by-utils');

test('finds the last sorted index by a given iteratee', () => {
  const arr = [{ x: 4 }, { x: 5 }, { x: 5 }, { x: 7 }];
  const result = sortedLastIndexBy(arr, { x: 5 }, o => o.x);
  expect(result).toBe(3);
});

test('handles an empty array', () => {
  const arr = [];
  const result = sortedLastIndexBy(arr, { x: 5 }, o => o.x);
  expect(result).toBe(0);
});
