const set = require('./object-set-utils');

describe('set', () => {
  test('should set a value at a nested path', () => {
    const obj = { a: { b: 2 } };
    const result = set(obj, 'a.c', 3);
    expect(result).toEqual({ a: { b: 2, c: 3 } });
  });

  test('should not modify the original object', () => {
    const obj = { a: { b: 2 } };
    set(obj, 'a.c', 3);
    expect(obj).toEqual({ a: { b: 2 } });
  });

  test('should create nested objects if they do not exist', () => {
    const obj = {};
    const result = set(obj, 'a.b.c', 1);
    expect(result).toEqual({ a: { b: { c: 1 } } });
  });

  test('should work with an array path', () => {
    const obj = {};
    const result = set(obj, ['a', 'b', 'c'], 1);
    expect(result).toEqual({ a: { b: { c: 1 } } });
  });

  test('should return the original object for non-object inputs', () => {
    expect(set(null, 'a.b', 1)).toBeNull();
    expect(set(undefined, 'a.b', 1)).toBeUndefined();
    expect(set(123, 'a.b', 1)).toBe(123);
  });

  test('should overwrite existing values', () => {
    const obj = { a: { b: 2 } };
    const result = set(obj, 'a.b', 3);
    expect(result).toEqual({ a: { b: 3 } });
  });
});
