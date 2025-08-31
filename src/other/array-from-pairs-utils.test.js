import { fromPairs } from './array-from-pairs-utils.js';

describe('fromPairs', () => {
  it('should create an object from key-value pairs', () => {
    const pairs = [['a', 1], ['b', 2]];
    expect(fromPairs(pairs)).toEqual({ 'a': 1, 'b': 2 });
  });

  it('should handle an empty array', () => {
    expect(fromPairs([])).toEqual({});
  });

  it('should handle null or undefined input', () => {
    expect(fromPairs(null)).toEqual({});
    expect(fromPairs(undefined)).toEqual({});
  });

  it('should overwrite earlier values with later values for the same key', () => {
    const pairs = [['a', 1], ['b', 2], ['a', 3]];
    expect(fromPairs(pairs)).toEqual({ 'a': 3, 'b': 2 });
  });
});
