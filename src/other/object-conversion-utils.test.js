import { invert, fromPairs } from './object-conversion-utils.js';

describe('invert', () => {
  it('should invert keys and values of an object', () => {
    const obj = { a: '1', b: '2' };
    expect(invert(obj)).toEqual({ '1': 'a', '2': 'b' });
  });

  it('should handle last-in wins for duplicate values', () => {
    const obj = { a: '1', b: '2', c: '1' };
    expect(invert(obj)).toEqual({ '1': 'c', '2': 'b' });
  });
});

describe('fromPairs', () => {
  it('should create an object from an array of key-value pairs', () => {
    const pairs = [['a', 1], ['b', 2]];
    expect(fromPairs(pairs)).toEqual({ a: 1, b: 2 });
  });

  it('should handle an empty array', () => {
    expect(fromPairs([])).toEqual({});
  });

  it('should handle null or undefined input', () => {
    expect(fromPairs(null)).toEqual({});
    expect(fromPairs(undefined)).toEqual({});
  });

  it('should ignore invalid pairs', () => {
    const pairs = [['a', 1], ['b'], null, ['c', 3]];
    expect(fromPairs(pairs)).toEqual({ a: 1, c: 3 });
  });
});
