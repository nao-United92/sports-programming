const { deepMerge } = require('./object-deep-merge-utils.js');

describe('deepMerge', () => {
  it('should merge two simple objects', () => {
    const obj1 = { a: 1, b: 2 };
    const obj2 = { c: 3, d: 4 };
    expect(deepMerge({}, obj1, obj2)).toEqual({ a: 1, b: 2, c: 3, d: 4 });
  });

  it('should overwrite properties from left to right', () => {
    const obj1 = { a: 1, b: 2 };
    const obj2 = { b: 3, c: 4 };
    expect(deepMerge({}, obj1, obj2)).toEqual({ a: 1, b: 3, c: 4 });
  });

  it('should merge nested objects', () => {
    const obj1 = { a: { x: 1 }, b: 2 };
    const obj2 = { a: { y: 2 }, c: 3 };
    expect(deepMerge({}, obj1, obj2)).toEqual({ a: { x: 1, y: 2 }, b: 2, c: 3 });
  });

  it('should not merge arrays, but overwrite them', () => {
    const obj1 = { a: [1, 2] };
    const obj2 = { a: [3, 4] };
    expect(deepMerge({}, obj1, obj2)).toEqual({ a: [3, 4] });
  });

  it('should handle more than two objects', () => {
    const obj1 = { a: { x: 1 } };
    const obj2 = { a: { y: 2 }, b: 2 };
    const obj3 = { c: 3, a: { z: 3 } };
    expect(deepMerge({}, obj1, obj2, obj3)).toEqual({ a: { x: 1, y: 2, z: 3 }, b: 2, c: 3 });
  });

  it('should not mutate the source objects', () => {
    const obj1 = { a: { x: 1 } };
    const obj2 = { a: { y: 2 } };
    const merged = deepMerge({}, obj1, obj2);
    expect(obj1).toEqual({ a: { x: 1 } });
    expect(obj2).toEqual({ a: { y: 2 } });
  });
});