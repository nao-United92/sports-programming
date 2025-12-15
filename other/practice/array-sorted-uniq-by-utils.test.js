const sortedUniqBy = require('./array-sorted-uniq-by-utils');

test('removes duplicate values from a sorted array based on an iteratee', () => {
  const arr = [{ x: 1 }, { x: 2 }, { x: 2 }, { x: 3 }];
  const result = sortedUniqBy(arr, o => o.x);
  expect(result).toEqual([{ x: 1 }, { x: 2 }, { x: 3 }]);
});

test('handles an array with no duplicates', () => {
  const arr = [{ x: 1 }, { x: 2 }, { x: 3 }];
  const result = sortedUniqBy(arr, o => o.x);
  expect(result).toEqual([{ x: 1 }, { x: 2 }, { x: 3 }]);
});

test('handles an empty array', () => {
  const arr = [];
  const result = sortedUniqBy(arr, o => o.x);
  expect(result).toEqual([]);
});
