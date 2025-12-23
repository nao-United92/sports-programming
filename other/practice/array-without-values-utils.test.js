const without = require('./array-without-values-utils');

describe('without', () => {
  test('should exclude specified values from an array of numbers', () => {
    const arr = [1, 2, 3, 1, 4, 2];
    expect(without(arr, 1, 2)).toEqual([3, 4]);
  });

  test('should exclude specified values from an array of strings', () => {
    const arr = ['a', 'b', 'c', 'a', 'd'];
    expect(without(arr, 'a', 'b')).toEqual(['c', 'd']);
  });

  test('should return the original array if no values are excluded', () => {
    const arr = [1, 2, 3];
    expect(without(arr, 4, 5)).toEqual([1, 2, 3]);
  });

  test('should return an empty array for an empty input array', () => {
    expect(without([], 1)).toEqual([]);
  });

  test('should handle arrays with mixed types', () => {
    const arr = [1, 'a', null, undefined, 1, 'b', true];
    expect(without(arr, 1, null)).toEqual(['a', undefined, 'b', true]);
  });

  test('should not mutate the original array', () => {
    const arr = [1, 2, 3];
    without(arr, 1);
    expect(arr).toEqual([1, 2, 3]);
  });

  test('should handle objects (by reference)', () => {
    const obj1 = {
      a: 1
    };
    const obj2 = {
      b: 2
    };
    const arr = [obj1, obj2, obj1];
    expect(without(arr, obj1)).toEqual([obj2]);
    expect(without(arr, {
      a: 1
    })).toEqual([obj1, obj2, obj1]); // Different reference
  });

  test('should return an empty array if input is not an array', () => {
    expect(without(null, 1)).toEqual([]);
    expect(without(undefined, 1)).toEqual([]);
    expect(without("string", 's')).toEqual([]);
    expect(without(123, 1)).toEqual([]);
    expect(without({}, 1)).toEqual([]);
  });
});
