import { get } from './object-get-utils.js';

describe('get', () => {
  const object = { 'a': [{ 'b': { 'c': 3 } }] };

  it('should get a value using a string path', () => {
    expect(get(object, 'a[0].b.c')).toBe(3);
  });

  it('should get a value using an array path', () => {
    expect(get(object, ['a', '0', 'b', 'c'])).toBe(3);
  });

  it('should return a default value for undefined paths', () => {
    expect(get(object, 'a.b.c', 'default')).toBe('default');
  });

  it('should return undefined if no default value is provided for undefined paths', () => {
    expect(get(object, 'a.b.c')).toBeUndefined();
  });

  it('should handle paths with array indexes', () => {
    const obj = { a: { b: [10, 20, 30] } };
    expect(get(obj, 'a.b[1]')).toBe(20);
  });

  it('should return undefined for null or undefined objects', () => {
    expect(get(null, 'a.b.c')).toBeUndefined();
    expect(get(undefined, 'a.b.c')).toBeUndefined();
  });
});
