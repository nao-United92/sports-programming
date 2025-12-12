const { max } = require('./array-max-utils');

describe('max', () => {
  test('should return the maximum value in an array of numbers', () => {
    expect(max([1, 5, 2, 8, 3])).toBe(8);
  });

  test('should return undefined for an empty array', () => {
    expect(max([])).toBeUndefined();
  });

  test('should return undefined if the input is not an array', () => {
    expect(max(null)).toBeUndefined();
    expect(max(undefined)).toBeUndefined();
    expect(max(123)).toBeUndefined();
    expect(max('string')).toBeUndefined();
    expect(max({})).toBeUndefined();
  });

  test('should handle arrays with negative numbers', () => {
    expect(max([-1, -5, -2, -8, -3])).toBe(-1);
  });

  test('should handle arrays with a single element', () => {
    expect(max([7])).toBe(7);
  });
});
