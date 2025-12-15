const drop = require('./array-drop-utils');

test('drops the first element of an array', () => {
  const arr = [1, 2, 3, 4, 5];
  const result = drop(arr);
  expect(result).toEqual([2, 3, 4, 5]);
});

test('drops the specified number of elements from an array', () => {
  const arr = [1, 2, 3, 4, 5];
  const result = drop(arr, 3);
  expect(result).toEqual([4, 5]);
});

test('returns an empty array if the number of elements to drop is greater than the array length', () => {
  const arr = [1, 2, 3];
  const result = drop(arr, 5);
  expect(result).toEqual([]);
});

test('returns the original array if the number of elements to drop is 0', () => {
  const arr = [1, 2, 3];
  const result = drop(arr, 0);
  expect(result).toEqual([1, 2, 3]);
});
