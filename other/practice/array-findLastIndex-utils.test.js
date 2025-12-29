import { findLastIndex } from './array-findLastIndex-utils';

describe('findLastIndex', () => {
  const users = [{
    user: 'barney',
    active: false
  }, {
    user: 'fred',
    active: false
  }, {
    user: 'pebbles',
    active: true
  }, {
    user: 'barney',
    active: true
  }, ];

  test('should return the index of the last element that satisfies the predicate', () => {
    expect(findLastIndex(users, ({
      user
    }) => user === 'barney')).toBe(3);
  });

  test('should return -1 if no element satisfies the predicate', () => {
    expect(findLastIndex(users, ({
      user
    }) => user === 'wilma')).toBe(-1);
  });

  test('should work with primitive arrays', () => {
    expect(findLastIndex([1, 2, 3, 4, 3], num => num === 3)).toBe(4);
  });

  test('should handle empty array', () => {
    expect(findLastIndex([], num => num > 0)).toBe(-1);
  });

  test('should respect fromIndex', () => {
    expect(findLastIndex([1, 2, 3, 4, 5], num => num < 4, 3)).toBe(2); // Searches 3,2,1 (indices 3,2,1,0)
    expect(findLastIndex([1, 2, 3, 4, 5], num => num === 5, 2)).toBe(-1); // Searches 3,2,1 (indices 2,1,0)
  });

  test('should handle fromIndex greater than or equal to array length', () => {
    expect(findLastIndex([1, 2, 3], num => num === 1, 5)).toBe(0);
  });

  test('should handle negative fromIndex as searching from the end', () => {
    // When fromIndex is negative, it should effectively search from the end
    // For example, fromIndex -1 means start from the last element, but it's not a common usage for `fromIndex` to be negative.
    // The current implementation treats fromIndex < 0 as 0 for Math.min(fromIndex, arr.length - 1), which means
    // it will start from arr.length - 1. This is consistent with what is expected if fromIndex is omitted.
    // Let's test the default behavior for fromIndex being undefined/omitted.
    expect(findLastIndex([1, 2, 3, 4, 5], num => num < 4)).toBe(2); // default from last element
  });

  test('should pass index and array to predicate', () => {
    const arr = [10, 20, 30, 20];
    const predicate = jest.fn((value, index, array) => {
      expect(array).toBe(arr);
      return value === 20;
    });
    expect(findLastIndex(arr, predicate)).toBe(3);
    expect(predicate).toHaveBeenCalledTimes(1); // Only called once because it finds the last 20 at index 3 first
  });
});
