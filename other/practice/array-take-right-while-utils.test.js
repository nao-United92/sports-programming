const { takeRightWhile } = require('./array-take-right-while-utils');

describe('takeRightWhile', () => {
  const users = [
    { user: 'barney', active: false },
    { user: 'fred', active: true },
    { user: 'pebbles', active: true },
  ];

  test('should take elements from the right while the predicate is true', () => {
    const result = takeRightWhile(users, ({ active }) => active);
    expect(result).toEqual([
      { user: 'fred', active: true },
      { user: 'pebbles', active: true },
    ]);
  });

  test('should return an empty array if the last element does not satisfy the predicate', () => {
    const usersWithInactiveLast = [
      { user: 'fred', active: true },
      { user: 'barney', active: false },
    ];
    const result = takeRightWhile(usersWithInactiveLast, ({ active }) => active);
    expect(result).toEqual([]);
  });

  test('should return all elements if all satisfy the predicate', () => {
    const allActive = [
      { user: 'fred', active: true },
      { user: 'pebbles', active: true },
    ];
    const result = takeRightWhile(allActive, ({ active }) => active);
    expect(result).toEqual(allActive);
  });

  test('should return an empty array if no elements satisfy the predicate from the right', () => {
    const firstActive = [
      { user: 'barney', active: true },
      { user: 'fred', active: false },
      { user: 'pebbles', active: false },
    ];
    const result = takeRightWhile(firstActive, ({ active }) => active);
    expect(result).toEqual([]);
  });

  test('should handle an empty array', () => {
    expect(takeRightWhile([], ({ active }) => active)).toEqual([]);
  });

  test('should return an empty array for non-array inputs', () => {
    expect(takeRightWhile(null, () => true)).toEqual([]);
    expect(takeRightWhile(undefined, () => true)).toEqual([]);
    expect(takeRightWhile({}, () => true)).toEqual([]);
  });

  test('should pass index and array to the predicate function', () => {
    const array = [1, 2, 3, 4];
    const predicate = jest.fn((value, index, arr) => {
      expect(arr).toBe(array);
      return value > 2;
    });
    takeRightWhile(array, predicate);
    expect(predicate).toHaveBeenCalledWith(4, 3, array);
    expect(predicate).toHaveBeenCalledWith(3, 2, array);
    expect(predicate).toHaveBeenCalledWith(2, 1, array);
    expect(predicate).toHaveBeenCalledTimes(3);
  });
});