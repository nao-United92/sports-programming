import { get } from './object-get-utils';

describe('get', () => {
  const object = { 'a': [{ 'b': { 'c': 3 } }, 4] };

  it('should get a value using a string path', () => {
    expect(get(object, 'a[0].b.c')).toBe(3);
  });

  it('should get a value using an array path', () => {
    expect(get(object, ['a', '0', 'b', 'c'])).toBe(3);
  });

  it('should get a value from an array in the path', () => {
    expect(get(object, 'a[1]')).toBe(4);
  });

  it('should return undefined for a non-existent path', () => {
    expect(get(object, 'a.b.c')).toBeUndefined();
  });

  it('should return the default value for a non-existent path', () => {
    expect(get(object, 'a.b.c', 'default')).toBe('default');
  });

  it('should return the default value for a path that leads to undefined', () => {
    const objWithUndefined = { a: { b: undefined } };
    expect(get(objWithUndefined, 'a.b', 'default')).toBe('default');
  });

  it('should handle null and undefined objects gracefully', () => {
    expect(get(null, 'a.b.c')).toBeUndefined();
    expect(get(undefined, 'a.b.c')).toBeUndefined();
  });

  it('should handle null and undefined objects with a default value', () => {
    expect(get(null, 'a.b.c', 'default')).toBe('default');
    expect(get(undefined, 'a.b.c', 'default')).toBe('default');
  });

  it('should handle paths that go through null or undefined values', () => {
    const obj = { a: null };
    expect(get(obj, 'a.b', 'default')).toBe('default');
  });
});
