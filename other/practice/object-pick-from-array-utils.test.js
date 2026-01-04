import { pickFromArray } from './object-pick-from-array-utils';

describe('pickFromArray', () => {
  const users = [{
    id: 1,
    name: 'Alice',
    age: 30
  }, {
    id: 2,
    name: 'Bob',
    age: 24
  }, {
    id: 3,
    name: 'Charlie',
    age: 35
  }, ];

  test('should pick a single key correctly from each object', () => {
    const result = pickFromArray(users, 'name');
    expect(result).toEqual([{
      name: 'Alice'
    }, {
      name: 'Bob'
    }, {
      name: 'Charlie'
    }, ]);
  });

  test('should pick multiple keys correctly from each object', () => {
    const result = pickFromArray(users, ['name', 'age']);
    expect(result).toEqual([{
      name: 'Alice',
      age: 30
    }, {
      name: 'Bob',
      age: 24
    }, {
      name: 'Charlie',
      age: 35
    }, ]);
  });

  test('should handle missing keys gracefully', () => {
    const result = pickFromArray(users, ['name', 'email']);
    expect(result).toEqual([{
      name: 'Alice'
    }, {
      name: 'Bob'
    }, {
      name: 'Charlie'
    }, ]);
  });

  test('should handle empty array of objects', () => {
    expect(pickFromArray([], ['id'])).toEqual([]);
  });

  test('should return empty objects if keysToPick is empty', () => {
    const result = pickFromArray(users, []);
    expect(result).toEqual([{}, {}, {}]);
  });

  test('should not modify original objects or array', () => {
    const originalUsers = JSON.parse(JSON.stringify(users)); // Deep copy
    const result = pickFromArray(originalUsers, ['name']);
    expect(originalUsers).toEqual(users); // Original array not modified
    expect(result[0]).not.toBe(originalUsers[0]); // New objects created
  });

  test('should handle objects with non-object elements and return them as is', () => {
    const mixedArray = [users[0], null, 123, {
      id: 4,
      name: 'David'
    }];
    const result = pickFromArray(mixedArray, ['name']);
    expect(result).toEqual([{
      name: 'Alice'
    }, null, 123, {
      name: 'David'
    }]);
  });

  test('should throw an error if arrayOfObjects is not an array', () => {
    expect(() => pickFromArray(null, 'name')).toThrow('Expected an array of objects');
    expect(() => pickFromArray({}, 'name')).toThrow('Expected an array of objects');
  });

  test('should throw an error if keysToPick is invalid', () => {
    expect(() => pickFromArray(users, null)).toThrow('Expected keysToPick to be an array of strings or a single string');
    expect(() => pickFromArray(users, 123)).toThrow('Expected keysToPick to be an array of strings or a single string');
  });
});
