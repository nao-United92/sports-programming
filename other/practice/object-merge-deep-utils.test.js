const mergeDeep = require('./object-merge-deep-utils');

describe('mergeDeep', () => {
  test('should deeply merge two simple objects', () => {
    const obj1 = { a: 1, b: { c: 2 } };
    const obj2 = { d: 3, b: { e: 4 } };
    expect(mergeDeep({}, obj1, obj2)).toEqual({ a: 1, b: { c: 2, e: 4 }, d: 3 });
  });

  test('should overwrite primitive values', () => {
    const obj1 = { a: 1, b: 2 };
    const obj2 = { b: 3, c: 4 };
    expect(mergeDeep({}, obj1, obj2)).toEqual({ a: 1, b: 3, c: 4 });
  });

  test('should deeply merge nested objects', () => {
    const obj1 = { a: { b: { c: 1 } } };
    const obj2 = { a: { b: { d: 2 } } };
    expect(mergeDeep({}, obj1, obj2)).toEqual({ a: { b: { c: 1, d: 2 } } });
  });

  test('should handle multiple source objects', () => {
    const obj1 = { a: 1 };
    const obj2 = { b: 2 };
    const obj3 = { c: 3, a: 4 };
    expect(mergeDeep({}, obj1, obj2, obj3)).toEqual({ a: 4, b: 2, c: 3 });
  });

  test('should not mutate original objects', () => {
    const obj1 = { a: 1, b: { c: 2 } };
    const obj2 = { d: 3, b: { e: 4 } };
    const result = mergeDeep({}, obj1, obj2);
    expect(obj1).toEqual({ a: 1, b: { c: 2 } });
    expect(obj2).toEqual({ d: 3, b: { e: 4 } });
  });

  test('should handle arrays by overwriting them', () => {
    const obj1 = { a: [1, 2] };
    const obj2 = { a: [3, 4] };
    expect(mergeDeep({}, obj1, obj2)).toEqual({ a: [3, 4] });
  });

  test('should handle null and undefined sources', () => {
    const obj1 = { a: 1 };
    expect(mergeDeep({}, obj1, null, { b: 2 }, undefined)).toEqual({ a: 1, b: 2 });
  });

  test('should create new target object if first argument is not an object', () => {
    const obj1 = { a: 1 };
    expect(mergeDeep(null, obj1)).toEqual({ a: 1 });
    expect(mergeDeep(undefined, obj1)).toEqual({ a: 1 });
    expect(mergeDeep(123, obj1)).toEqual({ a: 1 });
    expect(mergeDeep("string", obj1)).toEqual({ a: 1 });
    expect(mergeDeep([], obj1)).toEqual({ a: 1 });
  });

  test('should handle empty objects as sources', () => {
    const obj1 = { a: 1 };
    expect(mergeDeep({}, obj1, {})).toEqual({ a: 1 });
  });

  test('should handle objects with deeply nested arrays by overwriting', () => {
    const obj1 = { data: { users: [{ id: 1 }] } };
    const obj2 = { data: { users: [{ id: 2 }] } };
    expect(mergeDeep({}, obj1, obj2)).toEqual({ data: { users: [{ id: 2 }] } });
  });
});
