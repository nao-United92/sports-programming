const fill = require('./array-fill-utils');

test('fills an array with a value', () => {
  const arr = [1, 2, 3, 4, 5];
  const result = fill(arr, 0);
  expect(result).toEqual([0, 0, 0, 0, 0]);
});

test('fills a portion of an array with a value', () => {
  const arr = [1, 2, 3, 4, 5];
  const result = fill(arr, 0, 1, 4);
  expect(result).toEqual([1, 0, 0, 0, 5]);
});

test('does not modify the original array', () => {
  const arr = [1, 2, 3];
  fill(arr, 0);
  expect(arr).toEqual([1, 2, 3]);
});

test('handles an empty array', () => {
  const arr = [];
  const result = fill(arr, 0);
  expect(result).toEqual([]);
});
