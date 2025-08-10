import { fromPairs } from './from-pairs-utils';

describe('fromPairs', () => {
  test('should create an object from an array of key-value pairs', () => {
    const pairs = [['a', 1], ['b', 2], ['c', 3]];
    expect(fromPairs(pairs)).toEqual({ a: 1, b: 2, c: 3 });
  });

  test('should handle an empty array', () => {
    expect(fromPairs([])).toEqual({});
  });

  test('should handle null or undefined input', () => {
    expect(fromPairs(null)).toEqual({});
    expect(fromPairs(undefined)).toEqual({});
  });

  test('should overwrite earlier values with later values if keys are the same', () => {
    const pairs = [['a', 1], ['b', 2], ['a', 3]];
    expect(fromPairs(pairs)).toEqual({ a: 3, b: 2 });
  });

  test('should work with various value types', () => {
    const pairs = [['a', null], ['b', { id: 1 }], ['c', [1, 2]]];
    expect(fromPairs(pairs)).toEqual({ a: null, b: { id: 1 }, c: [1, 2] });
  });

  // Object.fromEntries will throw a TypeError if an entry is not an object or is null.
  // This is expected behavior.
  test('should throw an error for invalid entries', () => {
    expect(() => fromPairs([['a', 1], 'not-a-pair'])).toThrow();
    expect(() => fromPairs([['a', 1], null])).toThrow();
    // Note: A pair with more than 2 items is handled by fromEntries, it just ignores extra items.
    const result = fromPairs([['a', 1], ['b', 2, 'ignored']]);
    expect(result).toEqual({ a: 1, b: 2 });
  });
});
