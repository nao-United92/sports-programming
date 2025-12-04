import { get, set } from './object-path-utils.js';

describe('get', () => {
  const obj = { a: { b: { c: 100, d: [1, 2] } }, e: 200 };

  it('should get a value using a string path', () => {
    expect(get(obj, 'a.b.c')).toBe(100);
  });

  it('should get a value using an array path', () => {
    expect(get(obj, ['a', 'b', 'c'])).toBe(100);
  });

  it('should get an array element using a path', () => {
    expect(get(obj, 'a.b.d[1]')).toBe(2);
  });

  it('should return a default value for non-existent paths', () => {
    expect(get(obj, 'a.x.y', 'default')).toBe('default');
  });

  it('should return undefined for non-existent paths without a default value', () => {
    expect(get(obj, 'a.x.y')).toBeUndefined();
  });

  it('should handle null and undefined objects', () => {
    expect(get(null, 'a.b')).toBeUndefined();
    expect(get(undefined, 'a.b', 'default')).toBe('default');
  });
});

describe('set', () => {
  it('should set a value on a new path', () => {
    const obj = {};
    set(obj, 'a.b.c', 100);
    expect(obj).toEqual({ a: { b: { c: 100 } } });
  });

  it('should set a value on an existing path', () => {
    const obj = { a: { b: { c: 1 } } };
    set(obj, 'a.b.c', 2);
    expect(obj).toEqual({ a: { b: { c: 2 } } });
  });

  it('should create arrays for numeric keys', () => {
    const obj = {};
    set(obj, 'a.0.b', 'test');
    expect(obj).toEqual({ a: [{ b: 'test' }] });
  });

  it('should not modify the object if it is not an object', () => {
    const val = null;
    expect(set(val, 'a.b', 1)).toBeNull();
  });

  it('should handle setting a root property', () => {
    const obj = {};
    set(obj, 'a', 1);
    expect(obj).toEqual({ a: 1 });
  });
});