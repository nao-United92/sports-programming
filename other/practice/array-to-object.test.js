import { toObject } from './array-to-object.js';

describe('toObject', () => {
  it('converts an array of entries to an object', () => {
    const entries = [['a', 1], ['b', 2], ['c', 3]];
    expect(toObject(entries)).toEqual({ a: 1, b: 2, c: 3 });
  });

  it('handles an empty array', () => {
    expect(toObject([])).toEqual({});
  });

  it('overwrites earlier keys with later ones in case of duplicates', () => {
    const entries = [['a', 1], ['a', 2]];
    expect(toObject(entries)).toEqual({ a: 2 });
  });
});
