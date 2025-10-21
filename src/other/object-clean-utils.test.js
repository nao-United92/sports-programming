const { cleanObject } = require('./object-clean-utils.js');

describe('cleanObject', () => {
  test('should remove null and undefined properties', () => {
    const obj = {
      a: 1,
      b: null,
      c: 'hello',
      d: undefined,
      e: 0,
      f: false,
      g: ''
    };
    const expected = {
      a: 1,
      c: 'hello',
      e: 0,
      f: false,
      g: ''
    };
    expect(cleanObject(obj)).toEqual(expected);
  });

  test('should return an empty object if all properties are null or undefined', () => {
    const obj = {
      a: null,
      b: undefined
    };
    expect(cleanObject(obj)).toEqual({});
  });

  test('should return a new object instance', () => {
    const obj = { a: 1, b: 2 };
    expect(cleanObject(obj)).not.toBe(obj);
  });

  test('should handle an empty object', () => {
    expect(cleanObject({})).toEqual({});
  });

  test('should not mutate the original object', () => {
    const obj = { a: 1, b: null };
    cleanObject(obj);
    expect(obj).toEqual({ a: 1, b: null });
  });
});
