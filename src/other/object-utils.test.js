import { pick, omit, deepClone, isEqual } from './object-utils.js';

describe('pick', () => {
  test('should return an object with picked properties', () => {
    const obj = { a: 1, b: '2', c: true };
    expect(pick(obj, ['a', 'c'])).toEqual({ a: 1, c: true });
  });

  test('should return an empty object if keys do not exist', () => {
    const obj = { a: 1, b: '2', c: true };
    expect(pick(obj, ['d', 'e'])).toEqual({});
  });

  test('should return an empty object for null or undefined input', () => {
    expect(pick(null, ['a'])).toEqual({});
    expect(pick(undefined, ['a'])).toEqual({});
  });
});

describe('omit', () => {
  test('should return an object with omitted properties', () => {
    const obj = { a: 1, b: '2', c: true };
    expect(omit(obj, ['a', 'c'])).toEqual({ b: '2' });
  });

  test('should return the original object if keys do not exist', () => {
    const obj = { a: 1, b: '2', c: true };
    expect(omit(obj, ['d', 'e'])).toEqual({ a: 1, b: '2', c: true });
  });

  test('should return an empty object for null or undefined input', () => {
    expect(omit(null, ['a'])).toEqual({});
    expect(omit(undefined, ['a'])).toEqual({});
  });
});

describe('deepClone', () => {
  test('should deep clone a simple object', () => {
    const obj = { a: 1, b: { c: 2 } };
    const clonedObj = deepClone(obj);
    expect(clonedObj).toEqual(obj);
    expect(clonedObj).not.toBe(obj);
    expect(clonedObj.b).not.toBe(obj.b);
  });

  test('should deep clone an array', () => {
    const arr = [1, { a: 2 }, [3, 4]];
    const clonedArr = deepClone(arr);
    expect(clonedArr).toEqual(arr);
    expect(clonedArr).not.toBe(arr);
    expect(clonedArr[1]).not.toBe(arr[1]);
    expect(clonedArr[2]).not.toBe(arr[2]);
  });

  test('should handle null and non-object values', () => {
    expect(deepClone(null)).toBeNull();
    expect(deepClone(123)).toBe(123);
    expect(deepClone('string')).toBe('string');
  });
});

describe('isEqual', () => {
  test('should return true for deeply equal objects', () => {
    const obj1 = { a: 1, b: { c: 2 } };
    const obj2 = { a: 1, b: { c: 2 } };
    expect(isEqual(obj1, obj2)).toBe(true);
  });

  test('should return false for deeply unequal objects', () => {
    const obj1 = { a: 1, b: { c: 2 } };
    const obj2 = { a: 1, b: { c: 3 } };
    expect(isEqual(obj1, obj2)).toBe(false);
  });

  test('should return true for deeply equal arrays', () => {
    const arr1 = [1, { a: 2 }, [3, 4]];
    const arr2 = [1, { a: 2 }, [3, 4]];
    expect(isEqual(arr1, arr2)).toBe(true);
  });

  test('should return false for deeply unequal arrays', () => {
    const arr1 = [1, { a: 2 }, [3, 4]];
    const arr2 = [1, { a: 2 }, [3, 5]];
    expect(isEqual(arr1, arr2)).toBe(false);
  });

  test('should handle different types', () => {
    expect(isEqual(1, '1')).toBe(false);
    expect(isEqual({}, [])).toBe(false);
  });

  test('should handle null and undefined', () => {
    expect(isEqual(null, null)).toBe(true);
    expect(isEqual(undefined, undefined)).toBe(true);
    expect(isEqual(null, undefined)).toBe(false);
  });
});
