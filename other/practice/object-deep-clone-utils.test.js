const deepClone = require('./object-deep-clone-utils');

describe('deepClone', () => {
  test('should deep clone a simple object', () => {
    const original = {
      a: 1,
      b: 'hello'
    };
    const cloned = deepClone(original);
    expect(cloned).toEqual(original);
    expect(cloned).not.toBe(original);
  });

  test('should deep clone an object with nested objects', () => {
    const original = {
      a: 1,
      b: {
        c: 2,
        d: 'world'
      }
    };
    const cloned = deepClone(original);
    expect(cloned).toEqual(original);
    expect(cloned).not.toBe(original);
    expect(cloned.b).not.toBe(original.b);
  });

  test('should deep clone an object with arrays', () => {
    const original = {
      a: 1,
      b: [2, {
        c: 3
      }]
    };
    const cloned = deepClone(original);
    expect(cloned).toEqual(original);
    expect(cloned).not.toBe(original);
    expect(cloned.b).not.toBe(original.b);
    expect(cloned.b[1]).not.toBe(original.b[1]);
  });

  test('should deep clone an array with nested objects and arrays', () => {
    const original = [1, {
      a: 2,
      b: [3, 4]
    }, 'test'];
    const cloned = deepClone(original);
    expect(cloned).toEqual(original);
    expect(cloned).not.toBe(original);
    expect(cloned[1]).not.toBe(original[1]);
    expect(cloned[1].b).not.toBe(original[1].b);
  });

  test('should handle circular references', () => {
    const original = {};
    original.a = original;
    const cloned = deepClone(original);
    expect(cloned).toEqual(original);
    expect(cloned).not.toBe(original);
    expect(cloned.a).toBe(cloned); // Circular reference should be preserved
  });

  test('should handle multiple circular references', () => {
    const original = {};
    const obj2 = {};
    original.a = obj2;
    obj2.b = original;
    const cloned = deepClone(original);
    expect(cloned).toEqual(original);
    expect(cloned).not.toBe(original);
    expect(cloned.a).not.toBe(original.a);
    expect(cloned.a.b).toBe(cloned);
  });

  test('should deep clone dates', () => {
    const originalDate = new Date();
    const original = {
      d: originalDate
    };
    const cloned = deepClone(original);
    expect(cloned.d).toEqual(originalDate);
    expect(cloned.d).not.toBe(originalDate);
  });

  test('should deep clone RegExp objects', () => {
    const originalRegExp = /abc/gi;
    const original = {
      r: originalRegExp
    };
    const cloned = deepClone(original);
    expect(cloned.r).toEqual(originalRegExp);
    expect(cloned.r).not.toBe(originalRegExp);
  });

  test('should handle primitive values', () => {
    expect(deepClone(123)).toBe(123);
    expect(deepClone('hello')).toBe('hello');
    expect(deepClone(true)).toBe(true);
    expect(deepClone(null)).toBe(null);
    expect(deepClone(undefined)).toBe(undefined);
  });

  test('should handle empty objects and arrays', () => {
    expect(deepClone({})).toEqual({});
    expect(deepClone([])).toEqual([]);
  });
});