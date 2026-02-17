import arrayFindLastIndex from './array-find-last-index';

describe('arrayFindLastIndex', () => {
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

  test('should return the index of the last element that satisfies the predicate', () => {
    const lastActiveUserIndex = arrayFindLastIndex(users, (user) => user.active);
    expect(lastActiveUserIndex).toBe(3); // David
  });

  test('should return -1 if no element satisfies the predicate', () => {
    const lastAdminUserIndex = arrayFindLastIndex(users, (user) => user.role === 'admin');
    expect(lastAdminUserIndex).toBe(-1);
  });

  test('should return -1 for an empty array', () => {
    const emptyArr = [];
    expect(arrayFindLastIndex(emptyArr, (item) => item > 0)).toBe(-1);
  });

  test('should work with primitive arrays', () => {
    const numbers = [1, 2, 3, 4, 5, 6];
    const lastEvenIndex = arrayFindLastIndex(numbers, (num) => num % 2 === 0);
    expect(lastEvenIndex).toBe(5); // Index of 6
  });

  test('should throw an error if the first argument is not an array', () => {
    expect(() => arrayFindLastIndex(null, () => true)).toThrow('Expected an array for the first argument.');
    expect(() => arrayFindLastIndex(undefined, () => true)).toThrow('Expected an array for the first argument.');
  });

  test('should throw an error if the second argument is not a function', () => {
    expect(() => arrayFindLastIndex([], null)).toThrow('Expected a function for the second argument.');
    expect(() => arrayFindLastIndex([], 'string')).toThrow('Expected a function for the second argument.');
  });
});
