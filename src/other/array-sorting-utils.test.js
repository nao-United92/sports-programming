// src/other/array-sorting-utils.test.js

const { sortByProperty } = require('./array-sorting-utils');

describe('Array Sorting Utils', () => {
  describe('sortByProperty', () => {
    const users = [
      { name: 'Alice', age: 30, city: 'New York' },
      { name: 'Bob', age: 25, city: 'London' },
      { name: 'Charlie', age: 35, city: 'Paris' },
      { name: 'David', age: 25, city: 'Tokyo' }, // Same age as Bob
    ];

    test('should sort an array of objects by a numeric property in ascending order', () => {
      const sortedUsers = sortByProperty(users, 'age', 'asc');
      expect(sortedUsers).toEqual([
        { name: 'Bob', age: 25, city: 'London' },
        { name: 'David', age: 25, city: 'Tokyo' },
        { name: 'Alice', age: 30, city: 'New York' },
        { name: 'Charlie', age: 35, city: 'Paris' },
      ]);
    });

    test('should sort an array of objects by a numeric property in descending order', () => {
      const sortedUsers = sortByProperty(users, 'age', 'desc');
      expect(sortedUsers).toEqual([
        { name: 'Charlie', age: 35, city: 'Paris' },
        { name: 'Alice', age: 30, city: 'New York' },
        { name: 'Bob', age: 25, city: 'London' },
        { name: 'David', age: 25, city: 'Tokyo' },
      ]);
    });

    test('should sort an array of objects by a string property in ascending order', () => {
      const sortedUsers = sortByProperty(users, 'name', 'asc');
      expect(sortedUsers).toEqual([
        { name: 'Alice', age: 30, city: 'New York' },
        { name: 'Bob', age: 25, city: 'London' },
        { name: 'Charlie', age: 35, city: 'Paris' },
        { name: 'David', age: 25, city: 'Tokyo' },
      ]);
    });

    test('should sort an array of objects by a string property in descending order', () => {
      const sortedUsers = sortByProperty(users, 'name', 'desc');
      expect(sortedUsers).toEqual([
        { name: 'David', age: 25, city: 'Tokyo' },
        { name: 'Charlie', age: 35, city: 'Paris' },
        { name: 'Bob', age: 25, city: 'London' },
        { name: 'Alice', age: 30, city: 'New York' },
      ]);
    });

    test('should return an empty array for an empty input array', () => {
      expect(sortByProperty([], 'age')).toEqual([]);
    });

    test('should return an empty array for non-array inputs', () => {
      expect(sortByProperty(null, 'age')).toEqual([]);
      expect(sortByProperty(undefined, 'age')).toEqual([]);
      expect(sortByProperty({}, 'age')).toEqual([]);
    });

    test('should return an empty array if property is not a string', () => {
      expect(sortByProperty(users, null)).toEqual([]);
      expect(sortByProperty(users, undefined)).toEqual([]);
      expect(sortByProperty(users, 123)).toEqual([]);
    });

    test('should handle objects with missing properties gracefully', () => {
      const mixedUsers = [
        { name: 'Alice', age: 30 },
        { name: 'Bob' },
        { name: 'Charlie', age: 35 },
      ];
      const sortedMixedUsers = sortByProperty(mixedUsers, 'age', 'asc');
      // Undefined values are typically sorted to the end or beginning depending on implementation
      // JavaScript's sort puts undefined at the end for ascending order
      expect(sortedMixedUsers).toEqual([
        { name: 'Alice', age: 30 },
        { name: 'Charlie', age: 35 },
        { name: 'Bob' },
      ]);
    });
  });
});
