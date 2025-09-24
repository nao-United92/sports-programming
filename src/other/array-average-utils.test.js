import { average } from './array-average-utils';

describe('average', () => {
  test('should return the average of an array of numbers', () => {
    expect(average([1, 2, 3, 4, 5])).toBe(3);
  });

  test('should return 0 for an empty array', () => {
    expect(average([])).toBe(0);
  });

  test('should handle negative numbers', () => {
    expect(average([-1, -2, -3, -4, -5])).toBe(-3);
  });

  test('should handle a mix of positive and negative numbers', () => {
    expect(average([-1, 1, -2, 2])).toBe(0);
  });

  test('should return 0 for a non-array input', () => {
    expect(average(null)).toBe(0);
    expect(average(undefined)).toBe(0);
    expect(average({})).toBe(0);
  });
});
