import { rangeOverlap } from './array-range-overlap';

describe('rangeOverlap', () => {
  test('should return true for overlapping ranges', () => {
    expect(rangeOverlap([1, 5], [3, 8])).toBe(true);
    expect(rangeOverlap([1, 10], [5, 6])).toBe(true);
  });

  test('should return true for touching ranges', () => {
    expect(rangeOverlap([1, 5], [5, 10])).toBe(true);
  });

  test('should return false for non-overlapping ranges', () => {
    expect(rangeOverlap([1, 5], [6, 10])).toBe(false);
  });
});
