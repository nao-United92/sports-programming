import flattenDeepIterative from './array-flatten-deep-iterative-utils';

describe('flattenDeepIterative', () => {
  // Test case 1: Basic nested array
  test('should flatten a basic nested array', () => {
    const arr = [1, [2, [3, 4], 5], 6];
    expect(flattenDeepIterative(arr)).toEqual([1, 2, 3, 4, 5, 6]);
  });

  // Test case 2: Empty array
  test('should return an empty array for an empty input array', () => {
    const arr = [];
    expect(flattenDeepIterative(arr)).toEqual([]);
  });

  // Test case 3: Already flat array
  test('should return the same array if it is already flat', () => {
    const arr = [1, 2, 3, 4, 5];
    expect(flattenDeepIterative(arr)).toEqual([1, 2, 3, 4, 5]);
  });

  // Test case 4: Array with empty nested arrays
  test('should handle nested empty arrays correctly', () => {
    const arr = [1, [], [2, [], [3]], 4];
    expect(flattenDeepIterative(arr)).toEqual([1, 2, 3, 4]);
  });

  // Test case 5: Deeply nested array
  test('should flatten a deeply nested array', () => {
    const arr = [1, [2, [3, [4, [5]]]], 6];
    expect(flattenDeepIterative(arr)).toEqual([1, 2, 3, 4, 5, 6]);
  });

  // Test case 6: Array with mixed types
  test('should flatten an array with mixed types including null and undefined', () => {
    const arr = [1, [null, [2, undefined]], 3, 'hello', [true, false]];
    expect(flattenDeepIterative(arr)).toEqual([1, null, 2, undefined, 3, 'hello', true, false]);
  });

  // Test case 7: Array with objects
  test('should flatten an array containing objects', () => {
    const obj1 = { a: 1 };
    const obj2 = { b: 2 };
    const arr = [1, [obj1, [2, obj2]], 3];
    expect(flattenDeepIterative(arr)).toEqual([1, obj1, 2, obj2, 3]);
  });

  // Test case 8: Invalid input - non-array
  test('should throw TypeError if the input is not an array', () => {
    expect(() => flattenDeepIterative(null)).toThrow(TypeError);
    expect(() => flattenDeepIterative(undefined)).toThrow(TypeError);
    expect(() => flattenDeepIterative(123)).toThrow(TypeError);
    expect(() => flattenDeepIterative('string')).toThrow(TypeError);
    expect(() => flattenDeepIterative({})).toThrow(TypeError);
  });
});
