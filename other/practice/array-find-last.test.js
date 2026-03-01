const arrayFindLast = require('./array-find-last');

test('finds the last element matching the predicate', () => {
  expect(arrayFindLast([1, 2, 3, 4], n => n % 2 === 0)).toBe(4);
});

test('returns undefined if not found', () => {
  expect(arrayFindLast([1, 3, 5], n => n % 2 === 0)).toBeUndefined();
});
