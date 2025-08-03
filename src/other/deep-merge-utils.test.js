const { deepMerge } = require('./deep-merge-utils');

describe('deepMerge', () => {
  test('should merge two simple objects', () => {
    const obj1 = { a: 1, b: 2 };
    const obj2 = { c: 3, d: 4 };
    expect(deepMerge(obj1, obj2)).toEqual({ a: 1, b: 2, c: 3, d: 4 });
  });

  test('should overwrite properties in the first object with properties in the second', () => {
    const obj1 = { a: 1, b: 2 };
    const obj2 = { b: 3, c: 4 };
    expect(deepMerge(obj1, obj2)).toEqual({ a: 1, b: 3, c: 4 });
  });

  test('should merge nested objects', () => {
    const obj1 = { a: { x: 1 }, b: 2 };
    const obj2 = { a: { y: 2 }, c: 3 };
    expect(deepMerge(obj1, obj2)).toEqual({ a: { x: 1, y: 2 }, b: 2, c: 3 });
  });

  test('should handle multiple objects', () => {
    const obj1 = { a: 1 };
    const obj2 = { b: 2 };
    const obj3 = { c: 3 };
    expect(deepMerge(obj1, obj2, obj3)).toEqual({ a: 1, b: 2, c: 3 });
  });

  test('should not modify the original objects', () => {
    const obj1 = { a: { x: 1 }, b: 2 };
    const obj2 = { a: { y: 2 }, c: 3 };
    deepMerge(obj1, obj2);
    expect(obj1).toEqual({ a: { x: 1 }, b: 2 });
    expect(obj2).toEqual({ a: { y: 2 }, c: 3 });
  });
});
