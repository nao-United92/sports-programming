const omit = require('./object-omit-utils');

describe('omit', () => {
  it('should omit specified keys from an object', () => {
    const obj = { a: 1, b: '2', c: 3 };
    expect(omit(obj, ['a', 'c'])).toEqual({ b: '2' });
  });

  it('should not change the object if keys to omit are not present', () => {
    const obj = { a: 1, b: '2' };
    expect(omit(obj, ['d', 'e'])).toEqual({ a: 1, b: '2' });
  });

  it('should return the same object if no keys are provided', () => {
    const obj = { a: 1, b: '2' };
    expect(omit(obj, [])).toEqual({ a: 1, b: '2' });
  });

  it('should return an empty object if the input object is empty', () => {
    expect(omit({}, ['a', 'b'])).toEqual({});
  });
});