
import { deepClone } from './data-deep-clone-utils';

describe('deepClone', () => {
  // Test primitive values
  test('should clone primitive values directly', () => {
    expect(deepClone(1)).toBe(1);
    expect(deepClone('hello')).toBe('hello');
    expect(deepClone(true)).toBe(true);
    expect(deepClone(null)).toBe(null);
    expect(deepClone(undefined)).toBe(undefined);
  });

  // Test simple objects
  test('should deep clone simple objects', () => {
    const obj = { a: 1, b: 'test' };
    const clonedObj = deepClone(obj);
    expect(clonedObj).toEqual(obj);
    expect(clonedObj).not.toBe(obj);
  });

  // Test nested objects
  test('should deep clone nested objects', () => {
    const obj = { a: 1, b: { c: 2, d: 'nested' } };
    const clonedObj = deepClone(obj);
    expect(clonedObj).toEqual(obj);
    expect(clonedObj).not.toBe(obj);
    expect(clonedObj.b).not.toBe(obj.b);
  });

  // Test arrays
  test('should deep clone arrays', () => {
    const arr = [1, 2, { a: 3 }];
    const clonedArr = deepClone(arr);
    expect(clonedArr).toEqual(arr);
    expect(clonedArr).not.toBe(arr);
    expect(clonedArr[2]).not.toBe(arr[2]);
  });

  // Test Date objects
  test('should clone Date objects', () => {
    const date = new Date();
    const clonedDate = deepClone(date);
    expect(clonedDate).toEqual(date);
    expect(clonedDate).not.toBe(date);
  });

  // Test RegExp objects
  test('should clone RegExp objects', () => {
    const regex = /abc/i;
    const clonedRegex = deepClone(regex);
    expect(clonedRegex).toEqual(regex);
    expect(clonedRegex).not.toBe(regex);
  });

  // Test circular references
  test('should handle circular references', () => {
    const obj = {};
    obj.a = obj;
    const clonedObj = deepClone(obj);
    expect(clonedObj).toEqual(obj);
    expect(clonedObj).not.toBe(obj);
    expect(clonedObj.a).toBe(clonedObj);
  });

  test('should handle more complex circular references', () => {
    const obj1 = {};
    const obj2 = { ref: obj1 };
    obj1.ref = obj2;

    const clonedObj1 = deepClone(obj1);
    expect(clonedObj1).toEqual(obj1);
    expect(clonedObj1).not.toBe(obj1);
    expect(clonedObj1.ref).not.toBe(obj1.ref);
    expect(clonedObj1.ref.ref).toBe(clonedObj1);
  });

  // Test with mixed types
  test('should deep clone mixed types', () => {
    const original = {
      str: 'hello',
      num: 123,
      bool: true,
      arr: [1, { x: 10 }],
      obj: { key: 'value', date: new Date() },
      regex: /test/g,
    };
    const cloned = deepClone(original);

    expect(cloned).toEqual(original);
    expect(cloned).not.toBe(original);
    expect(cloned.arr).not.toBe(original.arr);
    expect(cloned.arr[1]).not.toBe(original.arr[1]);
    expect(cloned.obj).not.toBe(original.obj);
    expect(cloned.obj.date).not.toBe(original.obj.date);
    expect(cloned.regex).not.toBe(original.regex);
  });
});
