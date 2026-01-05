import cartesianProduct from './array-cartesian-product-utils';

describe('cartesianProduct', () => {
  test('should return the Cartesian product of two arrays', () => {
    const arr1 = [1, 2];
    const arr2 = ['a', 'b'];
    const expected = [[1, 'a'], [1, 'b'], [2, 'a'], [2, 'b']];
    expect(cartesianProduct(arr1, arr2)).toEqual(expected);
  });

  test('should return the Cartesian product of three arrays', () => {
    const arr1 = [1, 2];
    const arr2 = ['a', 'b'];
    const arr3 = ['x', 'y'];
    const expected = [
      [1, 'a', 'x'], [1, 'a', 'y'], [1, 'b', 'x'], [1, 'b', 'y'],
      [2, 'a', 'x'], [2, 'a', 'y'], [2, 'b', 'x'], [2, 'b', 'y'],
    ];
    expect(cartesianProduct(arr1, arr2, arr3)).toEqual(expected);
  });

  test('should handle empty input arrays', () => {
    expect(cartesianProduct([1, 2], [])).toEqual([]);
    expect(cartesianProduct([], [1, 2])).toEqual([]);
    expect(cartesianProduct([], [], [])).toEqual([]);
  });

  test('should handle a single array', () => {
    const arr = [1, 2];
    expect(cartesianProduct(arr)).toEqual([[1], [2]]);
  });

  test('should return [[]] when no arguments are provided', () => {
    // The Cartesian product of an empty set of sets is defined as a set containing the empty tuple, i.e., [[]].
    expect(cartesianProduct()).toEqual([[]]);
  });

  test('should throw an error if any argument is not an array', () => {
    expect(() => cartesianProduct([1], 'not an array')).toThrow(TypeError);
    expect(() => cartesianProduct(null, [1])).toThrow(TypeError);
    expect(() => cartesianProduct([1], undefined)).toThrow(TypeError);
  });
});
