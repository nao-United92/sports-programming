import arrayAverageNumbers from './array-average-numbers';

describe('arrayAverageNumbers', () => {
  test('should return the average of positive numbers', () => {
    expect(arrayAverageNumbers([1, 2, 3, 4, 5])).toBe(3);
  });

  test('should return the average of negative numbers', () => {
    expect(arrayAverageNumbers([-1, -2, -3])).toBe(-2);
  });

  test('should return the average of mixed positive and negative numbers', () => {
    expect(arrayAverageNumbers([-1, 2, -3, 4])).toBe(0.5);
  });

  test('should return null for an empty array', () => {
    expect(arrayAverageNumbers([])).toBeNull();
  });

  test('should return the number itself for a single element array', () => {
    expect(arrayAverageNumbers([100])).toBe(100);
  });

  test('should handle floating point numbers', () => {
    expect(arrayAverageNumbers([0.1, 0.2, 0.3])).toBeCloseTo(0.2);
  });

  test('should handle large numbers', () => {
    expect(arrayAverageNumbers([1000000, 2000000, 3000000])).toBe(2000000);
  });
});
