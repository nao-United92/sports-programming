const { invert } = require('./object-invert-utils.js');

describe('invert', () => {
  it('should invert the keys and values of an object', () => {
    const obj = { a: '1', b: '2', c: '3' };
    expect(invert(obj)).toEqual({ '1': 'a', '2': 'b', '3': 'c' });
  });

  it('should handle objects with non-string values', () => {
    const obj = { a: 1, b: 2 };
    expect(invert(obj)).toEqual({ '1': 'a', '2': 'b' });
  });

  it('should handle an empty object', () => {
    expect(invert({})).toEqual({});
  });

  it('should handle invalid inputs gracefully', () => {
    expect(invert(null)).toEqual({});
    expect(invert(undefined)).toEqual({});
  });

  it('should overwrite keys if values are not unique', () => {
    const obj = { a: '1', b: '1', c: '2' };
    expect(invert(obj)).toEqual({ '1': 'b', '2': 'c' });
  });
});
