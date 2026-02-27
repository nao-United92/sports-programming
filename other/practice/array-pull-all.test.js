const pullAll = require('./array-pull-all');

test('pullAll removes all given values from array', () => {
  const array = ['a', 'b', 'c', 'a', 'b', 'c'];
  pullAll(array, ['a', 'c']);
  expect(array).toEqual(['b', 'b']);
});

test('pullAll mutates the original array', () => {
  const array = [1, 2, 3];
  const result = pullAll(array, [1]);
  expect(result).toBe(array);
});
