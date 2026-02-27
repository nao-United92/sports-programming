const sortedUniq = require('./array-sorted-uniq');

test('sortedUniq removes duplicates from sorted array', () => {
  expect(sortedUniq([1, 1, 2, 3, 3])).toEqual([1, 2, 3]);
  expect(sortedUniq([1, 2, 3])).toEqual([1, 2, 3]);
});
