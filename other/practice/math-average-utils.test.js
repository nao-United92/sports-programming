import { average } from './math-average-utils.js';

describe('average', () => {
  test('should return the average of an array of numbers', () => {
    expect(average([1, 2, 3, 4, 5])).toBe(3);
  });

  test('should return 0 for an empty array', () => {
    expect(average([])).toBe(0);
  });

  test('should return 0 for non-array inputs', () => {
    expect(average(null)).toBe(0);
    expect(average(undefined)).toBe(0);
    expect(average('string')).toBe(0);
    expect(average({})).toBe(0);
  });

  test('should handle arrays with negative numbers', () => {
    expect(average([-1, 0, 1])).toBe(0);
  });

  test('should handle arrays with floating-point numbers', () => {
    expect(average([1.5, 2.5, 3.5])).toBe(2.5);
  });
});
