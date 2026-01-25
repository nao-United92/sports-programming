const { omit } = require('./object-key-omitter-utils');

describe('omit', () => {
  const obj = { a: 1, b: '2', c: true };

  test('should return an object without the specified properties', () => {
    expect(omit(obj, ['a', 'c'])).toEqual({ b: '2' });
  });

  test('should not change the object if keys to omit are not present', () => {
    expect(omit(obj, ['d', 'e'])).toEqual(obj);
  });

  test('should return the same object if no keys are provided', () => {
    expect(omit(obj, [])).toEqual(obj);
  });

  test('should return an empty object if the input object is empty', () => {
    expect(omit({}, ['a'])).toEqual({});
  });

  test('should return an empty object if all keys are omitted', () => {
    expect(omit(obj, ['a', 'b', 'c'])).toEqual({});
  });
});
