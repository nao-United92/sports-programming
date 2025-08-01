
import { isEqual } from './is-equal-utils.js';

describe('isEqual', () => {
  test('should compare primitive values correctly', () => {
    expect(isEqual(1, 1)).toBe(true);
    expect(isEqual('hello', 'hello')).toBe(true);
    expect(isEqual(true, true)).toBe(true);
    expect(isEqual(1, 2)).toBe(false);
    expect(isEqual('hello', 'world')).toBe(false);
    expect(isEqual(true, false)).toBe(false);
    expect(isEqual(0, null)).toBe(false);
  });

  test('should compare simple objects', () => {
    const obj1 = { a: 1, b: 2 };
    const obj2 = { a: 1, b: 2 };
    const obj3 = { a: 1, b: 3 };
    expect(isEqual(obj1, obj2)).toBe(true);
    expect(isEqual(obj1, obj3)).toBe(false);
  });

  test('should compare nested objects', () => {
    const obj1 = { a: 1, b: { c: 3 } };
    const obj2 = { a: 1, b: { c: 3 } };
    const obj3 = { a: 1, b: { c: 4 } };
    expect(isEqual(obj1, obj2)).toBe(true);
    expect(isEqual(obj1, obj3)).toBe(false);
  });

  test('should compare arrays', () => {
    const arr1 = [1, 2, 3];
    const arr2 = [1, 2, 3];
    const arr3 = [1, 2, 4];
    expect(isEqual(arr1, arr2)).toBe(true);
    expect(isEqual(arr1, arr3)).toBe(false);
  });

  test('should compare arrays of objects', () => {
    const arr1 = [{ a: 1 }, { b: 2 }];
    const arr2 = [{ a: 1 }, { b: 2 }];
    const arr3 = [{ a: 1 }, { b: 3 }];
    expect(isEqual(arr1, arr2)).toBe(true);
    expect(isEqual(arr1, arr3)).toBe(false);
  });

  test('should compare Date objects', () => {
    const date1 = new Date('2020-01-01');
    const date2 = new Date('2020-01-01');
    const date3 = new Date('2021-01-01');
    expect(isEqual(date1, date2)).toBe(true);
    expect(isEqual(date1, date3)).toBe(false);
  });

  test('should compare RegExp objects', () => {
    const regex1 = /abc/g;
    const regex2 = /abc/g;
    const regex3 = /def/g;
    expect(isEqual(regex1, regex2)).toBe(true);
    expect(isEqual(regex1, regex3)).toBe(false);
  });

  test('should handle null and undefined', () => {
    expect(isEqual(null, null)).toBe(true);
    expect(isEqual(undefined, undefined)).toBe(true);
    expect(isEqual(null, undefined)).toBe(false);
    expect(isEqual({}, null)).toBe(false);
  });
});
