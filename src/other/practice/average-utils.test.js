import { average } from './average-utils';

describe('average', () => {
  test('should calculate the average of a simple array of numbers', () => {
    const arr = [1, 2, 3, 4, 5];
    const expected = 3;
    expect(average(arr)).toBe(expected);
  });

  test('should return 0 for an empty array', () => {
    const arr = [];
    const expected = 0;
    expect(average(arr)).toBe(expected);
  });

  test('should handle an array with a single number', () => {
    const arr = [10];
    const expected = 10;
    expect(average(arr)).toBe(expected);
  });

  test('should handle an array with negative numbers', () => {
    const arr = [-1, -2, -3, -4, -5];
    const expected = -3;
    expect(average(arr)).toBe(expected);
  });

  test('should handle an array with mixed positive and negative numbers', () => {
    const arr = [-1, 2, -3, 4, -5];
    const expected = -0.6;
    expect(average(arr)).toBe(expected);
  });
});
