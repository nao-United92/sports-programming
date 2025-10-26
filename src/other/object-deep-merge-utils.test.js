import { deepMerge } from './object-deep-merge-utils';

describe('deepMerge', () => {
  it('should merge two simple objects', () => {
    const target = { a: 1, b: 2 };
    const source = { c: 3, d: 4 };
    const expected = { a: 1, b: 2, c: 3, d: 4 };
    expect(deepMerge(target, source)).toEqual(expected);
  });

  it('should overwrite properties in target with properties from source', () => {
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

  it('should handle nested objects with overwrites', () => {
    const target = { a: 1, b: { c: 2, d: 3 } };
    const source = { b: { c: 4, e: 5 } };
    const expected = { a: 1, b: { c: 4, d: 3, e: 5 } };
    expect(deepMerge(target, source)).toEqual(expected);
  });

    it('should not modify the original objects', () => {
    const target = { a: { b: 1 } };
    const source = { a: { c: 2 } };
    deepMerge(target, source);
    expect(target).toEqual({ a: { b: 1 } });
    expect(source).toEqual({ a: { c: 2 } });
    });

    it('should handle merging with an empty object', () => {
        const target = { a: 1 };
        const source = {};
        expect(deepMerge(target, source)).toEqual({ a: 1 });
    });

    it('should handle merging into an empty object', () => {
        const target = {};
        const source = { a: 1 };
        expect(deepMerge(target, source)).toEqual({ a: 1 });
    });

    it('should merge multiple source objects', () => {
        const target = { a: 1 };
        const source1 = { b: 2 };
        const source2 = { c: 3 };
        const expected = { a: 1, b: 2, c: 3 };
        expect(deepMerge(target, source1, source2)).toEqual(expected);
    });

    it('should handle multiple source objects with overwrites', () => {
        const target = { a: 1, b: { c: 2 } };
        const source1 = { b: { d: 3 }, c: 4 };
        const source2 = { b: { c: 5 } };
        const expected = { a: 1, b: { c: 5, d: 3 }, c: 4 };
        expect(deepMerge(target, source1, source2)).toEqual(expected);
    });
});
