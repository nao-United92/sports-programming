const deepMerge = require('./object-deep-merge');

describe('deepMerge', () => {
  test('should merge nested objects', () => {
    const target = { a: { b: 1, c: [1, 2] } };
    const source = { a: { b: 2, d: 3 }, e: 4 };
    const expected = { a: { b: 2, c: [1, 2], d: 3 }, e: 4 };
    expect(deepMerge(target, source)).toEqual(expected);
  });

  test('should not modify the original objects', () => {
    const target = { a: { b: 1 } };
    const source = { a: { c: 2 } };
    deepMerge(target, source);
    expect(target).toEqual({ a: { b: 1 } });
    expect(source).toEqual({ a: { c: 2 } });
  });

  test('should handle null and undefined values', () => {
    const target = { a: 1 };
    const source = { b: null, c: undefined };
    const expected = { a: 1, b: null, c: undefined };
    expect(deepMerge(target, source)).toEqual(expected);
  });

  test('source should overwrite target primitive values', () => {
    const target = { a: 1, b: 'hello' };
    const source = { b: 'world', c: 3 };
    const expected = { a: 1, b: 'world', c: 3 };
    expect(deepMerge(target, source)).toEqual(expected);
  });

  test('should merge arrays by replacing them', () => {
    const target = { a: [1, 2] };
    const source = { a: [3, 4] };
    expect(deepMerge(target, source)).toEqual({ a: [3, 4] });
  });
});