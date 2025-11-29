// src/other/array-transformation-utils.test.js

const { mapObject } = require('./array-transformation-utils');

describe('Array Transformation Utils', () => {
  describe('mapObject', () => {
    const users = [
      { id: 1, name: 'Alice', age: 30 },
      { id: 2, name: 'Bob', age: 25 },
      { id: 3, name: 'Charlie', age: 35 },
    ];

    test('should transform each object in the array', () => {
      const transformedUsers = mapObject(users, (user) => ({
        ...user,
        isAdult: user.age >= 18,
      }));

      expect(transformedUsers).toEqual([
        { id: 1, name: 'Alice', age: 30, isAdult: true },
        { id: 2, name: 'Bob', age: 25, isAdult: true },
        { id: 3, name: 'Charlie', age: 35, isAdult: true },
      ]);
    });

    test('should pass index to the transformation function', () => {
      const transformedUsers = mapObject(users, (user, index) => ({
        ...user,
        index: index,
      }));

      expect(transformedUsers).toEqual([
        { id: 1, name: 'Alice', age: 30, index: 0 },
        { id: 2, name: 'Bob', age: 25, index: 1 },
        { id: 3, name: 'Charlie', age: 35, index: 2 },
      ]);
    });

    test('should return an empty array for an empty input array', () => {
      expect(mapObject([], (user) => user)).toEqual([]);
    });

    test('should return an empty array for non-array inputs', () => {
      expect(mapObject(null, (user) => user)).toEqual([]);
      expect(mapObject(undefined, (user) => user)).toEqual([]);
      expect(mapObject({}, (user) => user)).toEqual([]);
    });

    test('should return an empty array if transformFn is not a function', () => {
      expect(mapObject(users, null)).toEqual([]);
      expect(mapObject(users, 'string')).toEqual([]);
    });

    test('should handle transformation that changes object structure completely', () => {
      const transformedUsers = mapObject(users, (user) => ({
        fullName: user.name,
      }));

      expect(transformedUsers).toEqual([
        { fullName: 'Alice' },
        { fullName: 'Bob' },
        { fullName: 'Charlie' },
      ]);
    });
  });
});
