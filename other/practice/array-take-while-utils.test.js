const { takeWhile } = require('./array-take-while-utils');

describe('takeWhile', () => {
  const users = [
    { user: 'barney', active: true },
    { user: 'fred', active: true },
    { user: 'pebbles', active: false },
  ];

  test('should take elements from the beginning while the predicate is true', () => {
    const result = takeWhile(users, ({ active }) => active);
    expect(result).toEqual([
      { user: 'barney', active: true },
      { user: 'fred', active: true },
    ]);
  });

  test('should return an empty array if the first element does not satisfy the predicate', () => {
    const result = takeWhile(users, ({ active }) => !active);
    expect(result).toEqual([]);
  });

  test('should return the whole array if all elements satisfy the predicate', () => {
    const allActive = [
      { user: 'barney', active: true },
      { user: 'fred', active: true },
    ];
    expect(takeWhile(allActive, ({ active }) => active)).toEqual(allActive);
  });

  test('should handle an empty array', () => {
    expect(takeWhile([], ({ active }) => active)).toEqual([]);
  });

  test('should not mutate the original array', () => {
    const originalArr = [...users];
    takeWhile(originalArr, ({ active }) => active);
    expect(originalArr).toEqual(users);
  });
  
  test('should return an empty array for non-array inputs', () => {
    expect(takeWhile(null, () => true)).toEqual([]);
    expect(takeWhile(undefined, () => true)).toEqual([]);
    expect(takeWhile({}, () => true)).toEqual([]);
  });

  test('should pass index and array to the predicate function', () => {
    const array = [1, 2, 3, 2, 1];
    const predicate = jest.fn((value, index, arr) => {
      expect(arr).toBe(array);
      return value < 3;
    });
    takeWhile(array, predicate);
    expect(predicate).toHaveBeenCalledWith(1, 0, array);
    expect(predicate).toHaveBeenCalledWith(2, 1, array);
    expect(predicate).toHaveBeenCalledWith(3, 2, array);
    expect(predicate).toHaveBeenCalledTimes(3);
  });
});