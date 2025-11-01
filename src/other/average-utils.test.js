
import { average, median } from './average-utils.js';

describe('average', () => {
  test('should calculate the average of an array of numbers', () => {
    expect(average([1, 2, 3, 4, 5])).toBe(3);
    expect(average([10, 20, 30])).toBe(20);
  });

  test('should return 0 for an empty array', () => {
    expect(average([])).toBe(0);
  });

  test('should handle negative numbers', () => {
    expect(average([-1, -2, -3, -4, -5])).toBe(-3);
  });

  test('should handle floating-point numbers', () => {
    expect(average([1.5, 2.5, 3.5])).toBe(2.5);
  });
});

describe('median', () => {
  test('should calculate the median of an array with an odd number of elements', () => {
    expect(median([1, 3, 3, 6, 7, 8, 9])).toBe(6);
  });

  test('should calculate the median of an array with an even number of elements', () => {
    expect(median([1, 2, 3, 4, 5, 6, 8, 9])).toBe(4.5);
  });

  test('should return 0 for an empty array', () => {
    expect(median([])).toBe(0);
  });

  test('should handle unsorted arrays', () => {
    expect(median([7, 1, 9, 3, 6, 8, 3])).toBe(6);
  });

  test('should handle negative numbers', () => {
    expect(median([-1, -5, -2, -8, -3])).toBe(-3);
  });
});
