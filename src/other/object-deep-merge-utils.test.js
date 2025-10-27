import { deepMerge } from './object-deep-merge-utils';

describe('deepMerge', () => {
  test('should merge two simple objects', () => {
    const obj1 = { a: 1, b: 2 };
    const obj2 = { c: 3, d: 4 };
    const expected = { a: 1, b: 2, c: 3, d: 4 };
    expect(deepMerge(obj1, obj2)).toEqual(expected);
  });

  test('should overwrite properties with the same key', () => {
    const obj1 = { a: 1, b: 2 };
    const obj2 = { b: 3, c: 4 };
    const expected = { a: 1, b: 3, c: 4 };
    expect(deepMerge(obj1, obj2)).toEqual(expected);
  });

  test('should deep merge nested objects', () => {
    const obj1 = { a: 1, b: { c: 2, d: 3 } };
    const obj2 = { b: { e: 4 }, f: 5 };
    const expected = { a: 1, b: { c: 2, d: 3, e: 4 }, f: 5 };
    expect(deepMerge(obj1, obj2)).toEqual(expected);
  });

  test('should handle arrays by overwriting them', () => {
    const obj1 = { a: [1, 2], b: 3 };
    const obj2 = { a: [3, 4], c: 5 };
    const expected = { a: [3, 4], b: 3, c: 5 };
    expect(deepMerge(obj1, obj2)).toEqual(expected);
  });

  test('should handle null and undefined values', () => {
    const obj1 = { a: 1, b: null };
    const obj2 = { b: undefined, c: 3 };
    const expected = { a: 1, b: undefined, c: 3 };
    expect(deepMerge(obj1, obj2)).toEqual(expected);
  });

  test('should return target if source is null or undefined', () => {
    const obj1 = { a: 1 };
    expect(deepMerge(obj1, null)).toEqual(obj1);
    expect(deepMerge(obj1, undefined)).toEqual(obj1);
  });

  test('should return source if target is null or undefined', () => {
    const obj2 = { a: 1 };
    expect(deepMerge(null, obj2)).toEqual(obj2);
    expect(deepMerge(undefined, obj2)).toEqual(obj2);
  });

  test('should not mutate original objects', () => {
    const obj1 = { a: 1, b: { c: 2 } };
    const obj2 = { d: 3, b: { e: 4 } };
    deepMerge(obj1, obj2);
    expect(obj1).toEqual({ a: 1, b: { c: 2 } });
    expect(obj2).toEqual({ d: 3, b: { e: 4 } });
  });
});