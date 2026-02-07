const { deepClone } = require('./object-cloner');

describe('deepClone', () => {
  it('should deep clone a simple object', () => {
    const obj = { a: 1, b: 'hello' };
    const cloned = deepClone(obj);
    expect(cloned).toEqual(obj);
    expect(cloned).not.toBe(obj);
  });

  it('should deep clone an object with nested objects', () => {
    const obj = { a: 1, b: { c: 2, d: { e: 3 } } };
    const cloned = deepClone(obj);
    expect(cloned).toEqual(obj);
    expect(cloned).not.toBe(obj);
    expect(cloned.b).not.toBe(obj.b);
    expect(cloned.b.d).not.toBe(obj.b.d);
  });

  it('should deep clone an array with nested objects/arrays', () => {
    const arr = [1, { a: 2 }, [3, { b: 4 }]];
    const cloned = deepClone(arr);
    expect(cloned).toEqual(arr);
    expect(cloned).not.toBe(arr);
    expect(cloned[1]).not.toBe(arr[1]);
    expect(cloned[2]).not.toBe(arr[2]);
    expect(cloned[2][1]).not.toBe(arr[2][1]);
  });

  it('should handle primitive values', () => {
    expect(deepClone(123)).toBe(123);
    expect(deepClone('string')).toBe('string');
    expect(deepClone(true)).toBe(true);
    expect(deepClone(null)).toBe(null);
    expect(deepClone(undefined)).toBe(undefined);
  });

  it('should handle Date objects', () => {
    const date = new Date();
    const cloned = deepClone(date);
    expect(cloned).toEqual(date);
    expect(cloned).not.toBe(date);
  });

  it('should handle RegExp objects', () => {
    const regex = /abc/g;
    const cloned = deepClone(regex);
    expect(cloned).toEqual(regex);
    expect(cloned).not.toBe(regex);
  });

  it('should handle circular references (simple test, may need more robust solution for complex ones)', () => {
    const obj = {};
    obj.a = obj; // Circular reference
    const cloned = deepClone(obj);
    expect(cloned).toEqual(obj); // This will pass if Jest's toEqual handles circular refs
    expect(cloned).not.toBe(obj);
    expect(cloned.a).toBe(cloned); // The cloned reference should point to itself
  });
});
