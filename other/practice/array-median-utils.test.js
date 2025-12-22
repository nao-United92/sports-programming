import { median } from './array-median-utils';

describe('median', () => {
  it('should return the median of an array with odd length', () => {
    expect(median([1, 2, 3, 4, 5])).toBe(3);
  });

  it('should return the median of an array with even length', () => {
    expect(median([1, 2, 3, 4, 5, 6])).toBe(3.5);
  });

  it('should return 0 for an empty array', () => {
    expect(median([])).toBe(0);
  });

  it('should handle array with single element', () => {
    expect(median([10])).toBe(10);
  });

  it('should handle non-array inputs', () => {
    expect(median(null)).toBe(0);
    expect(median(undefined)).toBe(0);
    expect(median("abc")).toBe(0);
  });
});
