import { getProperty } from './object-get-property-utils';

describe('getProperty', () => {
  const testObject = {
    a: 1,
    b: {
      c: 2,
      d: {
        e: 3,
      },
    },
    f: null,
    g: undefined,
    h: [10, 20, { i: 30 }],
  };

  test('should return the value of a top-level property', () => {
    expect(getProperty(testObject, 'a')).toBe(1);
  });

  test('should return the value of a nested property', () => {
    expect(getProperty(testObject, 'b.c')).toBe(2);
  });

  test('should return the value of a deeply nested property', () => {
    expect(getProperty(testObject, 'b.d.e')).toBe(3);
  });

  test('should return defaultValue for a non-existent top-level property', () => {
    expect(getProperty(testObject, 'x', 'default')).toBe('default');
  });

  test('should return defaultValue for a non-existent nested property', () => {
    expect(getProperty(testObject, 'b.x.y', 'default')).toBe('default');
  });

  test('should return defaultValue for a path that traverses through null', () => {
    expect(getProperty(testObject, 'f.x', 'default')).toBe('default');
  });

  test('should return defaultValue for a path that traverses through undefined', () => {
    expect(getProperty(testObject, 'g.x', 'default')).toBe('default');
  });

  test('should return null if the property value is null and no defaultValue is provided', () => {
    expect(getProperty(testObject, 'f')).toBeNull();
  });

  test('should return undefined if the property value is undefined and no defaultValue is provided', () => {
    expect(getProperty(testObject, 'g')).toBeUndefined();
  });

  test('should return defaultValue if the object is null or undefined', () => {
    expect(getProperty(null, 'a', 'default')).toBe('default');
    expect(getProperty(undefined, 'a', 'default')).toBe('default');
  });

  test('should return the object itself if path is empty or not provided', () => {
    expect(getProperty(testObject, '')).toEqual(testObject);
    expect(getProperty(testObject, [])).toEqual(testObject);
  });

  test('should handle array indices', () => {
    expect(getProperty(testObject, 'h.0')).toBe(10);
    expect(getProperty(testObject, 'h.2.i')).toBe(30);
  });

  test('should work with array path', () => {
    expect(getProperty(testObject, ['b', 'c'])).toBe(2);
    expect(getProperty(testObject, ['b', 'd', 'e'])).toBe(3);
  });

  test('should return defaultValue if path is invalid (e.g., number)', () => {
    expect(getProperty(testObject, 123, 'default')).toBe('default');
  });

  test('should return defaultValue if path is not a string or array', () => {
    expect(getProperty(testObject, {}, 'default')).toBe('default');
  });
});