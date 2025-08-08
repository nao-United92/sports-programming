import { set } from './set-utils';

describe('set', () => {
  test('should set a top-level property', () => {
    const obj = {};
    set(obj, 'a', 1);
    expect(obj).toEqual({ a: 1 });
  });

  test('should set a nested property using dot notation', () => {
    const obj = { b: {} };
    set(obj, 'b.c', 2);
    expect(obj).toEqual({ b: { c: 2 } });
  });

  test('should set a deeply nested property, creating intermediate objects', () => {
    const obj = {};
    set(obj, 'b.d.e', 3);
    expect(obj).toEqual({ b: { d: { e: 3 } } });
  });

  test('should set an array element', () => {
    const obj = { f: [] };
    set(obj, 'f[0]', 4);
    expect(obj).toEqual({ f: [4] });
  });

  test('should set a nested property within an array element', () => {
    const obj = { f: [{}] };
    set(obj, 'f[0].g', 5);
    expect(obj).toEqual({ f: [{ g: 5 }] });
  });

  test('should create intermediate arrays when setting array elements', () => {
    const obj = {};
    set(obj, 'f[2].g', 6);
    expect(obj).toEqual({ f: [undefined, undefined, { g: 6 }] });
  });

  test('should overwrite existing values', () => {
    const obj = { a: 1 };
    set(obj, 'a', 10);
    expect(obj).toEqual({ a: 10 });
  });

  test('should handle null or undefined objects gracefully', () => {
    let obj = null;
    expect(set(obj, 'a', 1)).toBeNull();
    obj = undefined;
    expect(set(obj, 'a', 1)).toBeUndefined();
  });

  test('should return the original object', () => {
    const obj = {};
    const result = set(obj, 'a', 1);
    expect(result).toBe(obj);
  });

  test('should handle empty path', () => {
    const obj = { a: 1 };
    set(obj, '', 2);
    expect(obj).toEqual({ a: 1 }); // Should not modify for empty path
  });

  test('should handle array path', () => {
    const obj = {};
    set(obj, ['a', 'b'], 1);
    expect(obj).toEqual({ a: { b: 1 } });
  });
});
