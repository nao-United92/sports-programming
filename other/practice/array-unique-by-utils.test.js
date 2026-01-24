import uniqueBy from './array-unique-by-utils';

describe('uniqueBy', () => {
  // Test case 1: Basic unique by identity
  test('should return unique elements based on identity when no iteratee is provided', () => {
    const arr = [1, 2, 2, 3, 1, 4];
    expect(uniqueBy(arr)).toEqual([1, 2, 3, 4]);
  });

  // Test case 2: Unique by object property
  test('should return unique objects based on a specified property', () => {
    const users = [
      { id: 1, name: 'Alice' },
      { id: 2, name: 'Bob' },
      { id: 1, name: 'Alicia' },
      { id: 3, name: 'Charlie' },
      { id: 2, name: 'Bobby' },
    ];
    const result = uniqueBy(users, user => user.id);
    expect(result).toEqual([
      { id: 1, name: 'Alice' },
      { id: 2, name: 'Bob' },
      { id: 3, name: 'Charlie' },
    ]);
  });

  // Test case 3: Unique by a computed value
  test('should return unique elements based on a computed value', () => {
    const numbers = [1.1, 1.9, 2.2, 2.8, 3.0];
    const result = uniqueBy(numbers, num => Math.floor(num));
    expect(result).toEqual([1.1, 2.2, 3.0]);
  });

  // Test case 4: Empty array
  test('should return an empty array for an empty input array', () => {
    const arr = [];
    expect(uniqueBy(arr)).toEqual([]);
  });

  // Test case 5: Array with all unique elements
  test('should return the same array if all elements are unique', () => {
    const arr = [1, 2, 3, 4, 5];
    expect(uniqueBy(arr)).toEqual([1, 2, 3, 4, 5]);
  });

  // Test case 6: Iteratee returning null/undefined
  test('should handle iteratee returning null or undefined correctly', () => {
    const items = [
      { category: 'A', value: 1 },
      { category: 'B', value: 2 },
      { category: null, value: 3 },
      { category: 'A', value: 4 },
      { category: undefined, value: 5 },
      { category: null, value: 6 }, // This should be skipped as null already seen
    ];
    const result = uniqueBy(items, item => item.category);
    expect(result).toEqual([
      { category: 'A', value: 1 },
      { category: 'B', value: 2 },
      { category: null, value: 3 },
      { category: undefined, value: 5 },
    ]);
  });

  // Test case 7: Invalid input - non-array
  test('should throw TypeError if the first argument is not an array', () => {
    expect(() => uniqueBy(null)).toThrow(TypeError);
    expect(() => uniqueBy(undefined)).toThrow(TypeError);
    expect(() => uniqueBy(123)).toThrow(TypeError);
    expect(() => uniqueBy('string')).toThrow(TypeError);
    expect(() => uniqueBy({})).toThrow(TypeError);
  });

  // Test case 8: Invalid input - non-function iteratee
  test('should throw TypeError if the iteratee argument is provided but not a function', () => {
    const arr = [1, 2, 3];
    expect(() => uniqueBy(arr, 'not-a-function')).toThrow(TypeError);
    expect(() => uniqueBy(arr, 123)).toThrow(TypeError);
  });
});
