const { omit } = require('./object-omit');

describe('omit', () => {
  const originalObject = { a: 1, b: 2, c: 3, d: 4 };

  test('should omit a single key', () => {
    expect(omit(originalObject, ['b'])).toEqual({ a: 1, c: 3, d: 4 });
  });

  test('should omit multiple keys', () => {
    expect(omit(originalObject, ['a', 'd'])).toEqual({ b: 2, c: 3 });
  });

  test('should return a new object reference', () => {
    const result = omit(originalObject, ['a']);
    expect(result).not.toBe(originalObject);
  });

  test('should not modify the original object', () => {
    const originalObjectCopy = { ...originalObject };
    omit(originalObject, ['b']);
    expect(originalObject).toEqual(originalObjectCopy);
  });

  test('should handle omitting keys that do not exist', () => {
    expect(omit(originalObject, ['z'])).toEqual(originalObject);
  });

  test('should return an empty object if all keys are omitted', () => {
    expect(omit(originalObject, ['a', 'b', 'c', 'd'])).toEqual({});
  });

  test('should return the original object if no keys are omitted', () => {
    expect(omit(originalObject, [])).toEqual(originalObject);
  });

  test('should throw TypeError if first argument is not an object', () => {
    expect(() => omit(null, ['a'])).toThrow(TypeError);
    expect(() => omit(undefined, ['a'])).toThrow(TypeError);
    expect(() => omit('string', ['a'])).toThrow(TypeError);
    expect(() => omit(123, ['a'])).toThrow(TypeError);
    expect(() => omit([], ['a'])).toThrow(TypeError); // Arrays are objects, but not intended for this util
  });

  test('should throw TypeError if second argument is not an array', () => {
    expect(() => omit(originalObject, 'a')).toThrow(TypeError);
    expect(() => omit(originalObject, null)).toThrow(TypeError);
    expect(() => omit(originalObject, undefined)).toThrow(TypeError);
    expect(() => omit(originalObject, {})).toThrow(TypeError);
  });
});
