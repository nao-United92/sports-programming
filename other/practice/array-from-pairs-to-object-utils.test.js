import { fromPairs } from './array-from-pairs-to-object-utils';

describe('fromPairs', () => {
  it('should create an object from key-value pairs', () => {
    const pairs = [['a', 1], ['b', 2], ['c', true]];
    expect(fromPairs(pairs)).toEqual({ a: 1, b: 2, c: true });
  });

  it('should handle an empty array', () => {
    expect(fromPairs([])).toEqual({});
  });

  it('should return an empty object for invalid input', () => {
    expect(fromPairs(null)).toEqual({});
    expect(fromPairs(undefined)).toEqual({});
    expect(fromPairs({})).toEqual({});
  });

  it('should ignore invalid pairs', () => {
    const pairs = [['a', 1], ['b'], [3, 'c'], null, ['d', 4]];
    expect(fromPairs(pairs)).toEqual({ a: 1, '3': 'c', d: 4 });
  });
});
