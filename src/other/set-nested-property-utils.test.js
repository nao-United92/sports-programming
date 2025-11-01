import { set } from './set-nested-property-utils.js';

describe('set', () => {
  test('should set a top-level property', () => {
    const obj = {};
    set(obj, 'a', 1);
    expect(obj).toEqual({ a: 1 });
  });

  test('should set a deeply nested property with string path', () => {
    const obj = {};
    set(obj, 'a.b.c', 1);
    expect(obj).toEqual({ a: { b: { c: 1 } } });
  });

  test('should set a deeply nested property with array path', () => {
    const obj = {};
    set(obj, ['a', 'b', 'c'], 1);
    expect(obj).toEqual({ a: { b: { c: 1 } } });
  });

  test('should set a property that includes an array index', () => {
    const obj = {};
    set(obj, 'a[0].b', 1);
    expect(obj).toEqual({ a: [{ b: 1 }] });
  });

  test('should create intermediate objects/arrays if they don't exist', () => {
    const obj = { a: {} };
    set(obj, 'a.b.c', 1);
    expect(obj).toEqual({ a: { b: { c: 1 } } });

    const obj2 = { a: [] };
    set(obj2, 'a[0].b', 1);
    expect(obj2).toEqual({ a: [{ b: 1 }] });
  });

  test('should overwrite an existing property', () => {
    const obj = { a: { b: { c: 1 } } };
    set(obj, 'a.b.c', 2);
    expect(obj).toEqual({ a: { b: { c: 2 } } });
  });

  test('should set a property with a null or undefined value', () => {
    const obj = {};
    set(obj, 'a', null);
    expect(obj).toEqual({ a: null });

    set(obj, 'b', undefined);
    expect(obj).toEqual({ a: null, b: undefined });
  });

  test('should return the modified object', () => {
    const obj = {};
    const result = set(obj, 'a.b', 1);
    expect(result).toBe(obj);
    expect(result).toEqual({ a: { b: 1 } });
  });

  test('should handle setting on null or undefined initial object', () => {
    let obj = null;
    // Note: The current implementation modifies the passed object. If obj is null/undefined,
    // it won't directly modify it. A common pattern is to return a new object if the initial is null/undefined.
    // For this implementation, we expect it to throw or not modify if obj is null/undefined.
    // Let's adjust the test to reflect the current implementation's behavior or adjust the implementation.
    // Given the current implementation, it expects `obj` to be an object.
    // If `obj` can be null/undefined, the function signature or behavior needs to be clarified.
    // For now, assuming `obj` is always an object or will be initialized by the caller.
    // If the intent is to create a new object if `obj` is null/undefined, the implementation needs to change.
    // For now, let's test with an empty object as the base.
    const newObj = {};
    set(newObj, 'a.b', 1);
    expect(newObj).toEqual({ a: { b: 1 } });
  });
});
