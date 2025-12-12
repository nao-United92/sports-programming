const { omit } = require('./object-omit-properties-utils');

describe('omit', () => {
  test('should omit a single property from an object', () => {
    const obj = { a: 1, b: 2, c: 3 };
    expect(omit(obj, ['b'])).toEqual({ a: 1, c: 3 });
  });

  test('should omit multiple properties from an object', () => {
    const obj = { a: 1, b: 2, c: 3, d: 4 };
    expect(omit(obj, ['b', 'd'])).toEqual({ a: 1, c: 3 });
  });

  test('should return the same object if no properties are omitted', () => {
    const obj = { a: 1, b: 2 };
    expect(omit(obj, ['c'])).toEqual({ a: 1, b: 2 });
  });

  test('should not modify the original object', () => {
    const obj = { a: 1, b: 2 };
    const originalObj = { ...obj
    };
    omit(obj, ['a']);
    expect(obj).toEqual(originalObj);
  });

  test('should handle empty object', () => {
    expect(omit({}, ['a'])).toEqual({});
  });

  test('should handle empty properties array', () => {
    const obj = { a: 1, b: 2 };
    expect(omit(obj, [])).toEqual({ a: 1, b: 2 });
  });

  test('should return the original value if not an object', () => {
    expect(omit(null, ['a'])).toBeNull();
    expect(omit(undefined, ['a'])).toBeUndefined();
    expect(omit('string', ['a'])).toBe('string');
    expect(omit([1, 2, 3], ['a'])).toEqual([1, 2, 3]);
  });
});
