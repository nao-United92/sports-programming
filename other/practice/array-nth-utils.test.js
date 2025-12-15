const nth = require('./array-nth-utils');

test('gets the element at a given index', () => {
  const arr = ['a', 'b', 'c', 'd'];
  expect(nth(arr, 1)).toBe('b');
});

test('gets the first element by default', () => {
  const arr = ['a', 'b', 'c', 'd'];
  expect(nth(arr)).toBe('a');
});

test('gets the element from the end with a negative index', () => {
  const arr = ['a', 'b', 'c', 'd'];
  expect(nth(arr, -2)).toBe('c');
});

test('returns undefined for an out-of-bounds index', () => {
  const arr = ['a', 'b', 'c', 'd'];
  expect(nth(arr, 10)).toBeUndefined();
});
