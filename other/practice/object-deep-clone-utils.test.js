import deepCloneObject from './object-deep-clone-utils';

describe('deepCloneObject', () => {
  test('should deep clone a simple object', () => {
    const original = { a: 1, b: 'hello' };
    const cloned = deepCloneObject(original);
    expect(cloned).toEqual(original);
    expect(cloned).not.toBe(original);
  });

  test('should deep clone an object with nested objects', () => {
    const original = { a: 1, b: { c: 2, d: { e: 3 } } };
    const cloned = deepCloneObject(original);
    expect(cloned).toEqual(original);
    expect(cloned).not.toBe(original);
    expect(cloned.b).not.toBe(original.b);
    expect(cloned.b.d).not.toBe(original.b.d);
  });

  test('should deep clone an object with arrays', () => {
    const original = { a: [1, 2], b: { c: [3, 4] } };
    const cloned = deepCloneObject(original);
    expect(cloned).toEqual(original);
    expect(cloned).not.toBe(original);
    expect(cloned.a).not.toBe(original.a);
    expect(cloned.b.c).not.toBe(original.b.c);
  });

  test('should deep clone an object with mixed types', () => {
    const original = {
      str: 'test',
      num: 123,
      bool: true,
      arr: [1, { x: 10 }],
      obj: { y: 20, z: [1, 2] },
      date: new Date(),
      nil: null,
      undef: undefined,
    };
    const cloned = deepCloneObject(original);
    expect(cloned).toEqual(original);
    expect(cloned).not.toBe(original);
    expect(cloned.arr).not.toBe(original.arr);
    expect(cloned.arr[1]).not.toBe(original.arr[1]);
    expect(cloned.obj).not.toBe(original.obj);
    expect(cloned.obj.z).not.toBe(original.obj.z);
    expect(cloned.date).not.toBe(original.date);
    expect(cloned.date instanceof Date).toBe(true);
    expect(cloned.date.getTime()).toBe(original.date.getTime());
  });

  test('should handle primitive values', () => {
    expect(deepCloneObject(123)).toBe(123);
    expect(deepCloneObject('string')).toBe('string');
    expect(deepCloneObject(true)).toBe(true);
    expect(deepCloneObject(null)).toBe(null);
    expect(deepCloneObject(undefined)).toBe(undefined);
  });

  test('should handle empty objects and arrays', () => {
    expect(deepCloneObject({})).toEqual({});
    expect(deepCloneObject([])).toEqual([]);
    expect(deepCloneObject({ a: {} })).toEqual({ a: {} });
    expect(deepCloneObject({ b: [] })).toEqual({ b: [] });
    expect(deepCloneObject({})).not.toBe({});
    expect(deepCloneObject([])).not.toBe([]);
  });

  test('should handle Date objects correctly', () => {
    const originalDate = new Date();
    const original = { d: originalDate };
    const cloned = deepCloneObject(original);
    expect(cloned.d).toEqual(originalDate);
    expect(cloned.d).not.toBe(originalDate);
    expect(cloned.d instanceof Date).toBe(true);
  });
});