import { sortKeysRecursively } from './object-sort-keys-recursively-utils';

describe('sortKeysRecursively', () => {
  test('should sort keys of a simple object', () => {
    const obj = { c: 1, a: 2, b: 3 };
    const expected = { a: 2, b: 3, c: 1 };
    expect(JSON.stringify(sortKeysRecursively(obj))).toBe(JSON.stringify(expected));
  });

  test('should sort keys of a nested object', () => {
    const obj = {
      c: { z: 1, x: 2 },
      a: { y: 3, w: 4 },
    };
    const expected = {
      a: { w: 4, y: 3 },
      c: { x: 2, z: 1 },
    };
    expect(JSON.stringify(sortKeysRecursively(obj))).toBe(JSON.stringify(expected));
  });

  test('should handle arrays of objects', () => {
    const obj = [
      { c: 1, a: 2 },
      { y: 3, x: 4 },
    ];
    const expected = [
      { a: 2, c: 1 },
      { x: 4, y: 3 },
    ];
    expect(JSON.stringify(sortKeysRecursively(obj))).toBe(JSON.stringify(expected));
  });

  test('should not change non-object values', () => {
    expect(sortKeysRecursively(123)).toBe(123);
    expect(sortKeysRecursively('abc')).toBe('abc');
    expect(sortKeysRecursively(null)).toBe(null);
  });
});
