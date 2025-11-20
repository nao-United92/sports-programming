import { sumArray } from './array-math-utils.js';

describe('sumArray', () => {
  it('should return the sum of numbers in an array', () => {
    expect(sumArray([1, 2, 3, 4, 5])).toBe(15);
  });

  it('should return 0 for an empty array', () => {
    expect(sumArray([])).toBe(0);
  });

  it('should ignore non-numeric values', () => {
    expect(sumArray([1, 'a', 2, null, 3, undefined, 4, {}, 5])).toBe(15);
  });

  it('should handle negative numbers', () => {
    expect(sumArray([1, -2, 3, -4, 5])).toBe(3);
  });

  it('should handle floating point numbers', () => {
    expect(sumArray([1.5, 2.5, 3.0])).toBe(7.0);
  });

  it('should return 0 for non-array inputs', () => {
    expect(sumArray(null)).toBe(0);
    expect(sumArray(undefined)).toBe(0);
    expect(sumArray('string')).toBe(0);
    expect(sumArray(123)).toBe(0);
    expect(sumArray({})).toBe(0);
  });
});
