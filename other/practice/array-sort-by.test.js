const { sortBy } = require('./array-sort-by');

describe('sortBy', () => {
  const users = [
    { name: 'Alice', age: 30, city: 'New York' },
    { name: 'Bob', age: 25, city: 'London' },
    { name: 'Charlie', age: 30, city: 'Paris' },
    { name: 'David', age: 25, city: 'New York' },
  ];

  test('should sort by a single string field in ascending order', () => {
    const sorted = sortBy(users, ['age']);
    expect(sorted).toEqual([
      { name: 'Bob', age: 25, city: 'London' },
      { name: 'David', age: 25, city: 'New York' },
      { name: 'Alice', age: 30, city: 'New York' },
      { name: 'Charlie', age: 30, city: 'Paris' },
    ]);
  });

  test('should sort by a single field in descending order', () => {
    const sorted = sortBy(users, [{ key: 'age', order: 'desc' }]);
    expect(sorted).toEqual([
      { name: 'Alice', age: 30, city: 'New York' },
      { name: 'Charlie', age: 30, city: 'Paris' },
      { name: 'Bob', age: 25, city: 'London' },
      { name: 'David', age: 25, city: 'New York' },
    ]);
  });

  test('should sort by multiple fields (age asc, name asc)', () => {
    const sorted = sortBy(users, ['age', 'name']);
    expect(sorted).toEqual([
      { name: 'Bob', age: 25, city: 'London' },
      { name: 'David', age: 25, city: 'New York' },
      { name: 'Alice', age: 30, city: 'New York' },
      { name: 'Charlie', age: 30, city: 'Paris' },
    ]);
  });

  test('should sort by multiple fields with mixed order (age asc, city desc)', () => {
    const sorted = sortBy(users, ['age', { key: 'city', order: 'desc' }]);
    expect(sorted).toEqual([
      { name: 'David', age: 25, city: 'New York' }, // David (NY) before Bob (London)
      { name: 'Bob', age: 25, city: 'London' },
      { name: 'Charlie', age: 30, city: 'Paris' },  // Charlie (Paris) before Alice (NY)
      { name: 'Alice', age: 30, city: 'New York' },
    ]);
  });

  test('should return a new array reference', () => {
    const sorted = sortBy(users, ['age']);
    expect(sorted).not.toBe(users);
  });

  test('should not modify the original array', () => {
    const usersCopy = JSON.parse(JSON.stringify(users)); // Deep copy
    sortBy(users, ['age']);
    expect(users).toEqual(usersCopy);
  });

  test('should handle empty array', () => {
    expect(sortBy([], ['name'])).toEqual([]);
  });

  test('should throw TypeError if first argument is not an array', () => {
    expect(() => sortBy('not an array', ['name'])).toThrow(TypeError);
    expect(() => sortBy(null, ['name'])).toThrow(TypeError);
  });

  test('should throw TypeError if second argument is not an array', () => {
    expect(() => sortBy(users, 'name')).toThrow(TypeError);
    expect(() => sortBy(users, null)).toThrow(TypeError);
  });

  test('should throw TypeError if fields array is empty', () => {
    expect(() => sortBy(users, [])).toThrow(TypeError);
  });

  test('should throw TypeError if a field is not a string or object with key', () => {
    expect(() => sortBy(users, ['age', 123])).toThrow(TypeError);
    expect(() => sortBy(users, ['age', { order: 'desc' }])).toThrow(TypeError);
  });
});
