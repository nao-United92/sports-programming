import { deepCopy } from './deep-copy-utils.js';

describe('deepCopy', () => {
  test('should return a copy of a primitive value', () => {
    expect(deepCopy(123)).toBe(123);
    expect(deepCopy('hello')).toBe('hello');
    expect(deepCopy(null)).toBe(null);
    expect(deepCopy(undefined)).toBe(undefined);
  });

  test('should create a deep copy of a simple object', () => {
    const original = { a: 1, b: 'test' };
    const copied = deepCopy(original);
    expect(copied).toEqual(original);
    expect(copied).not.toBe(original);
  });

  test('should create a deep copy of a nested object', () => {
    const original = { a: 1, b: { c: 2, d: { e: 3 } } };
    const copied = deepCopy(original);
    expect(copied).toEqual(original);
    expect(copied).not.toBe(original);
    expect(copied.b).not.toBe(original.b);
    expect(copied.b.d).not.toBe(original.b.d);
  });

  test('should create a deep copy of an array', () => {
    const original = [1, 2, [3, 4]];
    const copied = deepCopy(original);
    expect(copied).toEqual(original);
    expect(copied).not.toBe(original);
    expect(copied[2]).not.toBe(original[2]);
  });

  test('should handle complex objects with arrays and nested objects', () => {
    const original = {
      a: { b: [1, { c: 2 }] },
      d: [{ e: 3 }, 4],
    };
    const copied = deepCopy(original);
    expect(copied).toEqual(original);
    expect(copied).not.toBe(original);
    expect(copied.a).not.toBe(original.a);
    expect(copied.a.b).not.toBe(original.a.b);
    expect(copied.a.b[1]).not.toBe(original.a.b[1]);
    expect(copied.d).not.toBe(original.d);
    expect(copied.d[0]).not.toBe(original.d[0]);
  });

  test('should correctly copy Date objects', () => {
    const original = { d: new Date() };
    const copied = deepCopy(original);
    expect(copied.d.getTime()).toBe(original.d.getTime());
    expect(copied.d).not.toBe(original.d);
  });

  test('should correctly copy RegExp objects', () => {
    const original = { r: /test/gi };
    const copied = deepCopy(original);
    expect(copied.r.source).toBe(original.r.source);
    expect(copied.r.flags).toBe(original.r.flags);
    expect(copied.r).not.toBe(original.r);
  });
});
