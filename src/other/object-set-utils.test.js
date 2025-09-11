import { set } from './object-set-utils';
import { get } from './object-get-utils';

describe('set', () => {
  it('should set a value on a new path', () => {
    const obj = {};
    set(obj, 'a[0].b.c', 100);
    expect(obj.a[0].b.c).toBe(100);
    expect(get(obj, 'a[0].b.c')).toBe(100);
  });

  it('should overwrite an existing value', () => {
    const obj = { a: [{ b: { c: 1 } }] };
    set(obj, 'a[0].b.c', 99);
    expect(get(obj, 'a[0].b.c')).toBe(99);
  });

  it('should create nested arrays and objects as needed', () => {
    const obj = {};
    set(obj, 'a[0].b[1].c', 'hello');
    expect(Array.isArray(obj.a)).toBe(true);
    expect(typeof obj.a[0]).toBe('object');
    expect(Array.isArray(obj.a[0].b)).toBe(true);
    expect(get(obj, 'a[0].b[1].c')).toBe('hello');
  });

  it('should not overwrite existing objects in the path', () => {
    const obj = { a: { x: 'original' } };
    set(obj, 'a.y', 'new');
    expect(get(obj, 'a.x')).toBe('original');
    expect(get(obj, 'a.y')).toBe('new');
  });

  it('should return the modified object', () => {
    const obj = {};
    const result = set(obj, 'a.b', 1);
    expect(result).toBe(obj);
    expect(obj.a.b).toBe(1);
  });

  it('should handle null or undefined objects gracefully', () => {
    expect(set(null, 'a.b', 1)).toBe(null);
    expect(set(undefined, 'a.b', 1)).toBe(undefined);
  });

  it('should use an array path', () => {
    const obj = {};
    set(obj, ['a', '0', 'b'], 'value');
    expect(get(obj, 'a[0].b')).toBe('value');
  });
});
