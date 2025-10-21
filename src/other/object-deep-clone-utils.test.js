const { deepClone } = require('./object-deep-clone-utils.js');

describe('deepClone', () => {
  test('should deep clone a primitive value', () => {
    expect(deepClone(1)).toBe(1);
    expect(deepClone('hello')).toBe('hello');
    expect(deepClone(true)).toBe(true);
    expect(deepClone(null)).toBe(null);
    expect(deepClone(undefined)).toBe(undefined);
  });

  test('should deep clone a shallow object', () => {
    const obj = { a: 1, b: 'hello' };
    const clonedObj = deepClone(obj);
    expect(clonedObj).toEqual(obj);
    expect(clonedObj).not.toBe(obj);
  });

  test('should deep clone a nested object', () => {
    const obj = { a: 1, b: { c: 2, d: [3, 4] } };
    const clonedObj = deepClone(obj);
    expect(clonedObj).toEqual(obj);
    expect(clonedObj).not.toBe(obj);
    expect(clonedObj.b).not.toBe(obj.b);
    expect(clonedObj.b.d).not.toBe(obj.b.d);
  });

  test('should deep clone an array', () => {
    const arr = [1, 2, { a: 3 }];
    const clonedArr = deepClone(arr);
    expect(clonedArr).toEqual(arr);
    expect(clonedArr).not.toBe(arr);
    expect(clonedArr[2]).not.toBe(arr[2]);
  });

  test('should deep clone an array of arrays', () => {
    const arr = [[1, 2], [3, 4]];
    const clonedArr = deepClone(arr);
    expect(clonedArr).toEqual(arr);
    expect(clonedArr).not.toBe(arr);
    expect(clonedArr[0]).not.toBe(arr[0]);
  });

  test('should handle Date objects', () => {
    const date = new Date();
    const obj = { a: date };
    const clonedObj = deepClone(obj);
    expect(clonedObj.a).toEqual(date);
    expect(clonedObj.a).not.toBe(date);
  });

  test('should handle RegExp objects', () => {
    const regex = /abc/gi;
    const obj = { a: regex };
    const clonedObj = deepClone(obj);
    expect(clonedObj.a).toEqual(regex);
    expect(clonedObj.a).not.toBe(regex);
  });

  test('should handle Map objects', () => {
    const map = new Map([['a', 1], ['b', { c: 2 }]]);
    const clonedMap = deepClone(map);
    expect(clonedMap).toEqual(map);
    expect(clonedMap).not.toBe(map);
    expect(clonedMap.get('b')).not.toBe(map.get('b'));
  });

  test('should handle Set objects', () => {
    const set = new Set([1, { a: 2 }]);
    const clonedSet = deepClone(set);
    expect(clonedSet).toEqual(set);
    expect(clonedSet).not.toBe(set);
    // Note: Set values are compared by reference, so deepClone should create new objects for nested objects
    const originalObject = Array.from(set)[1];
    const clonedObject = Array.from(clonedSet)[1];
    expect(clonedObject).toEqual(originalObject);
    expect(clonedObject).not.toBe(originalObject);
  });

  test('should handle circular references', () => {
    const obj = {};
    obj.a = obj;
    const clonedObj = deepClone(obj);
    expect(clonedObj).not.toBe(obj);
    expect(clonedObj.a).toBe(clonedObj); // Circular reference should point to the cloned object
  });

  test('should handle functions and symbols by returning them directly', () => {
    const func = () => {};
    const sym = Symbol('test');
    const obj = { f: func, s: sym };
    const clonedObj = deepClone(obj);
    expect(clonedObj.f).toBe(func);
    expect(clonedObj.s).toBe(sym);
  });
});
