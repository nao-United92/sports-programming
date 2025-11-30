import { get } from './object-get-utils';

describe('get', () => {
  const object = { 'a': [{ 'b': { 'c': 3 } }] };

  test('should get a value using a string path with brackets', () => {
    expect(get(object, 'a[0].b.c')).toBe(3);
  });

  test('should get a value using an array path', () => {
    expect(get(object, ['a', '0', 'b', 'c'])).toBe(3);
  });

  test('should return default value for undefined paths', () => {
    expect(get(object, 'a.b.c', 'default')).toBe('default');
  });

  test('should return undefined if no default value is provided for undefined paths', () => {
    expect(get(object, 'a.b.c')).toBeUndefined();
  });

  test('should handle null and undefined objects', () => {
    expect(get(null, 'a.b.c')).toBeUndefined();
    expect(get(undefined, 'a.b.c', 'default')).toBe('default');
  });

  test('should handle paths that do not exist fully', () => {
    expect(get(object, 'a[0].b.d')).toBeUndefined();
    expect(get(object, 'x.y.z', 123)).toBe(123);
  });
});
