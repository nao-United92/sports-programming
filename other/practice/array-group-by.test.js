import { groupBy } from './array-group-by';

describe('groupBy', () => {
  const users = [
    { user: 'barney', age: 36, active: true },
    { user: 'fred', age: 40, active: false },
    { user: 'pebbles', age: 1, active: true },
    { user: 'fred', age: 20, active: true },
  ];

  test('should group by a property name', () => {
    expect(groupBy(users, 'user')).toEqual({
      barney: [{ user: 'barney', age: 36, active: true }],
      fred: [
        { user: 'fred', age: 40, active: false },
        { user: 'fred', age: 20, active: true },
      ],
      pebbles: [{ user: 'pebbles', age: 1, active: true }],
    });
  });

  test('should group by a function result', () => {
    expect(groupBy(users, (user) => user.age < 30 ? 'young' : 'old')).toEqual({
      old: [
        { user: 'barney', age: 36, active: true },
        { user: 'fred', age: 40, active: false },
      ],
      young: [
        { user: 'pebbles', age: 1, active: true },
        { user: 'fred', age: 20, active: true },
      ],
    });
  });

  test('should return an empty object for an empty array', () => {
    expect(groupBy([], 'user')).toEqual({});
  });

  test('should handle non-array input by returning an empty object', () => {
    expect(groupBy(null, 'user')).toEqual({});
    expect(groupBy(undefined, 'user')).toEqual({});
    expect(groupBy('string', 'user')).toEqual({});
  });

  test('should group by value itself if iteratee is not provided or invalid', () => {
    const arr = [1, 2, 1, 3];
    expect(groupBy(arr)).toEqual({
      '1': [1, 1],
      '2': [2],
      '3': [3],
    });
    expect(groupBy(arr, null)).toEqual({
      '1': [1, 1],
      '2': [2],
      '3': [3],
    });
  });

  test('should handle numeric keys', () => {
    const numbers = [1.2, 3.4, 1.8, 5.0];
    expect(groupBy(numbers, Math.floor)).toEqual({
      '1': [1.2, 1.8],
      '3': [3.4],
      '5': [5.0],
    });
  });
});
