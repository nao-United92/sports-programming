const { deepMerge } = require('./deep-merge-utils.js');

describe('deepMerge', () => {
  test('should merge objects recursively', () => {
    const obj1 = { a: { b: 1 } };
    const obj2 = { a: { c: 2 } };
    const result = deepMerge(obj1, obj2);
    expect(result).toEqual({ a: { b: 1, c: 2 } });
  });

  test('should handle multiple objects', () => {
    const obj1 = { a: { b: 1 } };
    const obj2 = { a: { c: 2 } };
    const obj3 = { a: { d: 3 } };
    const result = deepMerge(obj1, obj2, obj3);
    expect(result).toEqual({ a: { b: 1, c: 2, d: 3 } });
  });

  test('should not modify original objects', () => {
    const obj1 = { a: { b: 1 } };
    const obj2 = { a: { c: 2 } };
    deepMerge(obj1, obj2);
    expect(obj1).toEqual({ a: { b: 1 } });
    expect(obj2).toEqual({ a: { c: 2 } });
  });

  test('should handle non-object values', () => {
    const obj1 = { a: 1, b: 'hello' };
    const obj2 = { c: true, d: null };
    const result = deepMerge(obj1, obj2);
    expect(result).toEqual({ a: 1, b: 'hello', c: true, d: null });
  });

  test('should handle arrays', () => {
    const obj1 = { a: [1, 2] };
    const obj2 = { a: [3, 4] };
    const result = deepMerge(obj1, obj2);
    expect(result).toEqual({ a: [3, 4] });
  });
});