import { max } from './max-utils';

describe('max', () => {
  test('should find the maximum value in a simple array of numbers', () => {
    const arr = [1, 2, 3, 4, 5];
    const expected = 5;
    expect(max(arr)).toBe(expected);
  });

  test('should return undefined for an empty array', () => {
    const arr = [];
    expect(max(arr)).toBeUndefined();
  });

  test('should handle an array with a single number', () => {
    const arr = [10];
    const expected = 10;
    expect(max(arr)).toBe(expected);
  });

  test('should handle an array with negative numbers', () => {
    const arr = [-1, -2, -3, -4, -5];
    const expected = -1;
    expect(max(arr)).toBe(expected);
  });

  test('should handle an array with mixed positive and negative numbers', () => {
    const arr = [-1, 2, -3, 4, -5];
    const expected = 4;
    expect(max(arr)).toBe(expected);
  });
});
