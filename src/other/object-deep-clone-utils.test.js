const { deepClone } = require('./object-deep-clone-utils');

describe('deepClone', () => {
  test('should deep clone a simple object', () => {
    const obj = { a: 1, b: 'hello' };
    const clonedObj = deepClone(obj);
    expect(clonedObj).toEqual(obj);
    expect(clonedObj).not.toBe(obj);
  });

  test('should deep clone nested objects', () => {
    const obj = { a: 1, b: { c: 2, d: { e: 3 } } };
    const clonedObj = deepClone(obj);
    expect(clonedObj).toEqual(obj);
    expect(clonedObj).not.toBe(obj);
    expect(clonedObj.b).not.toBe(obj.b);
    expect(clonedObj.b.d).not.toBe(obj.b.d);
  });

  test('should deep clone arrays', () => {
    const arr = [1, { a: 2 }, [3, 4]];
    const clonedArr = deepClone(arr);
    expect(clonedArr).toEqual(arr);
    expect(clonedArr).not.toBe(arr);
    expect(clonedArr[1]).not.toBe(arr[1]);
    expect(clonedArr[2]).not.toBe(arr[2]);
  });

  test('should deep clone arrays containing objects', () => {
    const arr = [{ a: 1 }, { b: 2 }];
    const clonedArr = deepClone(arr);
    expect(clonedArr).toEqual(arr);
    expect(clonedArr).not.toBe(arr);
    expect(clonedArr[0]).not.toBe(arr[0]);
  });

  test('should handle null and undefined', () => {
    expect(deepClone(null)).toBeNull();
    expect(deepClone(undefined)).toBeUndefined();
  });

  test('should handle primitive values', () => {
    expect(deepClone(123)).toBe(123);
    expect(deepClone('string')).toBe('string');
    expect(deepClone(true)).toBe(true);
  });

  test('should handle Date objects', () => {
    const date = new Date();
    const clonedDate = deepClone(date);
    expect(clonedDate).toEqual(date);
    expect(clonedDate).not.toBe(date);
  });

  test('should handle RegExp objects', () => {
    const regex = /abc/g;
    const clonedRegex = deepClone(regex);
    expect(clonedRegex).toEqual(regex);
    expect(clonedRegex).not.toBe(regex);
  });
});