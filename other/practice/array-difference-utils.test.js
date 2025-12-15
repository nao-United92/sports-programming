const difference = require('./array-difference-utils');

test('returns the difference between two arrays', () => {
  const arr = [1, 2, 3, 4, 5];
  const values = [3, 5];
  const result = difference(arr, values);
  expect(result).toEqual([1, 2, 4]);
});

test('returns the original array if no values are provided', () => {
  const arr = [1, 2, 3, 4, 5];
  const values = [];
  const result = difference(arr, values);
  expect(result).toEqual([1, 2, 3, 4, 5]);
});

test('returns an empty array if the original array is empty', () => {
  const arr = [];
  const values = [1, 2, 3];
  const result = difference(arr, values);
  expect(result).toEqual([]);
});

test('handles arrays with mixed data types', () => {
  const arr = [1, 'apple', true, null, undefined];
  const values = ['apple', null];
  const result = difference(arr, values);
  expect(result).toEqual([1, true, undefined]);
});