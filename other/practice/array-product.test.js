import { product } from './array-product';

describe('product', () => {
  test('should return the product of numbers', () => {
    expect(product([1, 2, 3, 4])).toBe(24);
  });

  test('should return 0 for empty array', () => {
    expect(product([])).toBe(0);
  });

  test('should handle zero in the array', () => {
    expect(product([1, 2, 0, 4])).toBe(0);
  });

  test('should handle negative numbers', () => {
    expect(product([-1, 2, -3])).toBe(6);
  });
});
