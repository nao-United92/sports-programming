const setByPath = require('./nebula-object-set-by-path');

describe('nebula-object-set-by-path', () => {
  test('should set value on existing property', () => {
    const obj = { a: 1 };
    expect(setByPath(obj, 'a', 2)).toEqual({ a: 2 });
  });

  test('should set value on nested path', () => {
    const obj = { a: { b: 1 } };
    expect(setByPath(obj, 'a.b', 2)).toEqual({ a: { b: 2 } });
  });

  test('should create nested objects if they do not exist', () => {
    const obj = {};
    expect(setByPath(obj, 'a.b.c', 3)).toEqual({ a: { b: { c: 3 } } });
  });

  test('should create arrays if path contains indices', () => {
    const obj = {};
    const result = setByPath(obj, 'a.0.b', 5);
    expect(result.a).toBeInstanceOf(Array);
    expect(result).toEqual({ a: [{ b: 5 }] });
  });

  test('should handle arrays in path', () => {
    const obj = { a: [1, 2] };
    expect(setByPath(obj, 'a.1', 3)).toEqual({ a: [1, 3] });
  });

  test('should handle existing non-object values on path', () => {
    const obj = { a: 1 };
    expect(setByPath(obj, 'a.b', 2)).toEqual({ a: { b: 2 } });
  });

  test('should return input if not an object or path is not a string', () => {
    expect(setByPath(null, 'a', 1)).toBe(null);
    expect(setByPath(123, 'a', 1)).toBe(123);
    expect(setByPath({}, 123, 1)).toEqual({});
  });
});
