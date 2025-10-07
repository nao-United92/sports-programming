import { deepClone } from './object-deep-clone-utils.js';

describe('deepClone', () => {
  test('should clone a simple object', () => {
    const obj = { a: 1, b: 'hello' };
    const cloned = deepClone(obj);
    expect(cloned).toEqual(obj);
    expect(cloned).not.toBe(obj);
  });

  test('should clone an object with nested objects and arrays', () => {
    const obj = {
      a: 1,
      b: { c: 2, d: [3, 4] },
      e: [{ f: 5 }, { g: 6 }],
    };
    const cloned = deepClone(obj);
    expect(cloned).toEqual(obj);
    expect(cloned).not.toBe(obj);
    expect(cloned.b).not.toBe(obj.b);
    expect(cloned.e[0]).not.toBe(obj.e[0]);
  });

  test('should clone an object with a Date', () => {
    const date = new Date();
    const obj = { a: date };
    const cloned = deepClone(obj);
    expect(cloned.a.getTime()).toBe(date.getTime());
    expect(cloned.a).not.toBe(date);
  });

  test('should clone an array', () => {
    const arr = [1, [2, 3], { a: 4 }];
    const cloned = deepClone(arr);
    expect(cloned).toEqual(arr);
    expect(cloned).not.toBe(arr);
    expect(cloned[1]).not.toBe(arr[1]);
    expect(cloned[2]).not.toBe(arr[2]);
  });

  test('should return primitives and null as is', () => {
    expect(deepClone(123)).toBe(123);
    expect(deepClone('hello')).toBe('hello');
    expect(deepClone(null)).toBe(null);
    expect(deepClone(undefined)).toBe(undefined);
  });
});