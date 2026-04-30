const mean = require('./fundamental-math-mean');

describe('mean', () => {
  test('calculates the mean of an array of numbers', () => {
    expect(mean([1, 2, 3, 4])).toBe(2.5);
  });

  test('calculates the mean of a single element array', () => {
    expect(mean([10])).toBe(10);
  });

  test('returns 0 for an empty array', () => {
    expect(mean([])).toBe(0);
  });
});
