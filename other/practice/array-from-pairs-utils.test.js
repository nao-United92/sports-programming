const { fromPairs } = require('./array-from-pairs-utils');

describe('fromPairs', () => {
  test('should create an object from an array of key-value pairs', () => {
    const pairs = [['a', 1], ['b', 2]];
    expect(fromPairs(pairs)).toEqual({ a: 1, b: 2 });
  });

  test('should handle an empty array', () => {
    expect(fromPairs([])).toEqual({});
  });

  test('should handle duplicate keys, keeping the last value', () => {
    const pairs = [['a', 1], ['b', 2], ['a', 3]];
    expect(fromPairs(pairs)).toEqual({ a: 3, b: 2 });
  });
  
  test('should return an empty object for non-array inputs', () => {
    expect(fromPairs(null)).toEqual({});
    expect(fromPairs(undefined)).toEqual({});
    expect(fromPairs('test')).toEqual({});
  });

  test('should ignore malformed pairs within the input array', () => {
    const pairs = [['a', 1], ['b'], null, [3, 'c'], ['d', 4]];
    expect(fromPairs(pairs)).toEqual({ '3': 'c', a: 1, d: 4 });
  });

  test('should handle various data types as values', () => {
    const pairs = [['name', 'John'], ['age', 30], ['active', true], ['roles', ['admin', 'user']]];
    expect(fromPairs(pairs)).toEqual({ name: 'John', age: 30, active: true, roles: ['admin', 'user'] });
  });
});
