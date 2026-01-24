import findLast from './array-find-last-utils';

describe('findLast', () => {
  const users = [
    { user: 'barney', active: false },
    { user: 'fred', active: true },
    { user: 'pebbles', active: false },
    { user: 'dino', active: true },
  ];

  // Test case 1: Find an active user
  test('should find the last element that satisfies the predicate', () => {
    const result = findLast(users, o => o.active);
    expect(result).toEqual({ user: 'dino', active: true });
  });

  // Test case 2: No element satisfies the predicate
  test('should return undefined if no element satisfies the predicate', () => {
    const result = findLast(users, o => o.age > 50);
    expect(result).toBeUndefined();
  });

  // Test case 3: Empty array
  test('should return undefined for an empty array', () => {
    const result = findLast([], o => o.active);
    expect(result).toBeUndefined();
  });

  // Test case 4: Predicate using index
  test('should find the last element based on index', () => {
    const numbers = [10, 20, 30, 40, 50];
    const result = findLast(numbers, (num, index) => index < 2);
    expect(result).toBe(20); // Last element where index < 2 is 20 (index 1)
  });

  // Test case 5: Predicate always returns true
  test('should return the last element if predicate always returns true', () => {
    const numbers = [1, 2, 3];
    const result = findLast(numbers, () => true);
    expect(result).toBe(3);
  });

  // Test case 6: Predicate always returns false
  test('should return undefined if predicate always returns false', () => {
    const numbers = [1, 2, 3];
    const result = findLast(numbers, () => false);
    expect(result).toBeUndefined();
  });

  // Test case 7: Invalid input - non-array
  test('should throw TypeError if the first argument is not an array', () => {
    expect(() => findLast(null, o => o)).toThrow(TypeError);
    expect(() => findLast(undefined, o => o)).toThrow(TypeError);
    expect(() => findLast(123, o => o)).toThrow(TypeError);
    expect(() => findLast('string', o => o)).toThrow(TypeError);
    expect(() => findLast({}, o => o)).toThrow(TypeError);
  });

  // Test case 8: Invalid input - non-function predicate
  test('should throw TypeError if the predicate argument is not a function', () => {
    const arr = [1, 2, 3];
    expect(() => findLast(arr, 'not-a-function')).toThrow(TypeError);
    expect(() => findLast(arr, null)).toThrow(TypeError);
    expect(() => findLast(arr, undefined)).toThrow(TypeError);
  });
});
