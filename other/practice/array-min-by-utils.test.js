import minBy from './array-min-by-utils';

describe('minBy', () => {
  // Test case 1: Basic usage with objects and numeric property
  test('should return the object with the minimum value based on a numeric property', () => {
    const users = [
      { user: 'barney', age: 36 },
      { user: 'fred', age: 40 },
      { user: 'pebbles', age: 1 },
    ];
    expect(minBy(users, o => o.age)).toEqual({ user: 'pebbles', age: 1 });
  });

  // Test case 2: Empty array
  test('should return undefined for an empty array', () => {
    expect(minBy([], o => o.age)).toBeUndefined();
  });

  // Test case 3: Array with single element
  test('should return the single element for an array with one element', () => {
    const data = [{ value: 10 }];
    expect(minBy(data, o => o.value)).toEqual({ value: 10 });
  });

  // Test case 4: Custom iteratee function (computed value)
  test('should return the element that results in the minimum value from a custom iteratee', () => {
    const numbers = [
      { id: 1, val: 5 },
      { id: 2, val: 2 },
      { id: 3, val: 8 },
    ];
    expect(minBy(numbers, o => o.val * 2)).toEqual({ id: 2, val: 2 });
  });

  // Test case 5: Array of numbers
  test('should find the minimum number in an array of numbers', () => {
    const nums = [3, 1, 4, 1, 5, 9, 2];
    expect(minBy(nums, n => n)).toBe(1); // Should return the first occurrence of the minimum value
  });

  // Test case 6: Array of strings (lexicographical comparison)
  test('should find the minimum string in an array of strings', () => {
    const words = ['apple', 'banana', 'apricot', 'berry'];
    expect(minBy(words, w => w)).toBe('apple');
  });

  // Test case 7: Iteratee returns non-numeric values (comparison should still work if comparable)
  test('should work with iteratee returning non-numeric but comparable values (e.g., strings)', () => {
    const people = [
      { name: 'Alice', score: 'B' },
      { name: 'Bob', score: 'A' },
      { name: 'Charlie', score: 'C' },
    ];
    // 'A' < 'B' < 'C' lexicographically
    expect(minBy(people, p => p.score)).toEqual({ name: 'Bob', score: 'A' });
  });

  // Test case 8: Invalid input - non-array
  test('should throw TypeError if the first argument is not an array', () => {
    expect(() => minBy(null, o => o)).toThrow(TypeError);
    expect(() => minBy(undefined, o => o)).toThrow(TypeError);
    expect(() => minBy(123, o => o)).toThrow(TypeError);
    expect(() => minBy('string', o => o)).toThrow(TypeError);
    expect(() => minBy({}, o => o)).toThrow(TypeError);
  });

  // Test case 9: Invalid input - non-function iteratee
  test('should throw TypeError if the iteratee argument is not a function', () => {
    const arr = [{ a: 1 }];
    expect(() => minBy(arr, 'not-a-function')).toThrow(TypeError);
    expect(() => minBy(arr, null)).toThrow(TypeError);
    expect(() => minBy(arr, undefined)).toThrow(TypeError);
  });
});
