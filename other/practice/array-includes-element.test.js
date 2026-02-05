const { includes } = require('./array-includes-element');

describe('includes', () => {
  it('should return true if the value is in the array', () => {
    expect(includes([1, 2, 3], 2)).toBe(true);
  });

  it('should return false if the value is not in the array', () => {
    expect(includes([1, 2, 3], 4)).toBe(false);
  });

  it('should work with strings', () => {
    expect(includes(['a', 'b', 'c'], 'b')).toBe(true);
    expect(includes(['a', 'b', 'c'], 'd')).toBe(false);
  });

  it('should work with mixed types', () => {
    expect(includes([1, 'hello', null], 'hello')).toBe(true);
    expect(includes([1, 'hello', null], undefined)).toBe(false);
  });

  it('should handle empty arrays', () => {
    expect(includes([], 1)).toBe(false);
  });
  
  it('should handle NaN values', () => {
    expect(includes([1, NaN, 3], NaN)).toBe(true);
  });

  it('should throw an error if not given an array', () => {
    expect(() => includes('not an array', 'a')).toThrow(TypeError);
    expect(() => includes(null, 1)).toThrow(TypeError);
  });
});
