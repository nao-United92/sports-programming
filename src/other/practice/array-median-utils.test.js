import { median } from './array-median-utils.js';

describe('median', () => {
  test('should return the correct median for an odd length array', () => {
    expect(median([1, 2, 3, 4, 5])).toBe(3);
  });

  test('should return the correct median for an even length array', () => {
    expect(median([1, 2, 3, 4, 5, 6])).toBe(3.5);
  });

  test('should work with unsorted arrays', () => {
    expect(median([5, 2, 1, 4, 3])).toBe(3);
  });

  test('should work with negative numbers', () => {
    expect(median([-1, -2, 3, 4, 5])).toBe(3);
  });
});
