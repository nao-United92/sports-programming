import { get } from './get-utils.js';

describe('get', () => {
  const obj = {
    a: 1,
    b: {
      c: 2,
      d: {
        e: 3,
      },
    },
    f: [4, 5, { g: 6 }],
  };

  test('should get a top-level property', () => {
    expect(get(obj, 'a')).toBe(1);
  });

  test('should get a nested property using dot notation', () => {
    expect(get(obj, 'b.c')).toBe(2);
    expect(get(obj, 'b.d.e')).toBe(3);
  });

  test('should get a nested property using bracket notation', () => {
    expect(get(obj, 'f[0]')).toBe(4);
    expect(get(obj, 'f[2].g')).toBe(6);
  });

  test('should return undefined for a non-existent path', () => {
    expect(get(obj, 'x')).toBeUndefined();
    expect(get(obj, 'b.x')).toBeUndefined();
    expect(get(obj, 'f[3]')).toBeUndefined();
    expect(get(obj, 'f[2].x')).toBeUndefined();
  });

  test('should return default value for a non-existent path', () => {
    expect(get(obj, 'x', 'default')).toBe('default');
    expect(get(obj, 'b.x', null)).toBe(null);
  });

  test('should handle null or undefined objects', () => {
    expect(get(null, 'a')).toBeUndefined();
    expect(get(undefined, 'a')).toBeUndefined();
    expect(get(null, 'a', 'default')).toBe('default');
  });

  test('should handle empty path', () => {
    expect(get(obj, '')).toBeUndefined();
    expect(get(obj, '', 'default')).toBe('default');
  });
});
