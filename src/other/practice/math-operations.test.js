import { sum, product } from './math-operations';

describe('Math Operations', () => {
  describe('sum', () => {
    it('should return the sum of an array of numbers', () => {
      expect(sum([1, 2, 3, 4, 5])).toBe(15);
    });

    it('should return 0 for an empty array', () => {
      expect(sum([])).toBe(0);
    });
  });

  describe('product', () => {
    it('should return the product of an array of numbers', () => {
      expect(product([1, 2, 3, 4, 5])).toBe(120);
    });

    it('should return 1 for an empty array', () => {
      expect(product([])).toBe(1);
    });
  });
});
