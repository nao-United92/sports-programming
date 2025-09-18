const { sortKeysRecursively } = require('./object-sort-keys-recursively-utils');

describe('sortKeysRecursively', () => {
  test('should sort keys of a simple object', () => {
    const obj = { c: 1, a: 2, b: 3 };
    const sortedObj = sortKeysRecursively(obj);
    expect(Object.keys(sortedObj)).toEqual(['a', 'b', 'c']);
  });

  test('should sort keys of a nested object', () => {
    const obj = {
      c: 1,
      a: {
        z: 1,
        x: 2,
        y: 3,
      },
      b: 3,
    };
    const sortedObj = sortKeysRecursively(obj);
    expect(Object.keys(sortedObj)).toEqual(['a', 'b', 'c']);
    expect(Object.keys(sortedObj.a)).toEqual(['x', 'y', 'z']);
  });

  test('should handle arrays correctly', () => {
    const obj = {
      c: 1,
      a: [4, 1, 3],
      b: 3,
    };
    const sortedObj = sortKeysRecursively(obj);
    expect(Object.keys(sortedObj)).toEqual(['a', 'b', 'c']);
    expect(sortedObj.a).toEqual([4, 1, 3]); // Arrays should not be sorted
  });

  test('should handle non-object inputs', () => {
    expect(sortKeysRecursively(null)).toBeNull();
    expect(sortKeysRecursively(undefined)).toBeUndefined();
    expect(sortKeysRecursively(123)).toBe(123);
    expect(sortKeysRecursively('abc')).toBe('abc');
  });

  test('should handle complex nested objects', () => {
    const obj = {
      z: { b: { d: 4, c: [2, 1] }, a: 1 },
      y: [ { f: 6, e: 5 } ],
      x: 10
    };
    const sortedObj = sortKeysRecursively(obj);
    const expected = {
      x: 10,
      y: [ { f: 6, e: 5 } ], // object in array is not sorted
      z: { a: 1, b: { c: [2, 1], d: 4 } },
    };
    expect(JSON.stringify(sortedObj)).toBe(JSON.stringify(expected));
  });
});