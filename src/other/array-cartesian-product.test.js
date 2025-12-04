import { cartesianProduct } from './array-cartesian-product';

describe('cartesianProduct', () => {
  test('should compute the cartesian product of two arrays', () => {
    const result = cartesianProduct([1, 2], ['a', 'b']);
    expect(result).toEqual([
      [1, 'a'],
      [1, 'b'],
      [2, 'a'],
      [2, 'b'],
    ]);
  });

  test('should return an empty array if the first array is empty', () => {
    expect(cartesianProduct([], ['a', 'b'])).toEqual([]);
  });

  test('should return an empty array if the second array is empty', () => {
    expect(cartesianProduct([1, 2], [])).toEqual([]);
  });

  test('should return an empty array if both arrays are empty', () => {
    expect(cartesianProduct([], [])).toEqual([]);
  });

  test('should handle arrays with different types', () => {
    const result = cartesianProduct([1, 'hello'], [true, null]);
    expect(result).toEqual([
      [1, true],
      [1, null],
      ['hello', true],
      ['hello', null],
    ]);
  });
});
