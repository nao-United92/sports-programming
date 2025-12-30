import mergeDeep from './object-merge-deep-utils';

describe('mergeDeep', () => {
  test('should merge two simple objects', () => {
    const target = { a: 1 };
    const source = { b: 2 };
    expect(mergeDeep(target, source)).toEqual({ a: 1, b: 2 });
  });

  test('should overwrite properties in target with source properties', () => {
    const target = { a: 1, b: 1 };
    const source = { b: 2 };
    expect(mergeDeep(target, source)).toEqual({ a: 1, b: 2 });
  });

  test('should merge nested objects', () => {
    const target = { a: { x: 1 }, b: 1 };
    const source = { a: { y: 2 }, c: 3 };
    expect(mergeDeep(target, source)).toEqual({ a: { x: 1, y: 2 }, b: 1, c: 3 });
  });

  test('should not modify the original objects', () => {
    const target = { a: { x: 1 } };
    const source = { a: { y: 2 } };
    mergeDeep(target, source);
    expect(target).toEqual({ a: { x: 1 } });
    expect(source).toEqual({ a: { y: 2 } });
  });
});