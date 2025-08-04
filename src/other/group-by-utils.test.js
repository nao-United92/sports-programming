import { groupBy } from './group-by-utils.js';

describe('groupBy', () => {
  const users = [
    { id: 1, name: 'Alice', age: 30 },
    { id: 2, name: 'Bob', age: 25 },
    { id: 3, name: 'Charlie', age: 30 },
    { id: 4, name: 'David', age: 25 },
  ];

  test('should group an array of objects by a specified key', () => {
    const result = groupBy(users, 'age');
    expect(result).toEqual({
      30: [
        { id: 1, name: 'Alice', age: 30 },
        { id: 3, name: 'Charlie', age: 30 },
      ],
      25: [
        { id: 2, name: 'Bob', age: 25 },
        { id: 4, name: 'David', age: 25 },
      ],
    });
  });

  test('should group an array of objects by a function', () => {
    const result = groupBy(users, (user) => (user.age > 28 ? 'older' : 'younger'));
    expect(result).toEqual({
      older: [
        { id: 1, name: 'Alice', age: 30 },
        { id: 3, name: 'Charlie', age: 30 },
      ],
      younger: [
        { id: 2, name: 'Bob', age: 25 },
        { id: 4, name: 'David', age: 25 },
      ],
    });
  });

  test('should handle an empty array', () => {
    expect(groupBy([], 'age')).toEqual({});
  });

  test('should return an empty object for non-array input', () => {
    expect(groupBy(null, 'age')).toEqual({});
    expect(groupBy(undefined, 'age')).toEqual({});
    expect(groupBy('string', 'age')).toEqual({});
    expect(groupBy(123, 'age')).toEqual({});
    expect(groupBy({}, 'age')).toEqual({});
  });
});