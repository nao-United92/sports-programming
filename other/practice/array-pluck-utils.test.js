const { pluck } = require('./array-pluck-utils');

describe('pluck', () => {
  const users = [
    { id: 1, name: 'Alice', details: { age: 30, city: 'NY' } },
    { id: 2, name: 'Bob', details: { age: 24, city: 'LA' } },
    { id: 3, name: 'Charlie', details: { age: 35, city: 'SF' } },
    { id: 4, name: 'David' }, // Has name, but missing details
  ];

  test('should pluck a simple property from an array of objects', () => {
    expect(pluck(users, 'name')).toEqual(['Alice', 'Bob', 'Charlie', 'David']);
  });

  test('should pluck a nested property from an array of objects', () => {
    expect(pluck(users, 'details.age')).toEqual([30, 24, 35, undefined]);
  });

  test('should return undefined for non-existent properties', () => {
    expect(pluck(users, 'email')).toEqual([undefined, undefined, undefined, undefined]);
  });

  test('should handle empty array', () => {
    expect(pluck([], 'name')).toEqual([]);
  });

  test('should handle array with mixed types, returning undefined for non-objects', () => {
    const mixedArr = [
      { id: 1, name: 'Alice' },
      null,
      { id: 2, name: 'Bob' },
      'string',
      undefined,
      { id: 3, name: 'Charlie' },
    ];
    expect(pluck(mixedArr, 'name')).toEqual(['Alice', undefined, 'Bob', undefined, undefined, 'Charlie']);
  });

  test('should return undefined for a nested property if an intermediate object is missing', () => {
    const data = [
      { a: { b: 1 } },
      { a: {} },
      { c: 2 },
      {}
    ];
    expect(pluck(data, 'a.b')).toEqual([1, undefined, undefined, undefined]);
  });
});