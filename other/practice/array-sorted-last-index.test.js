const sortedLastIndex = require('./array-sorted-last-index');

test('sortedLastIndex returns the highest insertion index', () => {
  expect(sortedLastIndex([4, 5, 5, 5, 6], 5)).toBe(4);
});
