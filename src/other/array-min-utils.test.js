const { min } = require('./array-min-utils');

describe('min', () => {
  test('should return the minimum value in an array of numbers', () => {
    expect(min([1, 5, 2, 8, 3])).toBe(1);
  });

  test('should return undefined for an empty array', () => {
    expect(min([])).toBeUndefined();
  });

  test('should return undefined if the input is not an array', () => {
    expect(min(null)).toBeUndefined();
    expect(min(undefined)).toBeUndefined();
    expect(min(123)).toBeUndefined();
    expect(min('string')).toBeUndefined();
    expect(min({})).toBeUndefined();
  });

  test('should handle arrays with negative numbers', () => {
    expect(min([-1, -5, -2, -8, -3])).toBe(-8);
  });

  test('should handle arrays with a single element', () => {
    expect(min([7])).toBe(7);
  });
});
