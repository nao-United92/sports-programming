import omit from './object-omit-utils';

describe('omit', () => {
  const obj = {
    a: 1,
    b: 2,
    c: 3,
    d: undefined,
    e: null,
  };

  it('should omit specified keys from an object', () => {
    expect(omit(obj, ['a', 'c'])).toEqual({ b: 2, d: undefined, e: null });
  });

  it('should handle keys that do not exist in the object', () => {
    expect(omit(obj, ['a', 'x'])).toEqual({ b: 2, c: 3, d: undefined, e: null });
  });

  it('should return the original object if no keys are specified to omit', () => {
    expect(omit(obj, [])).toEqual(obj);
  });

  it('should return an empty object if the input object is null or undefined', () => {
    expect(omit(null, ['a'])).toEqual({});
    expect(omit(undefined, ['a'])).toEqual({});
  });

  it('should handle omitting properties with undefined values', () => {
    expect(omit(obj, ['d'])).toEqual({ a: 1, b: 2, c: 3, e: null });
  });

  it('should handle omitting properties with null values', () => {
    expect(omit(obj, ['e'])).toEqual({ a: 1, b: 2, c: 3, d: undefined });
  });

  it('should return an empty object if the object is empty', () => {
    expect(omit({}, ['a'])).toEqual({});
  });

  it('should handle non-object inputs', () => {
    expect(omit(123, ['a'])).toEqual({});
    expect(omit('string', ['a'])).toEqual({});
  });
});
