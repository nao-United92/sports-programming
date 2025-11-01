import { isEmpty, deepClone, isEqual } from './object-utils.js';

describe('isEmpty', () => {
  test('should return true for null', () => {
    expect(isEmpty(null)).toBe(true);
  });

  test('should return true for undefined', () => {
    expect(isEmpty(undefined)).toBe(true);
  });

  test('should return true for an empty string', () => {
    expect(isEmpty('')).toBe(true);
  });

  test('should return false for a non-empty string', () => {
    expect(isEmpty('hello')).toBe(false);
  });

  test('should return true for an empty array', () => {
    expect(isEmpty([])).toBe(true);
  });

  test('should return false for a non-empty array', () => {
    expect(isEmpty([1, 2])).toBe(false);
  });

  test('should return true for an empty object', () => {
    expect(isEmpty({})).toBe(true);
  });

  test('should return false for a non-empty object', () => {
    expect(isEmpty({ a: 1 })).toBe(false);
  });

  test('should return false for numbers', () => {
    expect(isEmpty(0)).toBe(false);
    expect(isEmpty(123)).toBe(false);
  });

  test('should return false for booleans', () => {
    expect(isEmpty(true)).toBe(false);
    expect(isEmpty(false)).toBe(false);
  });
});

describe('deepClone', () => {
  test('should clone primitive values', () => {
    expect(deepClone(10)).toBe(10);
    expect(deepClone('hello')).toBe('hello');
    expect(deepClone(true)).toBe(true);
    expect(deepClone(null)).toBe(null);
    expect(deepClone(undefined)).toBe(undefined);
  });

  test('should deep clone arrays', () => {
    const arr = [1, { a: 2 }, [3, 4]];
    const clonedArr = deepClone(arr);
    expect(clonedArr).toEqual(arr);
    expect(clonedArr).not.toBe(arr);
    expect(clonedArr[1]).not.toBe(arr[1]);
    expect(clonedArr[2]).not.toBe(arr[2]);
  });

  test('should deep clone objects', () => {
    const obj = { a: 1, b: { c: 2 }, d: [3, { e: 4 }] };
    const clonedObj = deepClone(obj);
    expect(clonedObj).toEqual(obj);
    expect(clonedObj).not.toBe(obj);
    expect(clonedObj.b).not.toBe(obj.b);
    expect(clonedObj.d).not.toBe(obj.d);
    expect(clonedObj.d[1]).not.toBe(obj.d[1]);
  });

  test('should clone Date objects', () => {
    const date = new Date();
    const clonedDate = deepClone(date);
    expect(clonedDate).toEqual(date);
    expect(clonedDate).not.toBe(date);
  });

  test('should clone RegExp objects', () => {
    const regex = /abc/gi;
    const clonedRegex = deepClone(regex);
    expect(clonedRegex).toEqual(regex);
    expect(clonedRegex).not.toBe(regex);
  });

  test('should handle nested objects and arrays', () => {
    const original = {
      a: 1,
      b: 'test',
      c: [1, 2, { d: 3 }],
      e: {
        f: new Date(),
        g: /pattern/,
      },
    };
    const cloned = deepClone(original);

    expect(cloned).toEqual(original);
    expect(cloned).not.toBe(original);
    expect(cloned.c).not.toBe(original.c);
    expect(cloned.c[2]).not.toBe(original.c[2]);
    expect(cloned.e).not.toBe(original.e);
    expect(cloned.e.f).not.toBe(original.e.f);
    expect(cloned.e.g).not.toBe(original.e.g);
  });
});

describe('isEqual', () => {
  test('should return true for identical primitive values', () => {
    expect(isEqual(1, 1)).toBe(true);
    expect(isEqual('a', 'a')).toBe(true);
    expect(isEqual(true, true)).toBe(true);
  });

  test('should return false for different primitive values', () => {
    expect(isEqual(1, 2)).toBe(false);
    expect(isEqual('a', 'b')).toBe(false);
    expect(isEqual(true, false)).toBe(false);
  });

  test('should return true for identical objects', () => {
    const obj1 = { a: 1, b: { c: 2 } };
    const obj2 = { a: 1, b: { c: 2 } };
    expect(isEqual(obj1, obj2)).toBe(true);
  });

  test('should return false for different objects', () => {
    const obj1 = { a: 1, b: { c: 2 } };
    const obj2 = { a: 1, b: { c: 3 } };
    expect(isEqual(obj1, obj2)).toBe(false);
  });

  test('should return true for identical arrays', () => {
    const arr1 = [1, [2, 3]];
    const arr2 = [1, [2, 3]];
    expect(isEqual(arr1, arr2)).toBe(true);
  });

  test('should return false for different arrays', () => {
    const arr1 = [1, [2, 3]];
    const arr2 = [1, [2, 4]];
    expect(isEqual(arr1, arr2)).toBe(false);
  });

  test('should handle null and undefined', () => {
    expect(isEqual(null, null)).toBe(true);
    expect(isEqual(undefined, undefined)).toBe(true);
    expect(isEqual(null, undefined)).toBe(false);
    expect(isEqual({}, null)).toBe(false);
  });

  test('should return true for identical Date objects', () => {
    const date1 = new Date('2020-01-01');
    const date2 = new Date('2020-01-01');
    expect(isEqual(date1, date2)).toBe(true);
  });

  test('should return true for identical RegExp objects', () => {
    const regex1 = /a/g;
    const regex2 = /a/g;
    expect(isEqual(regex1, regex2)).toBe(true);
  });
});
