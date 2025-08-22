import { toPairs, fromPairs } from './object-pairs-utils';

describe('toPairs', () => {
  it('should convert an object to an array of key-value pairs', () => {
    const object = { a: 1, b: 2 };
    expect(toPairs(object)).toEqual([['a', 1], ['b', 2]]);
  });

  it('should handle an empty object', () => {
    expect(toPairs({})).toEqual([]);
  });

  it('should handle null or undefined input', () => {
    expect(toPairs(null)).toEqual([]);
    expect(toPairs(undefined)).toEqual([]);
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
    const pairs = [['a', 1], ['b'], null, ['c', 3, 'extra']];
    expect(fromPairs(pairs)).toEqual({ a: 1, c: 3 });
  });
});
