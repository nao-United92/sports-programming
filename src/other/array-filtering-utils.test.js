// src/other/array-filtering-utils.test.js

const { filterByProperty } = require('./array-filtering-utils');

describe('Array Filtering Utils', () => {
  describe('filterByProperty', () => {
    const users = [
      { id: 1, name: 'Alice', city: 'New York' },
      { id: 2, name: 'Bob', city: 'London' },
      { id: 3, name: 'Charlie', city: 'New York' },
      { id: 4, name: 'David', city: 'Paris' },
    ];

    test('should filter objects by a specific property value', () => {
      const filteredUsers = filterByProperty(users, 'city', 'New York');
      expect(filteredUsers).toEqual([
        { id: 1, name: 'Alice', city: 'New York' },
        { id: 3, name: 'Charlie', city: 'New York' },
      ]);
    });

    test('should return an empty array if no objects match the criteria', () => {
      const filteredUsers = filterByProperty(users, 'city', 'Tokyo');
      expect(filteredUsers).toEqual([]);
    });

    test('should return an empty array for an empty input array', () => {
      expect(filterByProperty([], 'city', 'New York')).toEqual([]);
    });

    test('should return an empty array for non-array inputs', () => {
      expect(filterByProperty(null, 'city', 'New York')).toEqual([]);
      expect(filterByProperty(undefined, 'city', 'New York')).toEqual([]);
      expect(filterByProperty({}, 'city', 'New York')).toEqual([]);
    });

    test('should return an empty array if property is not a string or empty', () => {
      expect(filterByProperty(users, null, 'New York')).toEqual([]);
      expect(filterByProperty(users, '', 'New York')).toEqual([]);
      expect(filterByProperty(users, 123, 'New York')).toEqual([]);
    });

    test('should handle objects with missing properties gracefully', () => {
      const mixedUsers = [
        { id: 1, name: 'Alice', city: 'New York' },
        { id: 2, name: 'Bob' }, // Missing city property
        { id: 3, name: 'Charlie', city: 'New York' },
      ];
      const filteredUsers = filterByProperty(mixedUsers, 'city', 'New York');
      expect(filteredUsers).toEqual([
        { id: 1, name: 'Alice', city: 'New York' },
        { id: 3, name: 'Charlie', city: 'New York' },
      ]);
    });

    test('should handle filtering by boolean values', () => {
      const items = [{ active: true }, { active: false }, { active: true }];
      expect(filterByProperty(items, 'active', true)).toEqual([{ active: true }, { active: true }]);
    });

    test('should handle filtering by null values', () => {
      const items = [{ value: 1 }, { value: null }, { value: 3 }];
      expect(filterByProperty(items, 'value', null)).toEqual([{ value: null }]);
    });
  });
});