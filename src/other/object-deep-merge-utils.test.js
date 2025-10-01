import { deepMerge } from './object-deep-merge-utils.js';

describe('deepMerge', () => {
  it('should merge nested objects', () => {
    const obj1 = { a: { b: 1 } };
    const obj2 = { a: { c: 2 } };
    expect(deepMerge(obj1, obj2)).toEqual({ a: { b: 1, c: 2 } });
  });

  it('should overwrite non-object properties', () => {
    const obj1 = { a: { b: 1 } };
    const obj2 = { a: 2 };
    expect(deepMerge(obj1, obj2)).toEqual({ a: 2 });
  });

  it('should handle more than two objects', () => {
    const obj1 = { a: { b: 1 } };
    const obj2 = { a: { c: 2 } };
    const obj3 = { a: { d: 3 } };
    expect(deepMerge(obj1, obj2, obj3)).toEqual({ a: { b: 1, c: 2, d: 3 } });
  });

  it('should not modify the original objects', () => {
    const obj1 = { a: { b: 1 } };
    const obj2 = { a: { c: 2 } };
    deepMerge(obj1, obj2);
    expect(obj1).toEqual({ a: { b: 1 } });
    expect(obj2).toEqual({ a: { c: 2 } });
  });

  it('should overwrite arrays, not merge them', () => {
    const obj1 = { a: [1, 2] };
    const obj2 = { a: [3, 4] };
    expect(deepMerge(obj1, obj2)).toEqual({ a: [3, 4] });
  });

  it('should handle empty and null inputs', () => {
    const obj1 = { a: 1 };
    expect(deepMerge(obj1, {})).toEqual({ a: 1 });
    expect(deepMerge({}, obj1)).toEqual({ a: 1 });
    expect(deepMerge(obj1, null)).toEqual({ a: 1 });
    expect(deepMerge(null, obj1)).toEqual({ a: 1 });
  });

  it('should return a new object instance', () => {
    const obj1 = { a: 1 };
    const result = deepMerge(obj1);
    expect(result).toEqual(obj1);
    expect(result).not.toBe(obj1);
  });
});
