import { mean } from './array-mean-utils';

describe('mean', () => {
  it('should return the mean of an array of numbers', () => {
    expect(mean([1, 2, 3, 4, 5])).toBe(3);
  });

  it('should return 0 for an empty array', () => {
    expect(mean([])).toBe(0);
  });

  it('should handle negative numbers', () => {
    expect(mean([-1, -2, -3])).toBe(-2);
  });

  it('should handle array with single element', () => {
    expect(mean([10])).toBe(10);
  });

  it('should handle non-array input', () => {
    expect(mean(null)).toBe(0);
    expect(mean(undefined)).toBe(0);
    expect(mean("abc")).toBe(0); // Assuming non-array input results in 0, adjust if different behavior is desired.
  });
});
