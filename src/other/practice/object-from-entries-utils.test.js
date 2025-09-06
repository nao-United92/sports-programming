import { fromEntries } from './object-from-entries-utils.js';

describe('fromEntries', () => {
  test('should create an object from key-value pairs', () => {
    const pairs = [['a', 1], ['b', 2]];
    const result = fromEntries(pairs);
    expect(result).toEqual({ a: 1, b: 2 });
  });

  test('should handle an empty array', () => {
    expect(fromEntries([])).toEqual({});
  });

  test('should handle null or undefined input', () => {
    expect(fromEntries(null)).toEqual({});
    expect(fromEntries(undefined)).toEqual({});
  });

  test('should overwrite earlier values with later ones', () => {
    const pairs = [['a', 1], ['b', 2], ['a', 3]];
    const result = fromEntries(pairs);
    expect(result).toEqual({ a: 3, b: 2 });
  });
});
