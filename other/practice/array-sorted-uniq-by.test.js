const sortedUniqBy = require('./array-sorted-uniq-by');

test('sortedUniqBy removes duplicates using iteratee', () => {
  expect(sortedUniqBy([1.1, 1.2, 2.3, 2.4], Math.floor)).toEqual([1.1, 2.3]);
});
