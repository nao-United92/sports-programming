import { get } from './object-get-utils.js';

describe('get', () => {
  const object = { a: [{ b: { c: 3 } }] };

  test('should get a value using a string path', () => {
    expect(get(object, 'a[0].b.c')).toBe(3);
  });

  test('should get a value using an array path', () => {
    expect(get(object, ['a', '0', 'b', 'c'])).toBe(3);
  });

  test('should return undefined for an invalid path', () => {
    expect(get(object, 'a.b.c')).toBeUndefined();
  });

  test('should return the default value for an invalid path', () => {
    expect(get(object, 'a.b.c', 'default')).toBe('default');
  });

  test('should return undefined if the object is null or undefined', () => {
    expect(get(null, 'a.b')).toBeUndefined();
    expect(get(undefined, ['a', 'b'], 'default')).toBe('default');
  });

  test('should handle paths with existing but undefined values', () => {
    const objWithUndefined = { a: { b: undefined } };
    expect(get(objWithUndefined, 'a.b')).toBeUndefined();
    expect(get(objWithUndefined, 'a.b', 'default')).toBe('default');
  });
});
