import { set } from './object-set-utils';

describe('set', () => {
  test('should set a value on a new path', () => {
    const obj = {};
    set(obj, 'a.b.c', 10);
    expect(obj.a.b.c).toBe(10);
  });

  test('should set a value on an existing path', () => {
    const obj = { a: { b: { c: 1 } } };
    set(obj, 'a.b.c', 2);
    expect(obj.a.b.c).toBe(2);
  });

  test('should create arrays for numeric keys', () => {
    const obj = {};
    set(obj, 'a[0].b', 'hello');
    expect(Array.isArray(obj.a)).toBe(true);
    expect(obj.a[0].b).toBe('hello');
  });

  test('should not overwrite existing objects/arrays unless necessary', () => {
    const obj = { a: [{ b: 1 }] };
    set(obj, 'a[0].c', 2);
    expect(obj.a[0].b).toBe(1);
    expect(obj.a[0].c).toBe(2);
  });

  test('should return the modified object', () => {
    const obj = {};
    const result = set(obj, 'a.b', 1);
    expect(result).toBe(obj);
    expect(result.a.b).toBe(1);
  });

  test('should handle non-object inputs gracefully', () => {
    expect(set(null, 'a.b', 1)).toBe(null);
    expect(set(undefined, 'a.b', 1)).toBe(undefined);
    expect(set(123, 'a.b', 1)).toBe(123);
  });
});
