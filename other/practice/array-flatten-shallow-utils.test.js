import flattenShallow from './array-flatten-shallow-utils';

describe('flattenShallow', () => {
  // Test case 1: Basic nested array
  test('should flatten a single level deep for a basic nested array', () => {
    const arr = [1, [2, 3], 4];
    expect(flattenShallow(arr)).toEqual([1, 2, 3, 4]);
  });

  // Test case 2: Empty array
  test('should return an empty array for an empty input array', () => {
    const arr = [];
    expect(flattenShallow(arr)).toEqual([]);
  });

  // Test case 3: Already flat array
  test('should return the same array if it is already flat', () => {
    const arr = [1, 2, 3, 4, 5];
    expect(flattenShallow(arr)).toEqual([1, 2, 3, 4, 5]);
  });

  // Test case 4: Deeply nested array (should only flatten one level)
  test('should only flatten one level for a deeply nested array', () => {
    const arr = [1, [2, [3, 4]], 5];
    expect(flattenShallow(arr)).toEqual([1, 2, [3, 4], 5]);
  });

  // Test case 5: Array with empty nested arrays
  test('should handle empty nested arrays correctly', () => {
    const arr = [1, [], [2, 3], [], 4];
    expect(flattenShallow(arr)).toEqual([1, 2, 3, 4]);
  });

  // Test case 6: Array with mixed types including null and undefined
  test('should flatten an array with mixed types including null and undefined', () => {
    const arr = [1, [null, 2], undefined, [3], 'hello'];
    expect(flattenShallow(arr)).toEqual([1, null, 2, undefined, 3, 'hello']);
  });

  // Test case 7: Array with objects
  test('should flatten an array containing objects', () => {
    const obj1 = { a: 1 };
    const obj2 = { b: 2 };
    const arr = [1, [obj1, 2], obj2];
    expect(flattenShallow(arr)).toEqual([1, obj1, 2, obj2]);
  });

  // Test case 8: Invalid input - non-array
  test('should throw TypeError if the input is not an array', () => {
    expect(() => flattenShallow(null)).toThrow(TypeError);
    expect(() => flattenShallow(undefined)).toThrow(TypeError);
    expect(() => flattenShallow(123)).toThrow(TypeError);
    expect(() => flattenShallow('string')).toThrow(TypeError);
    expect(() => flattenShallow({})).toThrow(TypeError);
  });
});