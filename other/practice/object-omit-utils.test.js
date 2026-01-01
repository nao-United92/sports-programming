const { omit } = require('./object-omit-utils');

describe('omit', () => {
  test('should return an empty object if input is not an object', () => {
    expect(omit(null, 'a')).toEqual({});
    expect(omit(undefined, 'a')).toEqual({});
    expect(omit(123, 'a')).toEqual({});
  });

  test('should omit a single key', () => {
    const obj = { a: 1, b: 2, c: 3 };
    expect(omit(obj, 'a')).toEqual({ b: 2, c: 3 });
  });

  test('should omit multiple keys', () => {
    const obj = { a: 1, b: 2, c: 3 };
    expect(omit(obj, ['a', 'c'])).toEqual({ b: 2 });
  });

  test('should not modify the original object', () => {
    const obj = { a: 1, b: 2, c: 3 };
    omit(obj, 'a');
    expect(obj).toEqual({ a: 1, b: 2, c: 3 });
  });

  test('should return a new object instance', () => {
    const obj = { a: 1, b: 2, c: 3 };
    const result = omit(obj, 'd');
    expect(result).not.toBe(obj);
    expect(result).toEqual(obj);
  });

  test('should handle keys that do not exist', () => {
    const obj = { a: 1, b: 2 };
    expect(omit(obj, 'c')).toEqual({ a: 1, b: 2 });
  });

  test('should handle an empty array of keys', () => {
    const obj = { a: 1, b: 2 };
    expect(omit(obj, [])).toEqual({ a: 1, b: 2 });
  });
});
