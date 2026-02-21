
const intersection = require('./array-intersection-simple');

test('intersection of [1, 2, 3] and [2, 3, 4] should be [2, 3]', () => {
  expect(intersection([1, 2, 3], [2, 3, 4])).toEqual([2, 3]);
});

test('intersection of disjoint arrays should be empty', () => {
  expect(intersection([1, 2], [3, 4])).toEqual([]);
});
