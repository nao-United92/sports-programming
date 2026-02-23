import { median } from './math-median';

describe('median', () => {
  test('calculates the median of an odd-length array', () => {
    expect(median([1, 3, 2])).toBe(2);
  });

  test('calculates the median of an even-length array', () => {
    expect(median([1, 2, 3, 4])).toBe(2.5);
  });

  test('returns 0 for empty array', () => {
    expect(median([])).toBe(0);
  });

  test('handles single-element array', () => {
    expect(median([5])).toBe(5);
  });
});
