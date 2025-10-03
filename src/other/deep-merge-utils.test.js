const { deepMerge } = require('./deep-merge-utils');

describe('deepMerge', () => {
  test('should merge objects recursively', () => {
    const obj1 = { a: { b: 1 } };
    const obj2 = { a: { c: 2 }, d: 3 };
    const result = deepMerge({}, obj1, obj2);
    expect(result).toEqual({ a: { b: 1, c: 2 }, d: 3 });
  });

  test('should handle non-object sources', () => {
    const obj1 = { a: 1 };
    const result = deepMerge({}, obj1, null, undefined);
    expect(result).toEqual({ a: 1 });
  });

  test('should overwrite primitive values', () => {
    const obj1 = { a: 1, b: 2 };
    const obj2 = { b: 3, c: 4 };
    const result = deepMerge({}, obj1, obj2);
    expect(result).toEqual({ a: 1, b: 3, c: 4 });
  });

  test('should not modify the original objects', () => {
    const obj1 = { a: { b: 1 } };
    const obj2 = { a: { c: 2 } };
    deepMerge({}, obj1, obj2);
    expect(obj1).toEqual({ a: { b: 1 } });
    expect(obj2).toEqual({ a: { c: 2 } });
  });

  test('should handle multiple source objects', () => {
    const obj1 = { a: { b: 1 } };
    const obj2 = { a: { c: 2 } };
    const obj3 = { d: 3 };
    const obj4 = { a: { d: 4 } };
    const result = deepMerge({}, obj1, obj2, obj3, obj4);
    expect(result).toEqual({ a: { b: 1, c: 2, d: 4 }, d: 3 });
  });

  test('should handle arrays correctly by replacing them', () => {
    const target = { a: [1, 2], b: { c: 1 } };
    const source = { a: [3, 4], b: { d: 2 } };
    const result = deepMerge({}, target, source);
    expect(result).toEqual({ a: [3, 4], b: { c: 1, d: 2 } });
  });
});
