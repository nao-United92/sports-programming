import get from './get-utils.js';

describe('get', () => {
  const object = { 'a': [{ 'b': { 'c': 3, 'd': null } }], 'e': { 'f': 0 } };

  test('should get a value using a string path with dots and brackets', () => {
    expect(get(object, 'a[0].b.c')).toBe(3);
  });

  test('should get a value using an array path', () => {
    expect(get(object, ['a', '0', 'b', 'c'])).toBe(3);
  });

  test('should return undefined for non-existent paths', () => {
    expect(get(object, 'a[0].b.e')).toBeUndefined();
  });

  test('should return the default value for non-existent paths', () => {
    expect(get(object, 'a[0].b.e', 'default')).toBe('default');
  });

  test('should return the default value for null or undefined objects', () => {
    expect(get(null, 'a.b.c', 'default')).toBe('default');
    expect(get(undefined, 'a.b.c', 'default')).toBe('default');
  });

  test('should handle paths with null values and return null', () => {
    expect(get(object, 'a[0].b.d', 'default')).toBeNull();
  });

  test('should handle paths with falsy values (0)', () => {
    expect(get(object, 'e.f', 'default')).toBe(0);
  });

  test('should return the object itself if path is empty array', () => {
    expect(get(object, [])).toEqual(object);
  });
  
  test('should return the object itself if path is null or empty string', () => {
    expect(get(object, null)).toEqual(object);
    expect(get(object, '')).toEqual(object);
  });

  test('should return null for null object with empty path, and default for undefined object with empty path', () => {
    expect(get(null, [], 'default')).toBeNull();
    expect(get(undefined, [], 'default')).toBe('default');
    expect(get(undefined, null, 'default')).toBe('default');
  });
});
