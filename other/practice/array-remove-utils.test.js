const remove = require('./array-remove-utils');

test('removes elements from an array based on a predicate and returns the removed elements', () => {
  const arr = [1, 2, 3, 4, 5, 6];
  const isEven = (n) => n % 2 === 0;
  const removed = remove(arr, isEven);

  expect(arr).toEqual([1, 3, 5]);
  expect(removed).toEqual([2, 4, 6]);
});

test('returns an empty array if no elements are removed', () => {
  const arr = [1, 3, 5];
  const isEven = (n) => n % 2 === 0;
  const removed = remove(arr, isEven);

  expect(arr).toEqual([1, 3, 5]);
  expect(removed).toEqual([]);
});
