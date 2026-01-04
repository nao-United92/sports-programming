const { mean } = require('./array-mean-utils');

describe('mean', () => {
  test('should calculate the mean of an array of positive numbers', () => {
    expect(mean([1, 2, 3, 4, 5])).toBe(3);
  });

  test('should calculate the mean of an array including negative numbers', () => {
    expect(mean([-1, 0, 1, 2, 3])).toBe(1);
  });

  test('should calculate the mean of an array including zero', () => {
    expect(mean([0, 0, 0])).toBe(0);
  });

  test('should return NaN for an empty array', () => {
    expect(mean([])).toBeNaN();
  });

  test('should return the number itself for a single-element array', () => {
    expect(mean([42])).toBe(42);
  });

  test('should return NaN if any element is non-numeric', () => {
    expect(mean([1, 2, 'a', 4])).toBeNaN();
    expect(mean([1, 2, undefined, 4])).toBeNaN();
    expect(mean([1, 2, null, 4])).toBeNaN(); // null is 0 in arithmetic, but for mean, we want explicit numbers
    expect(mean([1, 2, NaN, 4])).toBeNaN();
  });

  test('should throw TypeError if input is not an array', () => {
    expect(() => mean(null)).toThrow(TypeError);
    expect(() => mean(undefined)).toThrow(TypeError);
    expect(() => mean(123)).toThrow(TypeError);
    expect(() => mean('string')).toThrow(TypeError);
    expect(() => mean({})).toThrow(TypeError);
  });
});