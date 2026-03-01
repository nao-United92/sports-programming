const arrayIntersection = require('./array-intersection');

test('returns the intersection of two arrays', () => {
  expect(arrayIntersection([1, 2, 3], [4, 3, 2])).toEqual([2, 3]);
});

test('returns empty array if no intersection', () => {
  expect(arrayIntersection([1, 2], [3, 4])).toEqual([]);
});
