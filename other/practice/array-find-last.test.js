import arrayFindLast from './array-find-last';

describe('arrayFindLast', () => {
  const users = [{
    id: 1,
    name: 'Alice',
    active: false
  }, {
    id: 2,
    name: 'Bob',
    active: true
  }, {
    id: 3,
    name: 'Charlie',
    active: false
  }, {
    id: 4,
    name: 'David',
    active: true
  }, ];

  test('should return the last element that satisfies the predicate', () => {
    const lastActiveUser = arrayFindLast(users, (user) => user.active);
    expect(lastActiveUser).toEqual({
      id: 4,
      name: 'David',
      active: true
    });
  });

  test('should return undefined if no element satisfies the predicate', () => {
    const lastAdminUser = arrayFindLast(users, (user) => user.role === 'admin');
    expect(lastAdminUser).toBeUndefined();
  });

  test('should return undefined for an empty array', () => {
    const emptyArr = [];
    expect(arrayFindLast(emptyArr, (item) => item > 0)).toBeUndefined();
  });

  test('should work with primitive arrays', () => {
    const numbers = [1, 2, 3, 4, 5, 6];
    const lastEven = arrayFindLast(numbers, (num) => num % 2 === 0);
    expect(lastEven).toBe(6);
  });

  test('should throw an error if the first argument is not an array', () => {
    expect(() => arrayFindLast(null, () => true)).toThrow('Expected an array for the first argument.');
    expect(() => arrayFindLast(undefined, () => true)).toThrow('Expected an array for the first argument.');
  });

  test('should throw an error if the second argument is not a function', () => {
    expect(() => arrayFindLast([], null)).toThrow('Expected a function for the second argument.');
    expect(() => arrayFindLast([], 'string')).toThrow('Expected a function for the second argument.');
  });
});
