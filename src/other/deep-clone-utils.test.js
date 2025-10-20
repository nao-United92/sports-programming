import { deepClone } from './deep-clone-utils';

describe('deepClone', () => {
  it('should clone primitive values', () => {
    expect(deepClone(1)).toBe(1);
    expect(deepClone('hello')).toBe('hello');
    expect(deepClone(true)).toBe(true);
    expect(deepClone(null)).toBe(null);
    expect(deepClone(undefined)).toBe(undefined);
  });

  it('should clone a flat object', () => {
    const obj = { a: 1, b: 'test' };
    const cloned = deepClone(obj);
    expect(cloned).toEqual(obj);
    expect(cloned).not.toBe(obj);
  });

  it('should clone an object with nested objects', () => {
    const obj = { a: 1, b: { c: 2, d: { e: 3 } } };
    const cloned = deepClone(obj);
    expect(cloned).toEqual(obj);
    expect(cloned).not.toBe(obj);
    expect(cloned.b).not.toBe(obj.b);
    expect(cloned.b.d).not.toBe(obj.b.d);
  });

  it('should clone an array with primitives', () => {
    const arr = [1, 2, 3];
    const cloned = deepClone(arr);
    expect(cloned).toEqual(arr);
    expect(cloned).not.toBe(arr);
  });

  it('should clone an array with objects', () => {
    const arr = [{ a: 1 }, { b: 2 }];
    const cloned = deepClone(arr);
    expect(cloned).toEqual(arr);
    expect(cloned).not.toBe(arr);
    expect(cloned[0]).not.toBe(arr[0]);
    expect(cloned[1]).not.toBe(arr[1]);
  });

  it('should clone a complex object with arrays and nested objects', () => {
    const obj = {
      a: [1, { b: 2 }],
      c: { d: [3, 4] },
      e: 5
    };
    const cloned = deepClone(obj);
    expect(cloned).toEqual(obj);
    expect(cloned).not.toBe(obj);
    expect(cloned.a).not.toBe(obj.a);
    expect(cloned.a[1]).not.toBe(obj.a[1]);
    expect(cloned.c).not.toBe(obj.c);
    expect(cloned.c.d).not.toBe(obj.c.d);
  });
});