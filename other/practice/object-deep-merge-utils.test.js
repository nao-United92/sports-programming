const deepMerge = require('./object-deep-merge-utils');

describe('deepMerge', () => {
  test('should merge two simple objects', () => {
    const obj1 = { a: 1, b: 2 };
    const obj2 = { c: 3, d: 4 };
    expect(deepMerge({}, obj1, obj2)).toEqual({ a: 1, b: 2, c: 3, d: 4 });
  });

  test('should deep merge nested objects', () => {
    const obj1 = { a: 1, b: { c: 2 } };
    const obj2 = { b: { d: 3 } };
    expect(deepMerge({}, obj1, obj2)).toEqual({ a: 1, b: { c: 2, d: 3 } });
  });

  test('should handle overriding properties', () => {
    const obj1 = { a: 1, b: 2 };
    const obj2 = { b: 3, c: 4 };
    expect(deepMerge({}, obj1, obj2)).toEqual({ a: 1, b: 3, c: 4 });
  });

  test('should not mutate the source objects', () => {
    const obj1 = { a: { b: 1 } };
    const obj2 = { a: { c: 2 } };
    deepMerge({}, obj1, obj2);
    expect(obj1).toEqual({ a: { b: 1 } });
    expect(obj2).toEqual({ a: { c: 2 } });
  });

  test('should merge multiple objects', () => {
    const obj1 = { a: 1 };
    const obj2 = { b: 2 };
    const obj3 = { c: 3 };
    expect(deepMerge({}, obj1, obj2, obj3)).toEqual({ a: 1, b: 2, c: 3 });
  });

  test('should handle empty source objects', () => {
    const obj1 = { a: 1 };
    expect(deepMerge({}, obj1, {})).toEqual({ a: 1 });
  });
});
