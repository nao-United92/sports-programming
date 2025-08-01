
import { get } from './object-get-utils.js';

describe('get', () => {
  const obj = {
    a: {
      b: {
        c: 42,
      },
      d: ['e', 'f'],
    },
    g: null,
  };

  test('should get a nested property value', () => {
    expect(get(obj, 'a.b.c')).toBe(42);
  });

  test('should get an array element by index', () => {
    expect(get(obj, 'a.d.0')).toBe('e');
    expect(get(obj, 'a.d.1')).toBe('f');
  });

  test('should return undefined for a non-existent path', () => {
    expect(get(obj, 'a.b.x')).toBeUndefined();
    expect(get(obj, 'x.y.z')).toBeUndefined();
  });

  test('should return the default value for a non-existent path', () => {
    expect(get(obj, 'a.b.x', 'default')).toBe('default');
    expect(get(obj, 'x.y.z', 'fallback')).toBe('fallback');
  });

  test('should return undefined if an intermediate path is null or undefined', () => {
    expect(get(obj, 'g.h')).toBeUndefined();
  });

  test('should work with an array path', () => {
    expect(get(obj, ['a', 'b', 'c'])).toBe(42);
    expect(get(obj, ['a', 'd', '0'])).toBe('e');
  });

  test('should return the object itself if the path is empty', () => {
    expect(get(obj, '')).toEqual(obj);
    expect(get(obj, [])).toEqual(obj);
  });

  test('should handle null or undefined objects gracefully', () => {
    expect(get(null, 'a.b')).toBeUndefined();
    expect(get(undefined, 'a.b')).toBeUndefined();
    expect(get(null, 'a.b', 'default')).toBe('default');
  });
});
