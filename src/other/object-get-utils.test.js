import { get } from './object-get-utils.js';

describe('get', () => {
  const object = {
    a: [
      { b: { c: 3, d: null } },
      4
    ],
    x: { y: 'z' }
  };

  test('should get a value using a string path', () => {
    expect(get(object, 'a[0].b.c')).toBe(3);
    expect(get(object, 'x.y')).toBe('z');
  });

  test('should get a value using an array path', () => {
    expect(get(object, ['a', '0', 'b', 'c'])).toBe(3);
  });

  test('should return undefined for a non-existent path', () => {
    expect(get(object, 'a.b.c')).toBe(undefined);
    expect(get(object, 'x.y.z')).toBe(undefined);
  });

  test('should return the default value for a non-existent path', () => {
    expect(get(object, 'a.b.c', 'default')).toBe('default');
    expect(get(object, 'x.y.z', 123)).toBe(123);
  });

  test('should handle null and undefined values in the path', () => {
    expect(get(object, 'a[0].b.d.e')).toBe(undefined);
    expect(get(object, 'a[0].b.d.e', 'default')).toBe('default');
    expect(get(object, 'a[0].b.d')).toBe(null);
  });

  test('should return default value if path is empty', () => {
    expect(get(object, '', 'default')).toBe('default');
    expect(get(object, [])).toBe(undefined);
  });

  test('should return array elements', () => {
    expect(get(object, 'a[1]')).toBe(4);
  });
});