const sortedIndex = require('./array-sorted-index');

test('sortedIndex returns the correct insertion index', () => {
  expect(sortedIndex([30, 50], 40)).toBe(1);
  expect(sortedIndex([4, 5, 5, 5, 6], 5)).toBe(1);
  expect(sortedIndex([10, 20, 30, 40, 50], 5)).toBe(0);
  expect(sortedIndex([10, 20, 30, 40, 50], 60)).toBe(5);
});
