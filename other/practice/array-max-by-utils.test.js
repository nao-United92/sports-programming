import maxBy from './array-max-by-utils';

describe('maxBy', () => {
  // Test case 1: Basic usage with objects and numeric property
  test('should return the object with the maximum value based on a numeric property', () => {
    const users = [
      { user: 'barney', age: 36 },
      { user: 'fred', age: 40 },
      { user: 'pebbles', age: 1 },
    ];
    expect(maxBy(users, o => o.age)).toEqual({ user: 'fred', age: 40 });
  });

  // Test case 2: Empty array
  test('should return undefined for an empty array', () => {
    expect(maxBy([], o => o.age)).toBeUndefined();
  });

  // Test case 3: Array with single element
  test('should return the single element for an array with one element', () => {
    const data = [{ value: 10 }];
    expect(maxBy(data, o => o.value)).toEqual({ value: 10 });
  });

  // Test case 4: Custom iteratee function (computed value)
  test('should return the element that results in the maximum value from a custom iteratee', () => {
    const numbers = [
      { id: 1, val: 5 },
      { id: 2, val: 2 },
      { id: 3, val: 8 },
    ];
    expect(maxBy(numbers, o => o.val * 2)).toEqual({ id: 3, val: 8 });
  });

  // Test case 5: Array of numbers
  test('should find the maximum number in an array of numbers', () => {
    const nums = [3, 1, 4, 1, 5, 9, 2];
    expect(maxBy(nums, n => n)).toBe(9); // Should return the first occurrence of the maximum value
  });

  // Test case 6: Array of strings (lexicographical comparison)
  test('should find the maximum string in an array of strings', () => {
    const words = ['apple', 'banana', 'apricot', 'berry'];
    expect(maxBy(words, w => w)).toBe('berry');
  });

  // Test case 7: Iteratee returns non-numeric values (comparison should still work if comparable)
  test('should work with iteratee returning non-numeric but comparable values (e.g., strings)', () => {
    const people = [
      { name: 'Alice', score: 'B' },
      { name: 'Bob', score: 'A' },
      { name: 'Charlie', score: 'C' },
    ];
    // 'A' < 'B' < 'C' lexicographically
    expect(maxBy(people, p => p.score)).toEqual({ name: 'Charlie', score: 'C' });
  });

  // Test case 8: Invalid input - non-array
  test('should throw TypeError if the first argument is not an array', () => {
    expect(() => maxBy(null, o => o)).toThrow(TypeError);
    expect(() => maxBy(undefined, o => o)).toThrow(TypeError);
    expect(() => maxBy(123, o => o)).toThrow(TypeError);
    expect(() => maxBy('string', o => o)).toThrow(TypeError);
    expect(() => maxBy({}, o => o)).toThrow(TypeError);
  });

  // Test case 9: Invalid input - non-function iteratee
  test('should throw TypeError if the iteratee argument is not a function', () => {
    const arr = [{ a: 1 }];
    expect(() => maxBy(arr, 'not-a-function')).toThrow(TypeError);
    expect(() => maxBy(arr, null)).toThrow(TypeError);
    expect(() => maxBy(arr, undefined)).toThrow(TypeError);
  });
});
