import { deepClone } from './object-clone-utils.js';

describe('deepClone', () => {
  it('should clone primitives', () => {
    expect(deepClone(1)).toBe(1);
    expect(deepClone('hello')).toBe('hello');
    expect(deepClone(true)).toBe(true);
    expect(deepClone(null)).toBeNull();
    expect(deepClone(undefined)).toBeUndefined();
  });

  it('should clone a flat object', () => {
    const obj = { a: 1, b: 'test' };
    const cloned = deepClone(obj);
    expect(cloned).toEqual(obj);
    expect(cloned).not.toBe(obj);
  });

  it('should clone a nested object', () => {
    const obj = { a: 1, b: { c: 2, d: { e: 3 } } };
    const cloned = deepClone(obj);
    expect(cloned).toEqual(obj);
    expect(cloned).not.toBe(obj);
    expect(cloned.b).not.toBe(obj.b);
    expect(cloned.b.d).not.toBe(obj.b.d);
  });

  it('should clone an array', () => {
    const arr = [1, 2, { a: 3 }];
    const cloned = deepClone(arr);
    expect(cloned).toEqual(arr);
    expect(cloned).not.toBe(arr);
    expect(cloned[2]).not.toBe(arr[2]);
  });

  it('should clone a Date object', () => {
    const date = new Date();
    const cloned = deepClone(date);
    expect(cloned).toEqual(date);
    expect(cloned).not.toBe(date);
  });

  it('should clone a RegExp object', () => {
    const regex = /test/gi;
    const cloned = deepClone(regex);
    expect(cloned).toEqual(regex);
    expect(cloned).not.toBe(regex);
  });
});