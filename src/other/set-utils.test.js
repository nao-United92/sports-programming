import { set } from './set-utils.js';

describe('set', () => {
  it('should set a value at a given path in an object', () => {
    const obj = {};
    set(obj, 'a.b.c', 1);
    expect(obj).toEqual({ a: { b: { c: 1 } } });
  });

  it('should set a value at a given array path in an object', () => {
    const obj = {};
    set(obj, ['a', '0', 'b'], 2);
    expect(obj).toEqual({ a: [{ b: 2 }] });
  });

  it('should overwrite an existing value', () => {
    const obj = { a: { b: { c: 1 } } };
    set(obj, 'a.b.c', 2);
    expect(obj).toEqual({ a: { b: { c: 2 } } });
  });

  it('should create arrays for integer-indexed properties', () => {
    const obj = {};
    set(obj, 'a.0.b', 1);
    expect(obj).toEqual({ a: [{ b: 1 }] });
  });

  it('should return the modified object', () => {
    const obj = {};
    const result = set(obj, 'a.b', 1);
    expect(result).toBe(obj);
  });

  it('should handle paths with mixed dot and bracket notation', () => {
    const obj = {};
    set(obj, 'a[0].b.c', 1);
    expect(obj).toEqual({ a: [{ b: { c: 1 } }] });
  });
});