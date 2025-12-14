import fromPairs from './array-from-pairs-utils';

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
});
