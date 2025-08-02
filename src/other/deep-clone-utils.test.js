import { deepClone } from './deep-clone-utils.js';

describe('deepClone', () => {
  test('should clone primitive values', () => {
    expect(deepClone(42)).toBe(42);
    expect(deepClone('hello')).toBe('hello');
    expect(deepClone(null)).toBe(null);
    expect(deepClone(undefined)).toBe(undefined);
  });

  test('should clone a flat object', () => {
    const obj = { a: 1, b: 'test' };
    const clonedObj = deepClone(obj);
    expect(clonedObj).toEqual(obj);
    expect(clonedObj).not.toBe(obj);
  });

  test('should clone an object with nested objects and arrays', () => {
    const obj = {
      a: { b: [1, 2, 3] },
      c: [{ d: 4 }],
      e: new Date(),
      f: /test/gi,
    };
    const clonedObj = deepClone(obj);
    expect(clonedObj).toEqual(obj);
    expect(clonedObj).not.toBe(obj);
    expect(clonedObj.a).not.toBe(obj.a);
    expect(clonedObj.c[0]).not.toBe(obj.c[0]);
    expect(clonedObj.e).not.toBe(obj.e);
    expect(clonedObj.f).not.toBe(obj.f);
  });

  test('should clone an array of objects', () => {
    const arr = [{ a: 1 }, { b: 2 }];
    const clonedArr = deepClone(arr);
    expect(clonedArr).toEqual(arr);
    expect(clonedArr).not.toBe(arr);
    expect(clonedArr[0]).not.toBe(arr[0]);
  });

  test('should handle circular references', () => {
    const obj = { a: 1 };
    obj.b = obj; // Circular reference
    const clonedObj = deepClone(obj);

    expect(clonedObj.a).toBe(1);
    expect(clonedObj.b).toBe(clonedObj);
    expect(clonedObj).not.toBe(obj);
  });

  test('should handle Date objects correctly', () => {
    const date = new Date();
    const clonedDate = deepClone(date);
    expect(clonedDate.getTime()).toBe(date.getTime());
    expect(clonedDate).not.toBe(date);
  });

  test('should handle RegExp objects correctly', () => {
    const regexp = /foo/gi;
    const clonedRegexp = deepClone(regexp);
    expect(clonedRegexp.source).toBe(regexp.source);
    expect(clonedRegexp.flags).toBe(regexp.flags);
    expect(clonedRegexp).not.toBe(regexp);
  });
});