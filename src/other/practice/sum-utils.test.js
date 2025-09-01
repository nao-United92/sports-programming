import { sum } from './sum-utils';

describe('sum', () => {
  test('should calculate the sum of a simple array of numbers', () => {
    const arr = [1, 2, 3, 4, 5];
    const expected = 15;
    expect(sum(arr)).toBe(expected);
  });

  test('should return 0 for an empty array', () => {
    const arr = [];
    const expected = 0;
    expect(sum(arr)).toBe(expected);
  });

  test('should handle an array with a single number', () => {
    const arr = [10];
    const expected = 10;
    expect(sum(arr)).toBe(expected);
  });

  test('should handle an array with negative numbers', () => {
    const arr = [-1, -2, -3, -4, -5];
    const expected = -15;
    expect(sum(arr)).toBe(expected);
  });

  test('should handle an array with mixed positive and negative numbers', () => {
    const arr = [-1, 2, -3, 4, -5];
    const expected = -3;
    expect(sum(arr)).toBe(expected);
  });
});
