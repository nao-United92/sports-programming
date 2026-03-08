import { sumSquares } from './array-sum-squares';

describe('sumSquares', () => {
  test('should calculate sum of squares', () => {
    expect(sumSquares([1, 2, 3])).toBe(1 + 4 + 9);
  });

  test('should handle negative numbers', () => {
    expect(sumSquares([-1, -2])).toBe(1 + 4);
  });

  test('should return 0 for empty array', () => {
    expect(sumSquares([])).toBe(0);
  });
});
