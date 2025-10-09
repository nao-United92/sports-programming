import { deepClone } from './object-clone-utils';

describe('deepClone', () => {
  it('should create a deep clone of a simple object', () => {
    const obj = { a: 1, b: 'hello' };
    const clonedObj = deepClone(obj);
    expect(clonedObj).toEqual(obj);
    expect(clonedObj).not.toBe(obj);
  });

  it('should create a deep clone of an object with nested objects', () => {
    const obj = { a: 1, b: { c: 2, d: 'world' } };
    const clonedObj = deepClone(obj);
    expect(clonedObj).toEqual(obj);
    expect(clonedObj.b).not.toBe(obj.b);
  });

  it('should create a deep clone of an object with arrays', () => {
    const obj = { a: [1, 2, 3], b: 'test' };
    const clonedObj = deepClone(obj);
    expect(clonedObj).toEqual(obj);
    expect(clonedObj.a).not.toBe(obj.a);
  });

  it('should create a deep clone of an array of objects', () => {
    const arr = [{ a: 1 }, { b: 2 }];
    const clonedArr = deepClone(arr);
    expect(clonedArr).toEqual(arr);
    expect(clonedArr[0]).not.toBe(arr[0]);
  });

  it('should handle null and primitive values', () => {
    expect(deepClone(null)).toBeNull();
    expect(deepClone(42)).toBe(42);
    expect(deepClone('string')).toBe('string');
  });

  it('should handle dates', () => {
    const date = new Date();
    const clonedDate = deepClone(date);
    expect(clonedDate.getTime()).toBe(date.getTime());
    expect(clonedDate).not.toBe(date);
  });
});
