const { deepClone } = require('./object-deep-clone-utils');

describe('deepClone', () => {
  it('should clone primitive values', () => {
    expect(deepClone(1)).toBe(1);
    expect(deepClone('string')).toBe('string');
    expect(deepClone(true)).toBe(true);
    expect(deepClone(null)).toBeNull();
    expect(deepClone(undefined)).toBeUndefined();
  });

  it('should clone a simple object', () => {
    const obj = { a: 1, b: 'hello' };
    const clonedObj = deepClone(obj);
    expect(clonedObj).toEqual(obj);
    expect(clonedObj).not.toBe(obj);
  });

  it('should clone a nested object', () => {
    const obj = { a: 1, b: { c: 2 } };
    const clonedObj = deepClone(obj);
    expect(clonedObj).toEqual(obj);
    expect(clonedObj).not.toBe(obj);
    expect(clonedObj.b).not.toBe(obj.b);
  });

  it('should clone an array', () => {
    const arr = [1, 2, { a: 3 }];
    const clonedArr = deepClone(arr);
    expect(clonedArr).toEqual(arr);
    expect(clonedArr).not.toBe(arr);
    expect(clonedArr[2]).not.toBe(arr[2]);
  });

  it('should clone an object containing an array', () => {
    const obj = { a: [1, { b: 2 }] };
    const clonedObj = deepClone(obj);
    expect(clonedObj).toEqual(obj);
    expect(clonedObj).not.toBe(obj);
    expect(clonedObj.a).not.toBe(obj.a);
    expect(clonedObj.a[1]).not.toBe(obj.a[1]);
  });

  it('should handle Date objects', () => {
    const date = new Date();
    const obj = { d: date };
    const clonedObj = deepClone(obj);
    expect(clonedObj.d).toEqual(date);
    expect(clonedObj.d).not.toBe(date);
  });

  it('should handle RegExp objects', () => {
    const regex = /abc/g;
    const obj = { r: regex };
    const clonedObj = deepClone(obj);
    expect(clonedObj.r).toEqual(regex);
    expect(clonedObj.r).not.toBe(regex);
  });

  it('should handle circular references', () => {
    const obj = {};
    obj.a = obj;
    const clonedObj = deepClone(obj);
    expect(clonedObj).toEqual(obj);
    expect(clonedObj).not.toBe(obj);
    expect(clonedObj.a).toBe(clonedObj);
  });

  it('should handle complex circular references', () => {
    const obj1 = {};
    const obj2 = { ref: obj1 };
    obj1.ref = obj2;

    const clonedObj1 = deepClone(obj1);
    expect(clonedObj1).toEqual(obj1);
    expect(clonedObj1).not.toBe(obj1);
    expect(clonedObj1.ref).not.toBe(obj1.ref);
    expect(clonedObj1.ref.ref).toBe(clonedObj1);
  });

  it('should not modify the original object', () => {
    const obj = { a: 1, b: { c: 2 } };
    const originalObj = JSON.parse(JSON.stringify(obj)); // Deep copy for comparison
    const clonedObj = deepClone(obj);
    clonedObj.a = 100;
    clonedObj.b.c = 200;
    expect(obj).toEqual(originalObj);
  });
});