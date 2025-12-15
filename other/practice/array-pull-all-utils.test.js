const pullAll = require('./array-pull-all-utils');

test('mutates the original array by removing specified values', () => {
  const arr = ['a', 'b', 'c', 'a', 'b', 'c'];
  pullAll(arr, ['a', 'c']);
  expect(arr).toEqual(['b', 'b']);
});

test('does nothing if no values are specified', () => {
  const arr = ['a', 'b', 'c'];
  pullAll(arr, []);
  expect(arr).toEqual(['a', 'b', 'c']);
});

test('handles an empty array', () => {
  const arr = [];
  pullAll(arr, ['a']);
  expect(arr).toEqual([]);
});
