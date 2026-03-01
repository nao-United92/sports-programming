const arrayFindLastIndex = require('./array-find-last-index');

test('finds the last index matching the predicate', () => {
  expect(arrayFindLastIndex([1, 2, 3, 4], n => n % 2 === 0)).toBe(3);
});

test('returns -1 if not found', () => {
  expect(arrayFindLastIndex([1, 3, 5], n => n % 2 === 0)).toBe(-1);
});
