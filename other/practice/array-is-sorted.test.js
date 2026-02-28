
const isSorted = require('./array-is-sorted');

test('checks if array is sorted', () => {
  expect(isSorted([1, 2, 3])).toBe(true);
  expect(isSorted([1, 3, 2])).toBe(false);
});
