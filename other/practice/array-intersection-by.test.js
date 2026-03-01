const arrayIntersectionBy = require('./array-intersection-by');

test('returns elements present in both arrays based on function', () => {
  expect(arrayIntersectionBy([2.1, 1.2], [2.3, 3.4], Math.floor)).toEqual([2.1]);
});

test('returns empty array if no intersection', () => {
  expect(arrayIntersectionBy([1.1], [2.2], Math.floor)).toEqual([]);
});
