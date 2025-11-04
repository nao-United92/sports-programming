import { cloneDeep } from './object-clone-deep-utils.js';

describe('cloneDeep', () => {
  test('should clone primitives', () => {
    expect(cloneDeep(1)).toBe(1);
    expect(cloneDeep('hello')).toBe('hello');
    expect(cloneDeep(null)).toBe(null);
    expect(cloneDeep(undefined)).toBe(undefined);
  });

  test('should clone a simple object', () => {
    const obj = { a: 1, b: 'test' };
    const cloned = cloneDeep(obj);
    expect(cloned).toEqual(obj);
    expect(cloned).not.toBe(obj);
  });

  test('should clone an array', () => {
    const arr = [1, 'a', { b: 2 }];
    const cloned = cloneDeep(arr);
    expect(cloned).toEqual(arr);
    expect(cloned).not.toBe(arr);
    expect(cloned[2]).not.toBe(arr[2]);
  });

  test('should clone a nested object', () => {
    const obj = { a: { b: { c: 1 } }, d: [1, 2] };
    const cloned = cloneDeep(obj);
    expect(cloned).toEqual(obj);
    expect(cloned).not.toBe(obj);
    expect(cloned.a).not.toBe(obj.a);
    expect(cloned.a.b).not.toBe(obj.a.b);
    expect(cloned.d).not.toBe(obj.d);
  });

  test('should clone a Date object', () => {
    const date = new Date();
    const cloned = cloneDeep(date);
    expect(cloned).toEqual(date);
    expect(cloned).not.toBe(date);
    expect(cloned.getTime()).toBe(date.getTime());
  });
});