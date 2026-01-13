
import { cartesianProductSimple } from './array-cartesian-product-simple-utils.js';

describe('cartesianProductSimple', () => {
  it('should return the Cartesian product of two arrays', () => {
    const arr1 = [1, 2];
    const arr2 = ['a', 'b'];
    expect(cartesianProductSimple(arr1, arr2)).toEqual([
      [1, 'a'],
      [1, 'b'],
      [2, 'a'],
      [2, 'b'],
    ]);
  });

  it('should handle an empty first array', () => {
    const arr1 = [];
    const arr2 = ['a', 'b'];
    expect(cartesianProductSimple(arr1, arr2)).toEqual([]);
  });

  it('should handle an empty second array', () => {
    const arr1 = [1, 2];
    const arr2 = [];
    expect(cartesianProductSimple(arr1, arr2)).toEqual([]);
  });

  it('should handle both arrays being empty', () => {
    const arr1 = [];
    const arr2 = [];
    expect(cartesianProductSimple(arr1, arr2)).toEqual([]);
  });

  it('should handle arrays with different types', () => {
    const arr1 = [1, 'x'];
    const arr2 = [true, null];
    expect(cartesianProductSimple(arr1, arr2)).toEqual([
      [1, true],
      [1, null],
      ['x', true],
      ['x', null],
    ]);
  });
});
