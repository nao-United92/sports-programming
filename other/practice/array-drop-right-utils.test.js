const dropRight = require('./array-drop-right-utils');

test('drops the last element of an array', () => {
  const arr = [1, 2, 3, 4, 5];
  const result = dropRight(arr);
  expect(result).toEqual([1, 2, 3, 4]);
});

test('drops the specified number of elements from the end of an array', () => {
  const arr = [1, 2, 3, 4, 5];
  const result = dropRight(arr, 3);
  expect(result).toEqual([1, 2]);
});

test('returns an empty array if the number of elements to drop is greater than the array length', () => {
  const arr = [1, 2, 3];
  const result = dropRight(arr, 5);
  expect(result).toEqual([]);
});

test('returns the original array if the number of elements to drop is 0', () => {
  const arr = [1, 2, 3];
  const result = dropRight(arr, 0);
  expect(result).toEqual([1, 2, 3]);
});
