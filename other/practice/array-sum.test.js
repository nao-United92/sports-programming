import { sum } from './array-sum';

describe('sum', () => {
  test('should compute the sum of numbers in an array', () => {
    const arr = [1, 2, 3, 4, 5];
    expect(sum(arr)).toBe(15);
  });

  test('should return 0 for an empty array', () => {
    const arr = [];
    expect(sum(arr)).toBe(0);
  });

  test('should handle negative numbers', () => {
    const arr = [-1, -2, 3];
    expect(sum(arr)).toBe(0);
  });

  test('should handle floating point numbers', () => {
    const arr = [1.5, 2.5, 3.0];
    expect(sum(arr)).toBe(7.0);
  });

  test('should handle mixed numbers and strings that can be converted to numbers', () => {
    const arr = [1, '2', 3];
    expect(sum(arr)).toBe(6);
  });

  test('should return 0 for non-array input', () => {
    expect(sum(null)).toBe(0);
    expect(sum(undefined)).toBe(0);
    expect(sum(123)).toBe(0);
    expect(sum('string')).toBe(0);
  });

  test('should treat non-numeric values as 0 (after Number() conversion)', () => {
    const arr = [1, 'a', 2]; // Number('a') is NaN, which becomes 0 in addition
    expect(sum(arr)).toBe(3);
  });
});
