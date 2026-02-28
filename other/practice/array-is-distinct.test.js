
const isDistinct = require('./array-is-distinct');

test('checks if array elements are unique', () => {
  expect(isDistinct([1, 2, 3])).toBe(true);
  expect(isDistinct([1, 2, 2])).toBe(false);
});
