import { findLast } from './array-find-last';

describe('findLast', () => {
  const users = [
    { user: 'barney', age: 36, active: true },
    { user: 'fred', age: 40, active: false },
    { user: 'pebbles', age: 1, active: true },
    { user: 'fred', age: 20, active: true },
  ];

  test('should return the last element that satisfies the predicate', () => {
    expect(findLast(users, ({ user }) => user === 'fred')).toEqual({ user: 'fred', age: 20, active: true });
  });

  test('should return undefined if no element satisfies the predicate', () => {
    expect(findLast(users, ({ user }) => user === 'wilma')).toBeUndefined();
  });

  test('should handle predicate using index', () => {
    const arr = [1, 2, 3, 4, 5];
    expect(findLast(arr, (value, index) => index < 2)).toBe(2); // Last element with index < 2 (0-indexed)
  });

  test('should handle predicate using full array', () => {
    const arr = [1, 2, 3];
    expect(findLast(arr, (value, index, collection) => collection.length === 3)).toBe(3);
  });

  test('should return undefined for an empty array', () => {
    expect(findLast([], (value) => value > 0)).toBeUndefined();
  });

  test('should return undefined if predicate is not a function', () => {
    expect(findLast(users, null)).toBeUndefined();
    expect(findLast(users, 'age')).toBeUndefined();
  });

  test('should handle non-array input by returning undefined', () => {
    expect(findLast(null, () => true)).toBeUndefined();
    expect(findLast(undefined, () => true)).toBeUndefined();
    expect(findLast('string', () => true)).toBeUndefined();
  });

  test('should find the last even number', () => {
    const numbers = [1, 2, 3, 4, 5, 6, 7];
    expect(findLast(numbers, (n) => n % 2 === 0)).toBe(6);
  });
});
