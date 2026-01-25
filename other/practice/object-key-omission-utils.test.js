const { omitKeys } = require('./object-key-omission-utils');

describe('omitKeys', () => {
  const obj = { a: 1, b: 'hello', c: true, d: null };

  test('should return an object without the specified keys', () => {
    expect(omitKeys(obj, ['a', 'c'])).toEqual({ b: 'hello', d: null });
  });

  test('should not change the object if keys to omit are not present', () => {
    expect(omitKeys(obj, ['e', 'f'])).toEqual(obj);
  });

  test('should return the original object if an empty array of keys is provided', () => {
    expect(omitKeys(obj, [])).toEqual(obj);
  });

  test('should return an empty object if all keys are omitted', () => {
    expect(omitKeys(obj, ['a', 'b', 'c', 'd'])).toEqual({});
  });

  test('should handle an empty original object', () => {
    expect(omitKeys({}, ['a', 'b'])).toEqual({});
  });

  test('should handle cases where some keys to omit are not in the object', () => {
    expect(omitKeys(obj, ['a', 'e'])).toEqual({ b: 'hello', c: true, d: null });
  });
});
