const { deepMerge } = require('./object-merge-utils');

describe('deepMerge', () => {
  test('should merge simple objects', () => {
    const target = { a: 1, b: 2 };
    const source = { b: 3, c: 4 };
    const expected = { a: 1, b: 3, c: 4 };
    expect(deepMerge(target, source)).toEqual(expected);
  });

  test('should merge nested objects', () => {
    const target = { a: { x: 1 }, b: 2 };
    const source = { a: { y: 2 }, c: 3 };
    const expected = { a: { x: 1, y: 2 }, b: 2, c: 3 };
    expect(deepMerge(target, source)).toEqual(expected);
  });

  test('should overwrite arrays, not merge them', () => {
    const target = { a: [1, 2] };
    const source = { a: [3, 4] };
    const expected = { a: [3, 4] };
    expect(deepMerge(target, source)).toEqual(expected);
  });

  test('should handle multiple source objects', () => {
    const target = { a: 1 };
    const source1 = { b: 2 };
    const source2 = { c: { d: 3 } };
    const source3 = { a: 4, c: { e: 5 } };
    const expected = { a: 4, b: 2, c: { d: 3, e: 5 } };
    expect(deepMerge(target, source1, source2, source3)).toEqual(expected);
  });

  test('should not mutate the original target object', () => {
    const target = { a: { x: 1 }, b: 2 };
    const source = { a: { y: 2 }, c: 3 };
    deepMerge(target, source);
    expect(target).toEqual({ a: { x: 1 }, b: 2 });
  });

  test('should handle empty or non-object sources gracefully', () => {
    const target = { a: 1 };
    expect(deepMerge(target)).toEqual({ a: 1 });
    expect(deepMerge(target, null, undefined)).toEqual({ a: 1 });
  });
});
