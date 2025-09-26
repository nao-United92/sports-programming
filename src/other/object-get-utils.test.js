const { get } = require('./object-get-utils.js');

describe('get', () => {
  const obj = {
    a: 1,
    b: {
      c: 2,
      d: {
        e: 3,
      },
    },
    f: null,
    g: undefined,
  };

  test('should get a top-level property', () => {
    expect(get(obj, 'a')).toBe(1);
  });

  test('should get a nested property using dot notation', () => {
    expect(get(obj, 'b.c')).toBe(2);
  });

  test('should get a deeply nested property', () => {
    expect(get(obj, 'b.d.e')).toBe(3);
  });

  test('should return undefined for a non-existent path', () => {
    expect(get(obj, 'b.d.x')).toBeUndefined();
  });

  test('should return defaultValue for a non-existent path', () => {
    expect(get(obj, 'b.d.x', 'default')).toBe('default');
  });

  test('should return null for a null value', () => {
    expect(get(obj, 'f')).toBeNull();
  });

  test('should return undefined for an undefined value', () => {
    expect(get(obj, 'g')).toBeUndefined();
  });

  test('should return defaultValue for an undefined value', () => {
    expect(get(obj, 'g', 'default')).toBe('default');
  });

  test('should handle array path', () => {
    expect(get(obj, ['b', 'c'])).toBe(2);
  });

  test('should return defaultValue if object is null or undefined', () => {
    expect(get(null, 'a', 'default')).toBe('default');
    expect(get(undefined, 'a', 'default')).toBe('default');
  });
});