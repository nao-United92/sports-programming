const sortedIndexBy = require('./array-sorted-index-by');

test('sortedIndexBy returns the correct insertion index with iteratee', () => {
  const objects = [{ 'x': 4 }, { 'x': 5 }];
  expect(sortedIndexBy(objects, { 'x': 4 }, o => o.x)).toBe(0);
  expect(sortedIndexBy(objects, { 'x': 5 }, o => o.x)).toBe(1);
});
