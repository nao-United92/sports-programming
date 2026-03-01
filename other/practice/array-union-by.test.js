const arrayUnionBy = require('./array-union-by');

test('creates a union of two arrays based on a function', () => {
  expect(arrayUnionBy([2.1], [1.2, 2.3], Math.floor)).toEqual([2.1, 1.2]);
});

test('handles empty arrays', () => {
  expect(arrayUnionBy([], [], x => x)).toEqual([]);
});
