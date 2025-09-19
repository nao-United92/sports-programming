import { defaultsDeep } from './object-defaults-deep-utils.js';

describe('defaultsDeep', () => {
  test('should recursively assign default properties', () => {
    const obj = { a: { b: 2 } };
    const source = { a: { b: 3, c: 3 }, d: 4 };
    defaultsDeep(obj, source);
    expect(obj).toEqual({ a: { b: 2, c: 3 }, d: 4 });
  });

  test('should not overwrite existing properties', () => {
    const obj = { a: 1 };
    const source = { a: 2, b: 2 };
    defaultsDeep(obj, source);
    expect(obj).toEqual({ a: 1, b: 2 });
  });

  test('should handle multiple source objects', () => {
    const obj = { a: { b: 2 } };
    const source1 = { a: { c: 3 } };
    const source2 = { a: { b: 99, d: 4 }, e: 5 };
    defaultsDeep(obj, source1, source2);
    expect(obj).toEqual({ a: { b: 2, c: 3, d: 4 }, e: 5 });
  });

  test('should not overwrite null properties', () => {
    const obj = { a: null };
    const source = { a: 1 };
    defaultsDeep(obj, source);
    expect(obj).toEqual({ a: null });
  });

  test('should assign undefined properties', () => {
    const obj = { a: undefined };
    const source = { a: 1 };
    defaultsDeep(obj, source);
    expect(obj).toEqual({ a: 1 });
  });

  test('should mutate the destination object', () => {
    const obj = {};
    const source = { a: 1 };
    const result = defaultsDeep(obj, source);
    expect(result).toBe(obj);
    expect(obj).toEqual({ a: 1 });
  });
});