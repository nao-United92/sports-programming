import { cumulativeProduct } from './array-cumulative-product';

describe('cumulativeProduct', () => {
  test('should calculate cumulative product', () => {
    expect(cumulativeProduct([1, 2, 3, 4])).toEqual([1, 2, 6, 24]);
  });

  test('should handle zero', () => {
    expect(cumulativeProduct([2, 0, 3])).toEqual([2, 0, 0]);
  });
});
