const merge = require('./object-merge-utils');

describe('merge', () => {
  test('should merge two simple objects', () => {
    const target = { a: 1, b: 2 };
    const source = { b: 3, c: 4 };
    expect(merge(target, source)).toEqual({ a: 1, b: 3, c: 4 });
  });

  test('should recursively merge nested objects', () => {
    const target = { a: 1, b: { x: 1, y: 2 } };
    const source = { b: { y: 3, z: 4 }, c: 5 };
    expect(merge(target, source)).toEqual({
      a: 1,
      b: { x: 1, y: 3, z: 4 },
      c: 5,
    });
  });

  test('should not modify the original objects', () => {
    const target = { a: 1, b: { x: 1 } };
    const source = { b: { y: 2 } };
    merge(target, source);
    expect(target).toEqual({ a: 1, b: { x: 1 } });
  });

  test('should handle arrays by replacing them', () => {
    const target = { a: [1, 2] };
    const source = { a: [3, 4] };
    expect(merge(target, source)).toEqual({ a: [3, 4] });
  });

  test('should return the source if target is not an object', () => {
    expect(merge(null, { a: 1 })).toEqual({ a: 1 });
    expect(merge(undefined, { a: 1 })).toEqual({ a: 1 });
    expect(merge(123, { a: 1 })).toEqual({ a: 1 });
  });

  test('should return the source if source is not an object', () => {
    expect(merge({ a: 1 }, null)).toBeNull();
    expect(merge({ a: 1 }, undefined)).toBeUndefined();
    expect(merge({ a: 1 }, 123)).toBe(123);
  });
});
