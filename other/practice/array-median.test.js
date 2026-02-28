
const median = require('./array-median');

test('calculates median of numbers', () => {
  expect(median([5, 6, 50, 1, -5])).toBe(5);
  expect(median([1, 2, 3, 4])).toBe(2.5);
});
