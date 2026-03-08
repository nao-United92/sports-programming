import { productByProperty } from './array-product-by-property';

describe('productByProperty', () => {
  test('should multiply property values', () => {
    const arr = [{ val: 2 }, { val: 3 }, { val: 4 }];
    expect(productByProperty(arr, 'val')).toBe(24);
  });

  test('should return 0 for empty array', () => {
    expect(productByProperty([], 'val')).toBe(0);
  });
});
