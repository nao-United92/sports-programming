
import { get } from './object-get-utils';

describe('get', () => {
  const obj = { a: { b: { c: 1 } }, d: [{ e: 2 }] };

  test('should get a nested property using a string path', () => {
    expect(get(obj, 'a.b.c')).toBe(1);
  });

  test('should get a nested property using an array path', () => {
    expect(get(obj, ['a', 'b', 'c'])).toBe(1);
  });

  test('should get an array element using string path syntax', () => {
    expect(get(obj, 'd[0].e')).toBe(2);
  });

  test('should return undefined for a non-existent path', () => {
    expect(get(obj, 'a.b.f')).toBeUndefined();
  });

  test('should return the default value for a non-existent path', () => {
    expect(get(obj, 'a.b.f', 'default')).toBe('default');
  });

  test('should handle null and undefined objects', () => {
    expect(get(null, 'a.b')).toBeUndefined();
    expect(get(undefined, 'a.b', 'default')).toBe('default');
  });
});
