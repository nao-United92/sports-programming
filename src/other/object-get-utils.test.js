import { get } from './object-get-utils.js';

describe('get', () => {
  const object = { 'a': { 'b': { 'c': 3, 'd': 0, 'e': false, 'f': '' } } };

  it('should get a nested value using a string path', () => {
    expect(get(object, 'a.b.c')).toBe(3);
  });

  it('should get a nested value using an array path', () => {
    expect(get(object, ['a', 'b', 'c'])).toBe(3);
  });

  it('should return a default value if path is invalid', () => {
    expect(get(object, 'a.x.c', 'default')).toBe('default');
  });

  it('should return undefined if path is invalid and no default value is provided', () => {
    expect(get(object, 'a.x.c')).toBeUndefined();
  });

  it('should handle null and undefined root objects', () => {
    expect(get(null, 'a.b.c', 'default')).toBe('default');
    expect(get(undefined, ['a', 'b', 'c'])).toBeUndefined();
  });

  it('should handle intermediate null or undefined values', () => {
    const objWithNull = { a: { b: null } };
    expect(get(objWithNull, 'a.b.c', 'default')).toBe('default');
  });

  it('should correctly retrieve falsy values', () => {
    expect(get(object, 'a.b.d')).toBe(0);
    expect(get(object, 'a.b.e')).toBe(false);
    expect(get(object, 'a.b.f')).toBe('');
  });

  it('should return the object itself if path is empty', () => {
    expect(get(object, [])).toBe(object);
    expect(get(object, '')).toBe(object);
  });
});
