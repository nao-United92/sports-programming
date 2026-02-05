const { last } = require('./array-last-element');

describe('last', () => {
  it('should return the last element of an array', () => {
    expect(last([1, 2, 3])).toBe(3);
  });

  it('should return the last element for an array with mixed types', () => {
    expect(last([1, 'a', { b: 2 }])).toEqual({ b: 2 });
  });

  it('should return undefined for an empty array', () => {
    expect(last([])).toBeUndefined();
  });

  it('should return the element for an array with a single element', () => {
    expect(last(['hello'])).toBe('hello');
  });

  it('should throw an error if not given an array', () => {
    expect(() => last('not an array')).toThrow(TypeError);
    expect(() => last({ a: 1 })).toThrow(TypeError);
    expect(() => last(null)).toThrow(TypeError);
  });
});
