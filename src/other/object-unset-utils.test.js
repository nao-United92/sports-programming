const { unset } = require('./object-unset-utils.js');

describe('unset', () => {
  test('should unset a property at a given path', () => {
    const obj = { a: { b: { c: 1 } } };
    const newObj = unset(obj, 'a.b.c');
    expect(newObj.a.b.c).toBeUndefined();
    expect(obj.a.b.c).toBe(1); // Original object should not be mutated
  });

  test('should unset a nested property', () => {
    const obj = { a: { b: { c: 1, d: 2 } } };
    const newObj = unset(obj, 'a.b.c');
    expect(newObj.a.b).toEqual({ d: 2 });
  });

  test('should not mutate the original object', () => {
    const obj = { a: { b: 2 } };
    unset(obj, 'a.b');
    expect(obj.a.b).toBe(2);
  });

  test('should handle non-existent paths gracefully', () => {
    const obj = { a: { b: 2 } };
    const newObj = unset(obj, 'a.c.d');
    expect(newObj).toEqual(obj); // Should return a deep clone of the original
    expect(newObj).not.toBe(obj);
  });

  test('should remove an element from an array by index', () => {
    const obj = { a: [1, 2, 3] };
    const newObj = unset(obj, 'a[1]');
    expect(newObj.a).toEqual([1, 3]);
    expect(obj.a).toEqual([1, 2, 3]); // Original array should not be mutated
  });

  test('should handle unsetting from a null or undefined object', () => {
    const newObj = unset(null, 'a.b');
    expect(newObj).toEqual({});
  });

  test('should return a deep clone if path is empty', () => {
    const obj = { a: 1 };
    const newObj = unset(obj, '');
    expect(newObj).toEqual(obj);
    expect(newObj).not.toBe(obj);
  });

  test('should handle unsetting a non-existent array index', () => {
    const obj = { a: [1, 2] };
    const newObj = unset(obj, 'a[5]');
    expect(newObj.a).toEqual([1, 2]);
    expect(newObj).toEqual(obj);
    expect(newObj).not.toBe(obj);
  });
});
