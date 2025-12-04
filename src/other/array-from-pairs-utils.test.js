import { fromPairs, zipObject } from './array-from-pairs-utils.js';

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

describe('zipObject', () => {
  it('should create an object from two arrays', () => {
    const keys = ['a', 'b'];
    const values = [1, 2];
    expect(zipObject(keys, values)).toEqual({ 'a': 1, 'b': 2 });
  });

  it('should handle keys array being longer than values array', () => {
    const keys = ['a', 'b', 'c'];
    const values = [1, 2];
    expect(zipObject(keys, values)).toEqual({ 'a': 1, 'b': 2, 'c': undefined });
  });

  it('should handle values array being longer than keys array', () => {
    const keys = ['a', 'b'];
    const values = [1, 2, 3];
    expect(zipObject(keys, values)).toEqual({ 'a': 1, 'b': 2 });
  });

  it('should handle an empty values array', () => {
    const keys = ['a', 'b'];
    expect(zipObject(keys, [])).toEqual({ 'a': undefined, 'b': undefined });
  });

  it('should handle empty keys and values arrays', () => {
    expect(zipObject([], [])).toEqual({});
  });

  it('should handle null or undefined keys', () => {
    expect(zipObject(null)).toEqual({});
    expect(zipObject(undefined)).toEqual({});
  });
});
