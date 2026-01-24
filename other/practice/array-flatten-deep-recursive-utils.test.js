import flattenDeepRecursive from './array-flatten-deep-recursive-utils';

describe('flattenDeepRecursive', () => {
  // Test case 1: Basic nested array
  test('should flatten a basic nested array recursively', () => {
    const arr = [1, [2, [3, 4], 5], 6];
    expect(flattenDeepRecursive(arr)).toEqual([1, 2, 3, 4, 5, 6]);
  });

  // Test case 2: Empty array
  test('should return an empty array for an empty input array', () => {
    const arr = [];
    expect(flattenDeepRecursive(arr)).toEqual([]);
  });

  // Test case 3: Already flat array
  test('should return the same array if it is already flat', () => {
    const arr = [1, 2, 3, 4, 5];
    expect(flattenDeepRecursive(arr)).toEqual([1, 2, 3, 4, 5]);
  });

  // Test case 4: Deeply nested array
  test('should flatten a deeply nested array recursively', () => {
    const arr = [1, [2, [3, [4, [5]]]], 6];
    expect(flattenDeepRecursive(arr)).toEqual([1, 2, 3, 4, 5, 6]);
  });

  // Test case 5: Array with empty nested arrays
  test('should handle nested empty arrays correctly', () => {
    const arr = [1, [], [2, [], [3]], 4];
    expect(flattenDeepRecursive(arr)).toEqual([1, 2, 3, 4]);
  });

  // Test case 6: Array with mixed types including null and undefined
  test('should flatten an array with mixed types including null and undefined', () => {
    const arr = [1, [null, [2, undefined]], 3, 'hello', [true, false]];
    expect(flattenDeepRecursive(arr)).toEqual([1, null, 2, undefined, 3, 'hello', true, false]);
  });

  // Test case 7: Array with objects
  test('should flatten an array containing objects', () => {
    const obj1 = { a: 1 };
    const obj2 = { b: 2 };
    const arr = [1, [obj1, [2, obj2]], 3];
    expect(flattenDeepRecursive(arr)).toEqual([1, obj1, 2, obj2, 3]);
  });

  // Test case 8: Invalid input - non-array
  test('should throw TypeError if the input is not an array', () => {
    expect(() => flattenDeepRecursive(null)).toThrow(TypeError);
    expect(() => flattenDeepRecursive(undefined)).toThrow(TypeError);
    expect(() => flattenDeepRecursive(123)).toThrow(TypeError);
    expect(() => flattenDeepRecursive('string')).toThrow(TypeError);
    expect(() => flattenDeepRecursive({})).toThrow(TypeError);
  });
});
