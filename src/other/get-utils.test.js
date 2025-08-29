import { get } from './get-utils.js';

describe('get', () => {
  const object = { 'a': [{ 'b': { 'c': 3 } }] };

  it('should get a value from a nested object using a string path with brackets', () => {
    expect(get(object, 'a[0].b.c')).toBe(3);
  });

  it('should get a value from a nested object using an array path', () => {
    expect(get(object, ['a', '0', 'b', 'c'])).toBe(3);
  });

  it('should return a default value for an undefined path', () => {
    expect(get(object, 'a.b.c', 'default')).toBe('default');
  });

  it('should return undefined for an undefined path when no default value is provided', () => {
    expect(get(object, 'a.b.c')).toBeUndefined();
  });

  it('should handle null and undefined objects', () => {
    expect(get(null, 'a.b.c')).toBeUndefined();
    expect(get(undefined, 'a.b.c')).toBeUndefined();
  });

  it('should work with a simple path', () => {
    const obj = { 'a': 1 };
    expect(get(obj, 'a')).toBe(1);
  });
});