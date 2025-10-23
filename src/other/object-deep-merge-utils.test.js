import { mergeDeep } from './object-deep-merge-utils';

describe('mergeDeep', () => {
  it('should merge two simple objects', () => {
    const obj1 = { a: 1, b: 2 };
    const obj2 = { c: 3, d: 4 };
    expect(mergeDeep(obj1, obj2)).toEqual({ a: 1, b: 2, c: 3, d: 4 });
  });

  it('should overwrite properties from left to right', () => {
    const obj1 = { a: 1, b: 2 };
    const obj2 = { b: 3, c: 4 };
    expect(mergeDeep(obj1, obj2)).toEqual({ a: 1, b: 3, c: 4 });
  });

  it('should merge nested objects', () => {
    const obj1 = { a: { x: 1 }, b: 2 };
    const obj2 = { a: { y: 2 }, c: 3 };
    expect(mergeDeep(obj1, obj2)).toEqual({ a: { x: 1, y: 2 }, b: 2, c: 3 });
  });

  it('should handle multiple objects', () => {
    const obj1 = { a: 1 };
    const obj2 = { b: { x: 1 } };
    const obj3 = { b: { y: 2 }, c: 3 };
    expect(mergeDeep(obj1, obj2, obj3)).toEqual({ a: 1, b: { x: 1, y: 2 }, c: 3 });
  });

  it('should not modify the original objects', () => {
    const obj1 = { a: { x: 1 }, b: 2 };
    const obj1Original = JSON.parse(JSON.stringify(obj1));
    const obj2 = { a: { y: 2 }, c: 3 };
    const obj2Original = JSON.parse(JSON.stringify(obj2));
    mergeDeep(obj1, obj2);
    expect(obj1).toEqual(obj1Original);
    expect(obj2).toEqual(obj2Original);
  });

  it('should handle arrays by overwriting', () => {
    const obj1 = { a: [1, 2] };
    const obj2 = { a: [3, 4] };
    expect(mergeDeep(obj1, obj2)).toEqual({ a: [3, 4] });
  });

  it('should handle empty or non-object arguments gracefully', () => {
    const obj1 = { a: 1 };
    expect(mergeDeep(obj1, null, undefined, 42, "hello")).toEqual({ a: 1 });
    expect(mergeDeep({}, obj1)).toEqual({ a: 1 });
    expect(mergeDeep(obj1, {})).toEqual({ a: 1 });
  });
});