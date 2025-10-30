const { deepMerge } = require('./object-deep-merge-utils.js');

describe('deepMerge', () => {
  it('should deeply merge two simple objects', () => {
    const obj1 = { a: 1, b: { c: 2 } };
    const obj2 = { b: { d: 3 }, e: 4 };
    const expected = { a: 1, b: { c: 2, d: 3 }, e: 4 };
    expect(deepMerge(obj1, obj2)).toEqual(expected);
  });

  it('should overwrite primitive values', () => {
    const obj1 = { a: 1, b: 2 };
    const obj2 = { b: 3, c: 4 };
    const expected = { a: 1, b: 3, c: 4 };
    expect(deepMerge(obj1, obj2)).toEqual(expected);
  });

  it('should deeply merge multiple objects', () => {
    const obj1 = { a: 1, b: { c: 2 } };
    const obj2 = { b: { d: 3 } };
    const obj3 = { e: 5, b: { f: 6 } };
    const expected = { a: 1, b: { c: 2, d: 3, f: 6 }, e: 5 };
    expect(deepMerge(obj1, obj2, obj3)).toEqual(expected);
  });

  it('should handle arrays by overwriting them', () => {
    const obj1 = { a: [1, 2], b: { c: [3, 4] } };
    const obj2 = { a: [5], b: { c: [6] } };
    const expected = { a: [5], b: { c: [6] } };
    expect(deepMerge(obj1, obj2)).toEqual(expected);
  });

  it('should handle null and undefined values gracefully', () => {
    const obj1 = { a: 1, b: null };
    const obj2 = { b: { c: 2 }, d: undefined };
    const expected = { a: 1, b: { c: 2 }, d: undefined };
    expect(deepMerge(obj1, obj2)).toEqual(expected);
  });

  it('should return a new object and not modify the original target', () => {
    const obj1 = { a: 1, b: { c: 2 } };
    const obj2 = { b: { d: 3 } };
    const merged = deepMerge(obj1, obj2);
    expect(merged).not.toBe(obj1);
    expect(merged.b).not.toBe(obj1.b);
  });

  it('should handle empty objects', () => {
    const obj1 = { a: 1 };
    const obj2 = {};
    const expected = { a: 1 };
    expect(deepMerge(obj1, obj2)).toEqual(expected);
    expect(deepMerge({}, obj1)).toEqual(obj1);
  });

  it('should handle non-object target or sources', () => {
    expect(deepMerge(null, { a: 1 })).toEqual({ a: 1 });
    expect(deepMerge(undefined, { a: 1 })).toEqual({ a: 1 });
    expect(deepMerge({ a: 1 }, null)).toEqual({ a: 1 });
    expect(deepMerge({ a: 1 }, undefined)).toEqual({ a: 1 });
  });
});