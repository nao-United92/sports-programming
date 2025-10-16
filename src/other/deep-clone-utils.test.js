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

  test('should clone an object with nested objects', () => {
    const obj = { a: 1, b: { c: 2, d: { e: 3 } } };
    const clonedObj = deepClone(obj);
    expect(clonedObj).toEqual(obj);
    expect(clonedObj).not.toBe(obj);
    expect(clonedObj.b).not.toBe(obj.b);
    expect(clonedObj.b.d).not.toBe(obj.b.d);
  });

  test('should clone an array', () => {
    const arr = [1, 2, 3];
    const clonedArr = deepClone(arr);
    expect(clonedArr).toEqual(arr);
    expect(clonedArr).not.toBe(arr);
  });

  test('should clone an array of objects', () => {
    const arr = [{ a: 1 }, { b: 2 }];
    const clonedArr = deepClone(arr);
    expect(clonedArr).toEqual(arr);
    expect(clonedArr).not.toBe(arr);
    expect(clonedArr[0]).not.toBe(arr[0]);
  });
  
  test('should clone a Date object', () => {
    const date = new Date();
    const clonedDate = deepClone(date);
    expect(clonedDate).toEqual(date);
    expect(clonedDate).not.toBe(date);
  });
});
