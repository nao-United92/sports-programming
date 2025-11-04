import { set } from './object-set-utils.js';

describe('set', () => {
  test('should set a value at a simple path', () => {
    const obj = { a: 1 };
    set(obj, 'b', 2);
    expect(obj).toEqual({ a: 1, b: 2 });
  });

  test('should set a value at a nested path', () => {
    const obj = { a: { b: 1 } };
    set(obj, 'a.c', 2);
    expect(obj).toEqual({ a: { b: 1, c: 2 } });
  });

  test('should create intermediate objects if they do not exist', () => {
    const obj = {};
    set(obj, 'a.b.c', 3);
    expect(obj).toEqual({ a: { b: { c: 3 } } });
  });

  test('should create intermediate arrays for integer-keyed paths', () => {
    const obj = {};
    set(obj, 'a[0].b', 4);
    expect(obj).toEqual({ a: [{ b: 4 }] });
  });

  test('should overwrite existing values', () => {
    const obj = { a: 1 };
    set(obj, 'a', 2);
    expect(obj).toEqual({ a: 2 });
  });

  test('should handle array paths', () => {
    const obj = { a: [{ b: 1 }] };
    set(obj, ['a', '0', 'c'], 2);
    expect(obj).toEqual({ a: [{ b: 1, c: 2 }] });
  });

  test('should return the original object', () => {
    const obj = {};
    const result = set(obj, 'a', 1);
    expect(result).toBe(obj);
  });

  test('should not modify null or undefined objects', () => {
    expect(set(null, 'a', 1)).toBeNull();
    expect(set(undefined, 'a', 1)).toBeUndefined();
  });
});