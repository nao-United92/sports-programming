const { deepMerge } = require('./object-deep-merge-utils');

describe('deepMerge', () => {
  test('should merge simple objects', () => {
    const obj1 = { a: 1, b: 2 };
    const obj2 = { c: 3, d: 4 };
    expect(deepMerge({}, obj1, obj2)).toEqual({ a: 1, b: 2, c: 3, d: 4 });
  });

  test('should overwrite properties with the same key', () => {
    const obj1 = { a: 1, b: 2 };
    const obj2 = { b: 3, c: 4 };
    expect(deepMerge({}, obj1, obj2)).toEqual({ a: 1, b: 3, c: 4 });
  });

  test('should deep merge nested objects', () => {
    const obj1 = { a: { b: 1 } };
    const obj2 = { a: { c: 2 }, d: 3 };
    expect(deepMerge({}, obj1, obj2)).toEqual({ a: { b: 1, c: 2 }, d: 3 });
  });

  test('should handle arrays by overwriting them', () => {
    const obj1 = { a: [1, 2] };
    const obj2 = { a: [3, 4] };
    expect(deepMerge({}, obj1, obj2)).toEqual({ a: [3, 4] });
  });

  test('should merge multiple source objects', () => {
    const obj1 = { a: 1 };
    const obj2 = { b: { c: 2 } };
    const obj3 = { b: { d: 3 }, e: 4 };
    expect(deepMerge({}, obj1, obj2, obj3)).toEqual({ a: 1, b: { c: 2, d: 3 }, e: 4 });
  });

  test('should handle empty objects', () => {
    const obj1 = { a: 1 };
    const obj2 = {};
    expect(deepMerge({}, obj1, obj2)).toEqual({ a: 1 });
    expect(deepMerge({}, obj2, obj1)).toEqual({ a: 1 });
    expect(deepMerge({}, {})).toEqual({});
  });

  test('should not modify original objects', () => {
    const obj1 = { a: 1, b: { c: 2 } };
    const obj2 = { d: 3, b: { e: 4 } };
    deepMerge({}, obj1, obj2);
    expect(obj1).toEqual({ a: 1, b: { c: 2 } });
    expect(obj2).toEqual({ d: 3, b: { e: 4 } });
  });
});