const reverse = require('./array-reverse-utils');

test('reverses an array without mutating the original', () => {
  const arr = [1, 2, 3, 4, 5];
  const result = reverse(arr);

  expect(arr).toEqual([1, 2, 3, 4, 5]);
  expect(result).toEqual([5, 4, 3, 2, 1]);
});

test('handles an empty array', () => {
  const arr = [];
  const result = reverse(arr);
  expect(result).toEqual([]);
});
