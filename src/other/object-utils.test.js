import { deepMerge, omit, pick } from './object-utils.js';

describe('deepMerge', () => {
  it('should merge two simple objects', () => {
    const target = { a: 1, b: 2 };
    const source = { c: 3, d: 4 };
    const expected = { a: 1, b: 2, c: 3, d: 4 };
    expect(deepMerge(target, source)).toEqual(expected);
  });

  it('should overwrite properties in the target object', () => {
    const target = { a: 1, b: 2 };
    const source = { b: 3, c: 4 };
    const expected = { a: 1, b: 3, c: 4 };
    expect(deepMerge(target, source)).toEqual(expected);
  });

  it('should merge nested objects', () => {
    const target = { a: 1, b: { c: 2 } };
    const source = { b: { d: 3 } };
    const expected = { a: 1, b: { c: 2, d: 3 } };
    expect(deepMerge(target, source)).toEqual(expected);
  });

  it('should handle complex nested objects', () => {
    const target = { a: { b: { c: 1 } }, d: [1, 2] };
    const source = { a: { b: { e: 2 } }, d: [3, 4], f: { g: 3 } };
    const expected = { a: { b: { c: 1, e: 2 } }, d: [3, 4], f: { g: 3 } };
    expect(deepMerge(target, source)).toEqual(expected);
  });

  it('should not modify the original objects', () => {
    const target = { a: 1, b: { c: 2 } };
    const source = { b: { d: 3 } };
    const targetClone = { ...target };
    const sourceClone = { ...source };
    deepMerge(target, source);
    expect(target).toEqual(targetClone);
    expect(source).toEqual(sourceClone);
  });
});

describe('omit', () => {
  it('should omit specified properties from an object', () => {
    const obj = { a: 1, b: 2, c: 3 };
    expect(omit(obj, ['a', 'c'])).toEqual({ b: 2 });
  });

  it('should return a new object without modifying the original', () => {
    const obj = { a: 1, b: 2 };
    omit(obj, ['a']);
    expect(obj).toEqual({ a: 1, b: 2 });
  });

  it('should handle non-existent properties gracefully', () => {
    const obj = { a: 1, b: 2 };
    expect(omit(obj, ['c'])).toEqual({ a: 1, b: 2 });
  });

  it('should return an empty object if all properties are omitted', () => {
    const obj = { a: 1, b: 2 };
    expect(omit(obj, ['a', 'b'])).toEqual({});
  });
});

describe('pick', () => {
  it('should pick specified properties from an object', () => {
    const obj = { a: 1, b: 2, c: 3 };
    expect(pick(obj, ['a', 'c'])).toEqual({ a: 1, c: 3 });
  });

  it('should return a new object without modifying the original', () => {
    const obj = { a: 1, b: 2 };
    pick(obj, ['a']);
    expect(obj).toEqual({ a: 1, b: 2 });
  });

  it('should handle non-existent properties gracefully', () => {
    const obj = { a: 1, b: 2 };
    expect(pick(obj, ['c'])).toEqual({});
  });

  it('should return an empty object if no properties are picked', () => {
    const obj = { a: 1, b: 2 };
    expect(pick(obj, [])).toEqual({});
  });
});