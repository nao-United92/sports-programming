const { deepMerge } = require('./object-deep-merge-utils');

describe('deepMerge', () => {
  test('should merge two simple objects', () => {
    const obj1 = { a: 1, b: 2 };
    const obj2 = { c: 3, d: 4 };
    expect(deepMerge(obj1, obj2)).toEqual({ a: 1, b: 2, c: 3, d: 4 });
  });

  test('should merge objects with overlapping keys, favoring the latter source', () => {
    const obj1 = { a: 1, b: 2 };
    const obj2 = { b: 3, c: 4 };
    expect(deepMerge(obj1, obj2)).toEqual({ a: 1, b: 3, c: 4 });
  });

  test('should deep merge nested objects', () => {
    const obj1 = { a: 1, b: { c: 2, d: 3 } };
    const obj2 = { b: { d: 4, e: 5 }, f: 6 };
    expect(deepMerge(obj1, obj2)).toEqual({ a: 1, b: { c: 2, d: 4, e: 5 }, f: 6 });
  });

  test('should handle multiple source objects', () => {
    const obj1 = { a: 1 };
    const obj2 = { b: 2 };
    const obj3 = { c: 3 };
    expect(deepMerge(obj1, obj2, obj3)).toEqual({ a: 1, b: 2, c: 3 });
  });

  test('should concatenate arrays if both target and source have arrays for the same key', () => {
    const obj1 = { a: [1, 2], b: 3 };
    const obj2 = { a: [3, 4], c: 5 };
    expect(deepMerge(obj1, obj2)).toEqual({ a: [1, 2, 3, 4], b: 3, c: 5 });
  });

  test('should not modify the original target object', () => {
    const obj1 = { a: 1, b: { c: 2 } };
    const originalObj1 = JSON.parse(JSON.stringify(obj1)); // Deep copy
    const obj2 = { b: { d: 3 } };
    deepMerge(obj1, obj2);
    expect(obj1).toEqual(originalObj1);
  });

  test('should handle non-object sources gracefully', () => {
    const obj1 = { a: 1 };
    expect(deepMerge(obj1, null, { b: 2 }, undefined, 3)).toEqual({ a: 1, b: 2 });
  });
});