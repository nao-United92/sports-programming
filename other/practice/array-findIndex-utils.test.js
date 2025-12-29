import { findIndex } from './array-findIndex-utils';

describe('findIndex', () => {
  const users = [{
    user: 'barney',
    active: false
  }, {
    user: 'fred',
    active: false
  }, {
    user: 'pebbles',
    active: true
  }, ];

  test('should return the index of the first element that satisfies the predicate', () => {
    expect(findIndex(users, ({
      user
    }) => user === 'fred')).toBe(1);
  });

  test('should return -1 if no element satisfies the predicate', () => {
    expect(findIndex(users, ({
      user
    }) => user === 'wilma')).toBe(-1);
  });

  test('should work with primitive arrays', () => {
    expect(findIndex([1, 2, 3, 4, 5], num => num > 3)).toBe(3);
  });

  test('should handle empty array', () => {
    expect(findIndex([], num => num > 0)).toBe(-1);
  });

  test('should respect fromIndex', () => {
    expect(findIndex([1, 2, 3, 4, 5], num => num > 3, 2)).toBe(3);
    expect(findIndex([1, 2, 3, 4, 5], num => num > 5, 0)).toBe(-1);
    expect(findIndex([1, 2, 3, 4, 5], num => num === 1, 1)).toBe(-1);
  });

  test('should handle negative fromIndex by treating it as 0', () => {
    expect(findIndex([1, 2, 3, 4, 5], num => num === 1, -2)).toBe(0);
  });

  test('should pass index and array to predicate', () => {
    const arr = [10, 20, 30];
    const predicate = jest.fn((value, index, array) => {
      expect(array).toBe(arr);
      return value === 20 && index === 1;
    });
    expect(findIndex(arr, predicate)).toBe(1);
    expect(predicate).toHaveBeenCalledTimes(2);
  });
});
