import { isObject, isEmptyObject, deepClone } from './object-utils.js';

describe('isObject', () => {
  test('should return true for plain objects', () => {
    expect(isObject({})).toBe(true);
    expect(isObject({ a: 1 })).toBe(true);
  });

  test('should return false for non-objects', () => {
    expect(isObject(null)).toBe(false);
    expect(isObject(undefined)).toBe(false);
    expect(isObject('string')).toBe(false);
    expect(isObject(123)).toBe(false);
    expect(isObject(true)).toBe(false);
    expect(isObject(() => {})).toBe(false);
  });

  test('should return false for arrays', () => {
    expect(isObject([])).toBe(false);
    expect(isObject([1, 2])).toBe(false);
  });
});

describe('isEmptyObject', () => {
  test('should return true for empty objects', () => {
    expect(isEmptyObject({})).toBe(true);
  });

  test('should return false for non-empty objects', () => {
    expect(isEmptyObject({ a: 1 })).toBe(false);
  });

  test('should return true for non-objects', () => {
    expect(isEmptyObject(null)).toBe(true);
    expect(isEmptyObject(undefined)).toBe(true);
    expect(isEmptyObject([])).toBe(true);
    expect(isEmptyObject(42)).toBe(true);
  });
});

describe('deepClone', () => {
  test('should clone primitive values', () => {
    expect(deepClone(123)).toBe(123);
    expect(deepClone('hello')).toBe('hello');
    expect(deepClone(null)).toBe(null);
    expect(deepClone(undefined)).toBe(undefined);
  });

  test('should perform a deep clone of a simple object', () => {
    const obj = { a: 1, b: 'test' };
    const clonedObj = deepClone(obj);
    expect(clonedObj).toEqual(obj);
    expect(clonedObj).not.toBe(obj);
  });

  test('should perform a deep clone of a nested object', () => {
    const obj = { a: { b: { c: 1 } }, d: [1, 2] };
    const clonedObj = deepClone(obj);
    expect(clonedObj).toEqual(obj);
    expect(clonedObj).not.toBe(obj);
    expect(clonedObj.a).not.toBe(obj.a);
    expect(clonedObj.a.b).not.toBe(obj.a.b);
    expect(clonedObj.d).not.toBe(obj.d);
  });

  test('should handle arrays correctly', () => {
    const arr = [1, { a: 2 }, [3]];
    const clonedArr = deepClone(arr);
    expect(clonedArr).toEqual(arr);
    expect(clonedArr).not.toBe(arr);
    expect(clonedArr[1]).not.toBe(arr[1]);
    expect(clonedArr[2]).not.toBe(arr[2]);
  });

  test('should handle dates correctly', () => {
    const date = new Date();
    const clonedDate = deepClone(date);
    expect(clonedDate).toEqual(date);
    expect(clonedDate).not.toBe(date);
  });
});