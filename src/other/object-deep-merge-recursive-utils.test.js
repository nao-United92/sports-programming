import { deepMergeRecursive } from './object-deep-merge-recursive-utils.js';

describe('Object Deep Merge Recursive Utilities', () => {
  test('should merge simple objects', () => {
    const obj1 = { a: 1, b: 2 };
    const obj2 = { c: 3, d: 4 };
    expect(deepMergeRecursive(obj1, obj2)).toEqual({ a: 1, b: 2, c: 3, d: 4 });
  });

  test('should overwrite properties with the same key', () => {
    const obj1 = { a: 1, b: 2 };
    const obj2 = { b: 3, c: 4 };
    expect(deepMergeRecursive(obj1, obj2)).toEqual({ a: 1, b: 3, c: 4 });
  });

  test('should deep merge nested objects', () => {
    const obj1 = { a: 1, b: { c: 2 } };
    const obj2 = { b: { d: 3 }, e: 4 };
    expect(deepMergeRecursive(obj1, obj2)).toEqual({ a: 1, b: { c: 2, d: 3 }, e: 4 });
  });

  test('should handle multiple source objects', () => {
    const obj1 = { a: 1 };
    const obj2 = { b: 2 };
    const obj3 = { c: 3 };
    expect(deepMergeRecursive(obj1, obj2, obj3)).toEqual({ a: 1, b: 2, c: 3 });
  });

  test('should concatenate arrays by default', () => {
    const obj1 = { a: [1, 2] };
    const obj2 = { a: [3, 4] };
    expect(deepMergeRecursive(obj1, obj2)).toEqual({ a: [1, 2, 3, 4] });
  });

  test('should deep merge objects within arrays if they are objects', () => {
    const obj1 = { a: [{ id: 1, value: 'x' }] };
    const obj2 = { a: [{ id: 2, value: 'y' }] };
    expect(deepMergeRecursive(obj1, obj2)).toEqual({ a: [{ id: 1, value: 'x' }, { id: 2, value: 'y' }] });
  });

  test('should handle null and undefined values gracefully', () => {
    const obj1 = { a: 1, b: null };
    const obj2 = { b: undefined, c: 3 };
    expect(deepMergeRecursive(obj1, obj2)).toEqual({ a: 1, b: undefined, c: 3 });
  });

  test('should handle empty objects', () => {
    const obj1 = {};
    const obj2 = { a: 1 };
    expect(deepMergeRecursive(obj1, obj2)).toEqual({ a: 1 });
  });

  test('should return a new object if target is null or not an object', () => {
    const obj2 = { a: 1 };
    expect(deepMergeRecursive(null, obj2)).toEqual({ a: 1 });
    expect(deepMergeRecursive(undefined, obj2)).toEqual({ a: 1 });
    expect(deepMergeRecursive(123, obj2)).toEqual({ a: 1 });
    expect(deepMergeRecursive('string', obj2)).toEqual({ a: 1 });
  });

  test('should not modify the original objects unless target is one of them', () => {
    const obj1 = { a: 1, b: { c: 2 } };
    const obj2 = { b: { d: 3 } };
    const merged = deepMergeRecursive({}, obj1, obj2);
    expect(merged).toEqual({ a: 1, b: { c: 2, d: 3 } });
    expect(obj1).toEqual({ a: 1, b: { c: 2 } });
    expect(obj2).toEqual({ b: { d: 3 } });
  });
});