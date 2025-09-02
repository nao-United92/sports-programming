import { get } from './object-get-utils.js';

describe('get', () => {
  const object = { 'a': [{ 'b': { 'c': 3 } }] };

  test('should get a value from a nested object using a string path', () => {
    expect(get(object, 'a[0].b.c')).toBe(3);
  });

  test('should get a value using an array path', () => {
    expect(get(object, ['a', '0', 'b', 'c'])).toBe(3);
  });

  test('should return undefined for a non-existent path', () => {
    expect(get(object, 'a.b.c')).toBeUndefined();
  });

  test('should return a default value for a non-existent path', () => {
    expect(get(object, 'a.b.c', 'default')).toBe('default');
  });

  test('should return undefined if the object is null or undefined', () => {
    expect(get(null, 'a.b.c')).toBeUndefined();
    expect(get(undefined, 'a.b.c')).toBeUndefined();
  });

  test('should return the default value if the object is null', () => {
    expect(get(null, 'a.b.c', 'default')).toBe('default');
  });

  test('should correctly retrieve falsy values', () => {
    const objWithFalsy = { a: { b: 0, c: false, d: '' } };
    expect(get(objWithFalsy, 'a.b')).toBe(0);
    expect(get(objWithFalsy, 'a.c')).toBe(false);
    expect(get(objWithFalsy, 'a.d')).toBe('');
  });
});