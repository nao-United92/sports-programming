import arraySum from './array-sum';

describe('arraySum', () => {
  test('should return the sum of positive numbers', () => {
    expect(arraySum([1, 2, 3, 4, 5])).toBe(15);
  });

  test('should return the sum of negative numbers', () => {
    expect(arraySum([-1, -2, -3])).toBe(-6);
  });

  test('should return the sum of mixed positive and negative numbers', () => {
    expect(arraySum([-1, 2, -3, 4])).toBe(2);
  });

  test('should return 0 for an empty array', () => {
    expect(arraySum([])).toBe(0);
  });

  test('should return the number itself for a single element array', () => {
    expect(arraySum([100])).toBe(100);
  });

  test('should handle floating point numbers', () => {
    expect(arraySum([0.1, 0.2, 0.3])).toBeCloseTo(0.6);
  });

  test('should handle large numbers', () => {
    expect(arraySum([1000000, 2000000, 3000000])).toBe(6000000);
  });
});