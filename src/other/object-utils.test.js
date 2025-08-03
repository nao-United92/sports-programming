import { clone, hasCircularReference, isPlainObject } from './object-utils';

describe('clone', () => {
  test('should shallow clone a simple object', () => {
    const obj = { a: 1, b: { c: 2 } };
    const clonedObj = clone(obj);
    expect(clonedObj).toEqual(obj);
    expect(clonedObj).not.toBe(obj);
    expect(clonedObj.b).toBe(obj.b); // Shallow clone, so nested objects are same reference
  });

  test('should shallow clone an array', () => {
    const arr = [1, { a: 2 }, [3, 4]];
    const clonedArr = clone(arr);
    expect(clonedArr).toEqual(arr);
    expect(clonedArr).not.toBe(arr);
    expect(clonedArr[1]).toBe(arr[1]); // Shallow clone, so nested objects are same reference
    expect(clonedArr[2]).toBe(arr[2]); // Shallow clone, so nested arrays are same reference
  });

  test('should handle null and non-object values', () => {
    expect(clone(null)).toBe(null);
    expect(clone(123)).toBe(123);
    expect(clone('string')).toBe('string');
  });
});

describe('hasCircularReference', () => {
  test('should return false for an object with no circular reference', () => {
    const obj = { a: 1, b: { c: 2 } };
    expect(hasCircularReference(obj)).toBe(false);
  });

  test('should return true for an object with a direct circular reference', () => {
    const obj = {};
    obj.a = obj;
    expect(hasCircularReference(obj)).toBe(true);
  });

  test('should return true for an object with a nested circular reference', () => {
    const obj = {};
    const obj2 = { a: obj };
    obj.b = obj2;
    expect(hasCircularReference(obj)).toBe(true);
  });

  test('should return false for an object with repeated but not circular references', () => {
    const common = { x: 1 };
    const obj = { a: common, b: common };
    expect(hasCircularReference(obj)).toBe(false);
  });

  test('should handle arrays with circular references', () => {
    const arr = [];
    arr.push(arr);
    expect(hasCircularReference(arr)).toBe(true);
  });

  test('should handle null and non-object values', () => {
    expect(hasCircularReference(null)).toBe(false);
    expect(hasCircularReference(123)).toBe(false);
    expect(hasCircularReference('string')).toBe(false);
  });

  test('should handle objects with Date and RegExp objects', () => {
    const obj = { d: new Date(), r: new RegExp('abc') };
    expect(hasCircularReference(obj)).toBe(false);
  });
});

describe('isPlainObject', () => {
  test('should return true for a plain object', () => {
    expect(isPlainObject({})).toBe(true);
    expect(isPlainObject(new Object())).toBe(true);
  });

  test('should return false for an array', () => {
    expect(isPlainObject([])).toBe(false);
  });

  test('should return false for null', () => {
    expect(isPlainObject(null)).toBe(false);
  });

  test('should return false for functions', () => {
    expect(isPlainObject(() => {})).toBe(false);
  });

  test('should return false for class instances', () => {
    class MyClass {}
    expect(isPlainObject(new MyClass())).toBe(false);
  });

  test('should return false for other types', () => {
    expect(isPlainObject(1)).toBe(false);
    expect(isPlainObject('string')).toBe(false);
    expect(isPlainObject(true)).toBe(false);
    expect(isPlainObject(undefined)).toBe(false);
  });
});