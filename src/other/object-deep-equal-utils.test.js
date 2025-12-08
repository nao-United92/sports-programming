const deepEqual = require('./object-deep-equal-utils');

describe('deepEqual', () => {
  test('should return true for identical primitives', () => {
    expect(deepEqual(1, 1)).toBe(true);
    expect(deepEqual('a', 'a')).toBe(true);
    expect(deepEqual(true, true)).toBe(true);
    expect(deepEqual(null, null)).toBe(true);
    expect(deepEqual(undefined, undefined)).toBe(true);
  });

  test('should return false for different primitives', () => {
    expect(deepEqual(1, 2)).toBe(false);
    expect(deepEqual('a', 'b')).toBe(false);
    expect(deepEqual(true, false)).toBe(false);
    expect(deepEqual(null, undefined)).toBe(false);
    expect(deepEqual(1, '1')).toBe(false);
  });

  test('should return true for identical flat objects', () => {
    const obj1 = { a: 1, b: '2' };
    const obj2 = { a: 1, b: '2' };
    const obj3 = { b: '2', a: 1 }; // Order shouldn't matter
    expect(deepEqual(obj1, obj2)).toBe(true);
    expect(deepEqual(obj1, obj3)).toBe(true);
  });

  test('should return false for different flat objects', () => {
    const obj1 = { a: 1, b: '2' };
    const obj2 = { a: 1, c: '2' };
    const obj3 = { a: 1, b: '3' };
    const obj4 = { a: 1 };
    expect(deepEqual(obj1, obj2)).toBe(false);
    expect(deepEqual(obj1, obj3)).toBe(false);
    expect(deepEqual(obj1, obj4)).toBe(false);
  });
  
  test('should return true for identical nested objects', () => {
    const obj1 = { a: { b: 2 }, c: 3 };
    const obj2 = { a: { b: 2 }, c: 3 };
    expect(deepEqual(obj1, obj2)).toBe(true);
  });
  
  test('should return false for different nested objects', () => {
    const obj1 = { a: { b: 2 }, c: 3 };
    const obj2 = { a: { b: 99 }, c: 3 };
    expect(deepEqual(obj1, obj2)).toBe(false);
  });

  test('should return true for identical arrays', () => {
    const arr1 = [1, '2', { a: 3 }];
    const arr2 = [1, '2', { a: 3 }];
    expect(deepEqual(arr1, arr2)).toBe(true);
  });

  test('should return false for different arrays', () => {
    const arr1 = [1, '2', { a: 3 }];
    const arr2 = [1, '2', { a: 4 }];
    const arr3 = [1, '2'];
    expect(deepEqual(arr1, arr2)).toBe(false);
    expect(deepEqual(arr1, arr3)).toBe(false);
  });

  test('should return false when comparing object and array', () => {
    expect(deepEqual({ '0': 1, '1': 2 }, [1, 2])).toBe(false);
  });
});
