const deepClone = require('./object-deep-clone-utils');

describe('deepClone', () => {
  test('should clone primitive values', () => {
    expect(deepClone(123)).toBe(123);
    expect(deepClone('hello')).toBe('hello');
    expect(deepClone(true)).toBe(true);
    expect(deepClone(null)).toBe(null);
    expect(deepClone(undefined)).toBe(undefined);
  });

  test('should clone a simple object', () => {
    const obj = {
      a: 1,
      b: 'test'
    };
    const clonedObj = deepClone(obj);
    expect(clonedObj).toEqual(obj);
    expect(clonedObj).not.toBe(obj);
  });

  test('should clone an object with nested objects', () => {
    const obj = {
      a: 1,
      b: {
        c: 2
      }
    };
    const clonedObj = deepClone(obj);
    expect(clonedObj).toEqual(obj);
    expect(clonedObj).not.toBe(obj);
    expect(clonedObj.b).not.toBe(obj.b); // Nested object should also be cloned
  });

  test('should clone an array', () => {
    const arr = [1, 2, 3];
    const clonedArr = deepClone(arr);
    expect(clonedArr).toEqual(arr);
    expect(clonedArr).not.toBe(arr);
  });

  test('should clone an array with nested arrays/objects', () => {
    const arr = [1, {
      a: 2
    },
      [3, 4]
    ];
    const clonedArr = deepClone(arr);
    expect(clonedArr).toEqual(arr);
    expect(clonedArr).not.toBe(arr);
    expect(clonedArr[1]).not.toBe(arr[1]);
    expect(clonedArr[2]).not.toBe(arr[2]);
  });

  test('should handle Date objects', () => {
    const date = new Date();
    const clonedDate = deepClone(date);
    expect(clonedDate).toEqual(date);
    expect(clonedDate).not.toBe(date);
  });

  test('should handle RegExp objects', () => {
    const regex = /abc/g;
    const clonedRegex = deepClone(regex);
    expect(clonedRegex).toEqual(regex);
    expect(clonedRegex).not.toBe(regex);
  });

  test('should handle circular references', () => {
    const obj = {};
    obj.a = obj; // Circular reference
    const clonedObj = deepClone(obj);
    expect(clonedObj).toEqual(obj);
    expect(clonedObj).not.toBe(obj);
    expect(clonedObj.a).toBe(clonedObj); // Cloned object should also have circular reference
  });

  test('should handle complex mixed data types', () => {
    const obj = {
      a: 1,
      b: 'string',
      c: true,
      d: null,
      e: undefined,
      f: [1, {
        g: new Date()
      },
        /xyz/
      ],
      h: {
        i: [1, 2],
        j: {
          k: 3
        }
      }
    };
    obj.h.l = obj; // Add a circular reference
    const clonedObj = deepClone(obj);
    expect(clonedObj).toEqual(obj);
    expect(clonedObj).not.toBe(obj);
    expect(clonedObj.f[1]).not.toBe(obj.f[1]);
    expect(clonedObj.f[1].g).not.toBe(obj.f[1].g);
    expect(clonedObj.h.l).toBe(clonedObj);
  });
});
