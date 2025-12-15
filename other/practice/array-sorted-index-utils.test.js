const sortedIndex = require('./array-sorted-index-utils');

test('finds the index at which a value should be inserted to maintain order', () => {
  const arr = [10, 20, 30, 40, 50];
  expect(sortedIndex(arr, 35)).toBe(3);
});

test('handles values smaller than all elements', () => {
  const arr = [10, 20, 30];
  expect(sortedIndex(arr, 5)).toBe(0);
});

test('handles values larger than all elements', () => {
  const arr = [10, 20, 30];
  expect(sortedIndex(arr, 35)).toBe(3);
});

test('handles an empty array', () => {
  const arr = [];
  expect(sortedIndex(arr, 5)).toBe(0);
});
