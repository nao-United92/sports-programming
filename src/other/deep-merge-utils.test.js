import { deepMerge } from './deep-merge-utils';

describe('deepMerge', () => {
  it('should merge two simple objects', () => {
    const target = { a: 1 };
    const source = { b: 2 };
    expect(deepMerge(target, source)).toEqual({ a: 1, b: 2 });
  });

  it('should overwrite target properties with source properties', () => {
    const target = { a: 1, b: 1 };
    const source = { b: 2, c: 3 };
    expect(deepMerge(target, source)).toEqual({ a: 1, b: 2, c: 3 });
  });

  it('should merge nested objects', () => {
    const target = { a: { x: 1 }, b: 1 };
    const source = { a: { y: 2 }, c: 3 };
    expect(deepMerge(target, source)).toEqual({ a: { x: 1, y: 2 }, b: 1, c: 3 });
  });

  it('should handle multiple source objects', () => {
    const target = { a: 1 };
    const source1 = { b: 2 };
    const source2 = { c: 3 };
    const source3 = { a: 0 };
    expect(deepMerge(target, source1, source2, source3)).toEqual({ a: 0, b: 2, c: 3 });
  });

  it('should not modify the source objects', () => {
    const target = { a: 1 };
    const source = { b: { c: 2 } };
    deepMerge(target, source);
    expect(source).toEqual({ b: { c: 2 } });
  });
});