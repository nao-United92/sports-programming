import { keyBy } from './array-key-by';

describe('keyBy', () => {
  const users = [
    { user: 'barney', age: 36, active: true },
    { user: 'fred', age: 40, active: false },
    { user: 'pebbles', age: 1, active: true },
  ];

  test('should key by a property name', () => {
    expect(keyBy(users, 'user')).toEqual({
      barney: { user: 'barney', age: 36, active: true },
      fred: { user: 'fred', age: 40, active: false },
      pebbles: { user: 'pebbles', age: 1, active: true },
    });
  });

  test('should key by a function result', () => {
    expect(keyBy(users, (user) => (user.active ? 'active' : 'inactive'))).toEqual({
      active: { user: 'pebbles', age: 1, active: true }, // pebbles is the last 'active' user
      inactive: { user: 'fred', age: 40, active: false },
    });
  });

  test('should return an empty object for an empty array', () => {
    expect(keyBy([], 'user')).toEqual({});
  });

  test('should handle non-array input by returning an empty object', () => {
    expect(keyBy(null, 'user')).toEqual({});
    expect(keyBy(undefined, 'user')).toEqual({});
    expect(keyBy('string', 'user')).toEqual({});
  });

  test('should key by value itself if iteratee is not provided or invalid', () => {
    const arr = [1, 2, 1, 3];
    expect(keyBy(arr)).toEqual({
      '1': 1, // last 1
      '2': 2,
      '3': 3,
    });
  });

  test('should handle numeric keys', () => {
    const numbers = [
      { id: 1, value: 'a' },
      { id: 2, value: 'b' },
      { id: 1, value: 'c' },
    ];
    expect(keyBy(numbers, 'id')).toEqual({
      '1': { id: 1, value: 'c' },
      '2': { id: 2, value: 'b' },
    });
  });
});
