const flattenLevel = require('./array-flatten-level-utils');

test('flattens an array to a specified level', () => {
  const arr = [1, [2, [3, [4, 5]]]];
  const result = flattenLevel(arr, 2);
  expect(result).toEqual([1, 2, 3, [4, 5]]);
});

test('flattens a single level by default', () => {
  const arr = [1, [2, [3, [4, 5]]]];
  const result = flattenLevel(arr);
  expect(result).toEqual([1, 2, [3, [4, 5]]]);
});

test('returns the original array if the level is 0', () => {
  const arr = [1, [2, [3, [4, 5]]]];
  const result = flattenLevel(arr, 0);
  expect(result).toEqual([1, [2, [3, [4, 5]]]]);
});
