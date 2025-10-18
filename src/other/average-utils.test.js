
import { average } from './average-utils.js';

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
