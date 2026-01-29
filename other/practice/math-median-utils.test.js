import median from './math-median-utils';

describe('median', () => {
  it('should return the median of an odd-length array', () => {
    expect(median([1, 2, 3, 4, 5])).toBe(3);
  });

  it('should return the median of an even-length array', () => {
    expect(median([1, 2, 3, 4])).toBe(2.5);
  });

  it('should handle an array with a single element', () => {
    expect(median([7])).toBe(7);
  });

  it('should return 0 for an empty array', () => {
    expect(median([])).toBe(0);
  });

  it('should handle negative numbers', () => {
    expect(median([-5, -2, -1, -4, -3])).toBe(-3);
  });

  it('should handle floating point numbers', () => {
    expect(median([1.1, 2.2, 3.3])).toBe(2.2);
    expect(median([1.0, 2.0, 3.0, 4.0])).toBe(2.5);
  });

  it('should handle unsorted arrays', () => {
    expect(median([5, 1, 4, 2, 3])).toBe(3);
    expect(median([4, 2, 1, 3])).toBe(2.5);
  });

  it('should return 0 for non-array inputs', () => {
    expect(median(null)).toBe(0);
    expect(median(undefined)).toBe(0);
    expect(median('abc')).toBe(0);
    expect(median({})).toBe(0);
  });
});
