const median = require('./math-median-utils');

describe('median', () => {
  test('calculates median for odd number of elements', () => {
    expect(median([3, 1, 2])).toBe(2);
  });

  test('calculates median for even number of elements', () => {
    expect(median([1, 2, 3, 4])).toBe(2.5);
  });

  test('returns 0 for empty array', () => {
    expect(median([])).toBe(0);
  });

  test('handles negative numbers', () => {
    expect(median([-10, 0, 10])).toBe(0);
  });
});
