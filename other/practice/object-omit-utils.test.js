const { omit } = require('./object-omit-utils');

describe('omit', () => {
  const obj = { a: 1, b: '2', c: 3 };

  it('should omit specified keys from an object', () => {
    expect(omit(obj, ['a', 'c'])).toEqual({ b: '2' });
  });

  it('should not change the object if keys to omit are not present', () => {
    expect(omit(obj, ['d', 'e'])).toEqual(obj);
  });

  it('should return a copy of the object if no keys are specified', () => {
    const result = omit(obj, []);
    expect(result).toEqual(obj);
    expect(result).not.toBe(obj);
  });

  it('should return an empty object if the input object is null or undefined', () => {
    expect(omit(null, ['a'])).toEqual({});
    expect(omit(undefined, ['a'])).toEqual({});
  });

  it('should not mutate the original object', () => {
    omit(obj, ['a']);
    expect(obj).toEqual({ a: 1, b: '2', c: 3 });
  });
});
