const { sortObjectKeys } = require('./object-key-sort-utils');

describe('sortObjectKeys', () => {
  test('should sort keys of a simple object', () => {
    const obj = { c: 3, a: 1, b: 2 };
    const sortedObj = sortObjectKeys(obj);
    expect(Object.keys(sortedObj)).toEqual(['a', 'b', 'c']);
    expect(sortedObj).toEqual({ a: 1, b: 2, c: 3 });
  });

  test('should return the same object if keys are already sorted', () => {
    const obj = { a: 1, b: 2, c: 3 };
    const sortedObj = sortObjectKeys(obj);
    expect(Object.keys(sortedObj)).toEqual(['a', 'b', 'c']);
    expect(sortedObj).toEqual(obj);
  });

  test('should handle an empty object', () => {
    const obj = {};
    const sortedObj = sortObjectKeys(obj);
    expect(Object.keys(sortedObj)).toEqual([]);
    expect(sortedObj).toEqual({});
  });

  test('should handle non-object inputs', () => {
    expect(sortObjectKeys(null)).toBeNull();
    expect(sortObjectKeys(undefined)).toBeUndefined();
    expect(sortObjectKeys('string')).toBe('string');
    expect(sortObjectKeys(123)).toBe(123);
    expect(sortObjectKeys([3, 1, 2])).toEqual([3, 1, 2]);
  });

  test('should sort keys of a nested object with deep option', () => {
    const obj = {
      c: { z: 3, x: 1 },
      a: 1,
      b: { y: 2, w: 4 },
    };
    const sortedObj = sortObjectKeys(obj, { deep: true });
    expect(Object.keys(sortedObj)).toEqual(['a', 'b', 'c']);
    expect(Object.keys(sortedObj.b)).toEqual(['w', 'y']);
    expect(Object.keys(sortedObj.c)).toEqual(['x', 'z']);
    expect(sortedObj).toEqual({
      a: 1,
      b: { w: 4, y: 2 },
      c: { x: 1, z: 3 },
    });
  });

  test('should not sort keys of a nested object without deep option', () => {
    const obj = {
      c: { z: 3, x: 1 },
      a: 1,
      b: { y: 2, w: 4 },
    };
    const sortedObj = sortObjectKeys(obj);
    expect(Object.keys(sortedObj)).toEqual(['a', 'b', 'c']);
    expect(Object.keys(sortedObj.b)).toEqual(['y', 'w']); // original order
    expect(Object.keys(sortedObj.c)).toEqual(['z', 'x']); // original order
  });
});
