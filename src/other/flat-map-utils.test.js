import { flatMap } from './flat-map-utils';

describe('flatMap', () => {
  test('should map and flatten an array', () => {
    const arr = [1, 2, 3];
    const duplicate = (n) => [n, n];
    expect(flatMap(arr, duplicate)).toEqual([1, 1, 2, 2, 3, 3]);
  });

  test('should work with functions that return single values or empty arrays', () => {
    const arr = [1, 2, 3, 4];
    const evensOnly = (n) => (n % 2 === 0 ? [n] : []);
    expect(flatMap(arr, evensOnly)).toEqual([2, 4]);
  });

  test('should pass index and original array to the mapping function', () => {
    const arr = ['a', 'b'];
    const mapFn = jest.fn((val, index, array) => [val, index, array.length]);
    flatMap(arr, mapFn);

    expect(mapFn).toHaveBeenCalledWith('a', 0, arr);
    expect(mapFn).toHaveBeenCalledWith('b', 1, arr);
  });

  test('should return an empty array for a non-array input', () => {
    expect(flatMap(null, (x) => x)).toEqual([]);
    expect(flatMap({}, (x) => x)).toEqual([]);
  });

  test('should return an empty array for an empty array input', () => {
    expect(flatMap([], (x) => x)).toEqual([]);
  });

  test('should maintain the correct context for the mapping function', () => {
    const context = { multiplier: 3 };
    const mapFn = function(n) {
      return [n * this.multiplier];
    };
    const result = flatMap([1, 2, 3], mapFn, context);
    expect(result).toEqual([3, 6, 9]);
  });
});
