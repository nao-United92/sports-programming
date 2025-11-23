import { get } from './object-get-utils';

describe('get', () => {
  const object = { 'a': [{ 'b': { 'c': 3 } }], 'd': null, 'e': undefined };

  it('should get a value from a nested path', () => {
    expect(get(object, 'a[0].b.c')).toBe(3);
    expect(get(object, ['a', '0', 'b', 'c'])).toBe(3);
  });

  it('should return undefined if path does not exist', () => {
    expect(get(object, 'a[0].b.d')).toBeUndefined();
  });

  it('should return defaultValue if path does not exist', () => {
    expect(get(object, 'a[0].b.d', 'default')).toBe('default');
  });

  it('should return defaultValue if object is null or undefined', () => {
    expect(get(null, 'a.b', 'default')).toBe('default');
    expect(get(undefined, 'a.b', 'default')).toBe('default');
  });

  it('should return null if the resolved value is null', () => {
    expect(get(object, 'd')).toBeNull();
  });

  it('should return defaultValue if the resolved value is undefined', () => {
    expect(get(object, 'e', 'default')).toBe('default');
  });

  it('should return undefined if the resolved value is undefined and no defaultValue is provided', () => {
    expect(get(object, 'e')).toBeUndefined();
  });

  it('should handle non-existent intermediate paths', () => {
    expect(get(object, 'x.y.z', 'default')).toBe('default');
  });

  it('should handle empty path', () => {
    expect(get(object, '')).toEqual(object);
    expect(get(object, [], 'default')).toEqual(object);
  });
});
