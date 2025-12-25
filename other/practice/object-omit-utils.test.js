const { omit } = require('./object-omit-utils.js');

describe('omit', () => {
  it('should create an object with omitted properties', () => {
    const obj = { a: 1, b: '2', c: 3 };
    expect(omit(obj, ['a', 'c'])).toEqual({ b: '2' });
  });

  it('should return an entire object if no keys are omitted', () => {
    const obj = { a: 1, b: '2', c: 3 };
    expect(omit(obj, ['d', 'e'])).toEqual({ a: 1, b: '2', c: 3 });
  });

  it('should handle an empty source object', () => {
    expect(omit({}, ['a', 'c'])).toEqual({});
  });

  it('should return an empty object if all keys are omitted', () => {
    const obj = { a: 1, b: '2', c: 3 };
    expect(omit(obj, ['a', 'b', 'c'])).toEqual({});
  });
});
