import { getNestedProperty } from './object-get-nested-utils.js';

describe('Object Get Nested Utilities', () => {
  const testObject = {
    a: 1,
    b: {
      c: 2,
      d: {
        e: 3,
        f: 'hello'
      }
    },
    g: [
      {
        h: 4
      }
    ]
  };

  test('should return the value for a top-level property', () => {
    expect(getNestedProperty(testObject, 'a')).toBe(1);
  });

  test('should return the value for a nested property', () => {
    expect(getNestedProperty(testObject, 'b.c')).toBe(2);
  });

  test('should return the value for a deeply nested property', () => {
    expect(getNestedProperty(testObject, 'b.d.e')).toBe(3);
  });

  test('should return the value for a string deeply nested property', () => {
    expect(getNestedProperty(testObject, 'b.d.f')).toBe('hello');
  });

  test('should return undefined for a non-existent top-level property', () => {
    expect(getNestedProperty(testObject, 'x')).toBeUndefined();
  });

  test('should return undefined for a non-existent nested property', () => {
    expect(getNestedProperty(testObject, 'b.x')).toBeUndefined();
  });

  test('should return undefined for a non-existent deeply nested property', () => {
    expect(getNestedProperty(testObject, 'b.d.x')).toBeUndefined();
  });

  test('should return the default value for a non-existent property', () => {
    expect(getNestedProperty(testObject, 'x', 'default')).toBe('default');
    expect(getNestedProperty(testObject, 'b.x', null)).toBe(null);
  });

  test('should return the default value for a non-existent deeply nested property', () => {
    expect(getNestedProperty(testObject, 'b.d.x', 99)).toBe(99);
  });

  test('should handle array elements by index (if path includes index)', () => {
    expect(getNestedProperty(testObject, 'g.0.h')).toBe(4);
  });

  test('should return undefined if object is null or undefined', () => {
    expect(getNestedProperty(null, 'a')).toBeUndefined();
    expect(getNestedProperty(undefined, 'a')).toBeUndefined();
  });

  test('should return default value if object is null or undefined', () => {
    expect(getNestedProperty(null, 'a', 'default')).toBe('default');
    expect(getNestedProperty(undefined, 'a', 'default')).toBe('default');
  });

  test('should return undefined if an intermediate path is not an object', () => {
    const obj = { a: { b: 1 } };
    expect(getNestedProperty(obj, 'a.b.c')).toBeUndefined();
  });

  test('should return default value if an intermediate path is not an object', () => {
    const obj = { a: { b: 1 } };
    expect(getNestedProperty(obj, 'a.b.c', 'default')).toBe('default');
  });

  test('should return the value even if it is null or undefined', () => {
    const obj = { a: null, b: undefined };
    expect(getNestedProperty(obj, 'a')).toBeNull();
    expect(getNestedProperty(obj, 'b')).toBeUndefined();
  });
});