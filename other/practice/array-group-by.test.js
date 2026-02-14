const { groupBy } = require('./array-group-by');

describe('groupBy', () => {
  const users = [
    { id: 1, name: 'Alice', age: 30, city: 'New York' },
    { id: 2, name: 'Bob', age: 25, city: 'London' },
    { id: 3, name: 'Charlie', age: 30, city: 'New York' },
    { id: 4, name: 'David', age: 25, city: 'Paris' },
  ];

  test('should group by a string key', () => {
    const result = groupBy(users, 'age');
    expect(result).toEqual({
      30: [
        { id: 1, name: 'Alice', age: 30, city: 'New York' },
        { id: 3, name: 'Charlie', age: 30, city: 'New York' },
      ],
      25: [
        { id: 2, name: 'Bob', age: 25, city: 'London' },
        { id: 4, name: 'David', age: 25, city: 'Paris' },
      ],
    });
  });

  test('should group by a function', () => {
    const result = groupBy(users, (user) => (user.age > 28 ? 'old' : 'young'));
    expect(result).toEqual({
      old: [
        { id: 1, name: 'Alice', age: 30, city: 'New York' },
        { id: 3, name: 'Charlie', age: 30, city: 'New York' },
      ],
      young: [
        { id: 2, name: 'Bob', age: 25, city: 'London' },
        { id: 4, name: 'David', age: 25, city: 'Paris' },
      ],
    });
  });

  test('should group by a string key that does not exist (should group by undefined)', () => {
    const result = groupBy(users, 'country');
    expect(result).toEqual({
      undefined: users,
    });
  });

  test('should return an empty object for an empty array', () => {
    expect(groupBy([], 'age')).toEqual({});
  });

  test('should throw TypeError if first argument is not an array', () => {
    expect(() => groupBy('not an array', 'age')).toThrow(TypeError);
    expect(() => groupBy(null, 'age')).toThrow(TypeError);
    expect(() => groupBy(undefined, 'age')).toThrow(TypeError);
    expect(() => groupBy({}, 'age')).toThrow(TypeError);
  });

  test('should throw TypeError if second argument is not a string or function', () => {
    expect(() => groupBy(users, 123)).toThrow(TypeError);
    expect(() => groupBy(users, null)).toThrow(TypeError);
    expect(() => groupBy(users, undefined)).toThrow(TypeError);
    expect(() => groupBy(users, true)).toThrow(TypeError);
  });
});
