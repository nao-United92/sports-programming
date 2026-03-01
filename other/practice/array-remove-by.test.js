const arrayRemoveBy = require('./array-remove-by');

test('removes elements matching the predicate and returns them', () => {
  const arr = [1, 2, 3, 4];
  const removed = arrayRemoveBy(arr, n => n % 2 === 0);
  expect(arr).toEqual([1, 3]);
  expect(removed).toEqual([2, 4]);
});

test('returns empty array if no elements match', () => {
  const arr = [1, 3, 5];
  const removed = arrayRemoveBy(arr, n => n % 2 === 0);
  expect(arr).toEqual([1, 3, 5]);
  expect(removed).toEqual([]);
});
