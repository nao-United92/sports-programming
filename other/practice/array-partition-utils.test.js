// other/practice/array-partition-utils.test.js

const arrayPartition = require('./array-partition-utils');

describe('arrayPartition', () => {
  test('should partition an array based on a numeric predicate', () => {
    const arr = [1, 2, 3, 4, 5, 6];
    const [evens, odds] = arrayPartition(arr, (n) => n % 2 === 0);
    expect(evens).toEqual([2, 4, 6]);
    expect(odds).toEqual([1, 3, 5]);
  });

  test('should partition an array of objects based on a property', () => {
    const users = [
      { name: 'Alice', active: true },
      { name: 'Bob', active: false },
      { name: 'Charlie', active: true },
    ];
    const [activeUsers, inactiveUsers] = arrayPartition(users, (user) => user.active);
    expect(activeUsers).toEqual([
      { name: 'Alice', active: true },
      { name: 'Charlie', active: true },
    ]);
    expect(inactiveUsers).toEqual([{ name: 'Bob', active: false }]);
  });

  test('should handle an empty array', () => {
    const [truthy, falsy] = arrayPartition([], (x) => x > 0);
    expect(truthy).toEqual([]);
    expect(falsy).toEqual([]);
  });

  test('should place all elements in the first array if predicate is always true', () => {
    const arr = [1, 2, 3];
    const [allTrue, noneFalse] = arrayPartition(arr, (x) => true);
    expect(allTrue).toEqual([1, 2, 3]);
    expect(noneFalse).toEqual([]);
  });

  test('should place all elements in the second array if predicate is always false', () => {
    const arr = [1, 2, 3];
    const [noneTrue, allFalse] = arrayPartition(arr, (x) => false);
    expect(noneTrue).toEqual([]);
    expect(allFalse).toEqual([1, 2, 3]);
  });

  test('should handle mixed types in the array', () => {
    const arr = [1, 'hello', null, 0, true, 'world', false];
    const [truthyValues, falsyValues] = arrayPartition(arr, (item) => Boolean(item));
    expect(truthyValues).toEqual([1, 'hello', true, 'world']);
    expect(falsyValues).toEqual([null, 0, false]);
  });
});
