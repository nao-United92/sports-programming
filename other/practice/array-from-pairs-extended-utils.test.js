const fromPairsExtended = require('./array-from-pairs-extended-utils');

describe('fromPairsExtended', () => {
  it('should create an object from an array of key-value pairs', () => {
    const pairs = [['a', 1], ['b', 2], ['c', 3]];
    const expected = { a: 1, b: 2, c: 3 };
    expect(fromPairsExtended(pairs)).toEqual(expected);
  });

  it('should handle an empty array', () => {
    expect(fromPairsExtended([])).toEqual({});
  });

  it('should handle pairs with non-string keys', () => {
    const pairs = [[1, 'a'], [true, 'b']];
    const expected = { '1': 'a', 'true': 'b' };
    expect(fromPairsExtended(pairs)).toEqual(expected);
  });

  it('should overwrite earlier values with later values for the same key', () => {
    const pairs = [['a', 1], ['b', 2], ['a', 3]];
    const expected = { a: 3, b: 2 };
    expect(fromPairsExtended(pairs)).toEqual(expected);
  });

  it('should ignore invalid pairs', () => {
    const pairs = [['a', 1], ['b'], [null], undefined, ['c', 3, 4]];
    const expected = { a: 1 };
    expect(fromPairsExtended(pairs)).toEqual(expected);
  });

  it('should return an empty object if the input is not an array', () => {
    expect(fromPairsExtended(null)).toEqual({});
    expect(fromPairsExtended(undefined)).toEqual({});
    expect(fromPairsExtended({})).toEqual({});
  });
});
