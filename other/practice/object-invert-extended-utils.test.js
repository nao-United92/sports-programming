const invert = require('./object-invert-extended-utils');

describe('invert', () => {
  it('should invert a simple object with unique values', () => {
    const obj = { a: 'x', b: 'y', c: 'z' };
    const expected = { x: 'a', y: 'b', z: 'c' };
    expect(invert(obj)).toEqual(expected);
  });

  it('should handle non-unique values by overwriting keys', () => {
    const obj = { a: 'x', b: 'y', c: 'x' };
    const expected = { x: 'c', y: 'b' };
    expect(invert(obj)).toEqual(expected);
  });

  it('should convert non-string values to their string representation for keys', () => {
    const obj = { a: 1, b: true, c: null, d: undefined };
    const expected = { '1': 'a', 'true': 'b', 'null': 'c', 'undefined': 'd' };
    expect(invert(obj)).toEqual(expected);
  });

  it('should handle an empty object', () => {
    expect(invert({})).toEqual({});
  });

  it('should return an empty object for non-object inputs', () => {
    expect(invert(null)).toEqual({});
    expect(invert(undefined)).toEqual({});
    expect(invert(123)).toEqual({});
    expect(invert('abc')).toEqual({});
  });
});
