const findLast = require('./array-find-last-utils');

describe('findLast', () => {
  const users = [{
    id: 1,
    name: 'john',
    active: false
  }, {
    id: 2,
    name: 'jane',
    active: true
  }, {
    id: 3,
    name: 'doe',
    active: false
  }, {
    id: 4,
    name: 'alice',
    active: true
  }, ];

  test('should return the last element that satisfies the predicate', () => {
    const result = findLast(users, user => user.active);
    expect(result).toEqual({
      id: 4,
      name: 'alice',
      active: true
    });
  });

  test('should return undefined if no element satisfies the predicate', () => {
    const result = findLast(users, user => user.id === 5);
    expect(result).toBeUndefined();
  });

  test('should return undefined for an empty array', () => {
    const result = findLast([], user => user.active);
    expect(result).toBeUndefined();
  });

  test('should handle arrays of primitive values', () => {
    const arr = [1, 2, 3, 4, 5, 2];
    expect(findLast(arr, num => num % 2 === 0)).toBe(2);
    expect(findLast(arr, num => num > 5)).toBeUndefined();
  });

  test('should pass index and array to the predicate', () => {
    const arr = [10, 20, 30];
    const predicate = jest.fn((value, index, array) => {
      expect(array).toEqual(arr);
      return index === 1;
    });
    expect(findLast(arr, predicate)).toBe(20);
    expect(predicate).toHaveBeenCalledTimes(2); // Should call for 30 (index 2) then 20 (index 1)
  });

  test('should return undefined if input is not an array', () => {
    expect(findLast(null, () => true)).toBeUndefined();
    expect(findLast(undefined, () => true)).toBeUndefined();
    expect(findLast({}, () => true)).toBeUndefined();
  });

  test('should return undefined if predicate is not a function', () => {
    expect(findLast(users, null)).toBeUndefined();
    expect(findLast(users, undefined)).toBeUndefined();
    expect(findLast(users, 'active')).toBeUndefined();
  });
});