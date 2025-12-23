const invert = require('./object-invert-utils');

describe('invert', () => {
  it('should invert the keys and values of an object', () => {
    const obj = { a: '1', b: '2', c: '3' };
    expect(invert(obj)).toEqual({ '1': 'a', '2': 'b', '3': 'c' });
  });

  it('should handle objects with non-string values', () => {
    const obj = { a: 1, b: 2 };
    expect(invert(obj)).toEqual({ '1': 'a', '2': 'b' });
  });

  it('should handle duplicate values by overwriting with the last key', () => {
    const obj = { a: '1', b: '2', c: '1' };
    expect(invert(obj)).toEqual({ '1': 'c', '2': 'b' });
  });

  it('should return an empty object for an empty object', () => {
    expect(invert({})).toEqual({});
  });

  it('should return an empty object for non-object inputs', () => {
    expect(invert(null)).toEqual({});
    expect(invert(undefined)).toEqual({});
    expect(invert(123)).toEqual({});
    expect(invert('hello')).toEqual({});
  });
});