import { sampleStandardDeviation } from './array-standard-deviation-utils';

describe('sampleStandardDeviation', () => {
  test('should calculate the standard deviation for a simple array of positive integers', () => {
    // For [1, 2, 3, 4, 5], mean is 3.
    // Variance is ((1-3)^2 + (2-3)^2 + (3-3)^2 + (4-3)^2 + (5-3)^2) / (5-1) = (4+1+0+1+4)/4 = 2.5
    // StdDev is sqrt(2.5)
    expect(sampleStandardDeviation([1, 2, 3, 4, 5])).toBeCloseTo(1.5811, 4);
  });

  test('should return 0 for an array with all identical elements', () => {
    expect(sampleStandardDeviation([5, 5, 5, 5])).toBe(0);
  });

  test('should work correctly with negative numbers', () => {
    // For [-1, -2, -3, -4, -5], mean is -3.
    // Variance is ((-1 - -3)^2 + (-2 - -3)^2 + (-3 - -3)^2 + (-4 - -3)^2 + (-5 - -3)^2) / (5-1) = (4+1+0+1+4)/4 = 2.5
    // StdDev is sqrt(2.5)
    expect(sampleStandardDeviation([-1, -2, -3, -4, -5])).toBeCloseTo(1.5811, 4);
  });

  test('should return 0 for an array with a single element', () => {
    expect(sampleStandardDeviation([10])).toBe(0);
  });

  test('should return 0 for an empty array', () => {
    expect(sampleStandardDeviation([])).toBe(0);
  });

  test('should return null for null or undefined input', () => {
    expect(sampleStandardDeviation(null)).toBeNull();
    expect(sampleStandardDeviation(undefined)).toBeNull();
  });

  test('should handle an array with zero and other numbers', () => {
    // For [0, 2, 7, 10], mean is 4.75
    // Variance is ((0-4.75)^2 + (2-4.75)^2 + (7-4.75)^2 + (10-4.75)^2) / 3 = (22.5625 + 7.5625 + 5.0625 + 27.5625) / 3 = 62.75 / 3 = 20.9166...
    // StdDev is sqrt(20.9166...)
    expect(sampleStandardDeviation([0, 2, 7, 10])).toBeCloseTo(4.5735, 4);
  });
});
