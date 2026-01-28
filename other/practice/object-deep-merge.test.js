const { deepMerge } = require('./object-deep-merge');

describe('deepMerge', () => {
  it('should deeply merge two simple objects', () => {
    const obj1 = { a: 1, b: { c: 2 } };
    const obj2 = { b: { d: 3 }, e: 4 };
    expect(deepMerge(obj1, obj2)).toEqual({ a: 1, b: { c: 2, d: 3 }, e: 4 });
  });

  it('should deeply merge multiple objects', () => {
    const obj1 = { a: 1, b: { c: 2 } };
    const obj2 = { b: { d: 3 }, e: 4 };
    const obj3 = { f: { g: 5 }, b: { c: 10 } }; // Overwrites b.c
    expect(deepMerge(obj1, obj2, obj3)).toEqual({ a: 1, b: { c: 10, d: 3 }, e: 4, f: { g: 5 } });
  });

  it('should handle undefined or null sources gracefully', () => {
    const obj1 = { a: 1 };
    expect(deepMerge(obj1, null, { b: 2 })).toEqual({ a: 1, b: 2 });
    expect(deepMerge(obj1, undefined, { c: 3 })).toEqual({ a: 1, c: 3 });
  });

  it('should overwrite primitive values', () => {
    const obj1 = { a: 1, b: 2 };
    const obj2 = { b: 3, c: 4 };
    expect(deepMerge(obj1, obj2)).toEqual({ a: 1, b: 3, c: 4 });
  });

  it('should handle arrays by overwriting them entirely', () => {
    const obj1 = { a: [1, 2], b: 3 };
    const obj2 = { a: [3, 4] };
    expect(deepMerge(obj1, obj2)).toEqual({ a: [3, 4], b: 3 });
  });

  it('should create new objects for nested structures', () => {
    const obj1 = { a: { b: 1 } };
    const obj2 = { c: 2 };
    const result = deepMerge(obj1, obj2);
    expect(result.a).toEqual({ b: 1 });
    expect(result.c).toBe(2);
    expect(result.a).not.toBe(obj1.a); // Should be a new object reference
  });
});
