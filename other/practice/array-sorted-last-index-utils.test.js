const sortedLastIndex = require('./array-sorted-last-index-utils');

test('finds the last index at which a value should be inserted to maintain order', () => {
  const arr = [10, 20, 30, 30, 40, 50];
  expect(sortedLastIndex(arr, 30)).toBe(4);
});

test('handles values smaller than all elements', () => {
  const arr = [10, 20, 30];
  expect(sortedLastIndex(arr, 5)).toBe(0);
});

test('handles values larger than all elements', () => {
  const arr = [10, 20, 30];
  expect(sortedLastIndex(arr, 35)).toBe(3);
});

test('handles an empty array', () => {
  const arr = [];
  expect(sortedLastIndex(arr, 5)).toBe(0);
});
