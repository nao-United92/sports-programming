// other/practice/array-unique-deep-utils.test.js

const arrayUniqueDeep = require('./array-unique-deep-utils');

describe('arrayUniqueDeep', () => {
  test('should return unique elements from an array with primitive values', () => {
    const arr = [1, 2, 2, 3, 1, 4];
    expect(arrayUniqueDeep(arr)).toEqual([1, 2, 3, 4]);
  });

  test('should return unique elements from an array with object values (deep comparison)', () => {
    const obj1 = { a: 1, b: 'hello' };
    const obj2 = { a: 1, b: 'hello' };
    const obj3 = { a: 2, b: 'world' };
    const arr = [obj1, obj2, obj3, obj1];
    expect(arrayUniqueDeep(arr)).toEqual([obj1, obj3]);
  });

  test('should return unique elements from an array with nested arrays (deep comparison)', () => {
    const arr1 = [1, [2, 3]];
    const arr2 = [1, [2, 3]];
    const arr3 = [1, [2, 4]];
    const arr = [arr1, arr2, arr3];
    expect(arrayUniqueDeep(arr)).toEqual([arr1, arr3]);
  });

  test('should handle empty arrays', () => {
    expect(arrayUniqueDeep([])).toEqual([]);
  });

  test('should handle arrays with mixed primitive and object values', () => {
    const obj1 = { id: 1 };
    const obj2 = { id: 1 };
    const obj3 = { id: 2 };
    const arr = [1, 'hello', obj1, 1, 'world', obj2, obj3];
    expect(arrayUniqueDeep(arr)).toEqual([1, 'hello', obj1, 'world', obj3]);
  });

  test('should distinguish between objects with different key order but same content', () => {
    const obj1 = { a: 1, b: 2 };
    const obj2 = { b: 2, a: 1 };
    const obj3 = { c: 3, d: 4 };
    const arr = [obj1, obj2, obj3];
    expect(arrayUniqueDeep(arr)).toEqual([obj1, obj3]);
  });

  test('should handle arrays with null and undefined values', () => {
    const arr = [1, null, 2, undefined, null, 3];
    expect(arrayUniqueDeep(arr)).toEqual([1, null, 2, undefined, 3]);
  });
});