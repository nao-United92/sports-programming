import { get } from './object-path';

describe('get', () => {
  const object = { 'a': [{ 'b': { 'c': 3 } }] };

  it('should get a value from a nested object using a string path with brackets', () => {
    expect(get(object, 'a[0].b.c')).toBe(3);
  });

  it('should get a value from a nested object using an array path', () => {
    expect(get(object, ['a', '0', 'b', 'c'])).toBe(3);
  });

  it('should return undefined for a non-existent path', () => {
    expect(get(object, 'a.b.c')).toBeUndefined();
  });

  it('should return the default value for a non-existent path', () => {
    expect(get(object, 'a.b.c', 'default')).toBe('default');
  });

  it('should handle paths with array indexes', () => {
    const objWithArray = { 'a': [{ 'b': 1 }, { 'c': 2 }] };
    expect(get(objWithArray, 'a[1].c')).toBe(2);
  });

  it('should return undefined if the path is invalid', () => {
    expect(get(object, 'a[1].b.c')).toBeUndefined();
  });

  it('should return undefined for null or undefined objects', () => {
    expect(get(null, 'a.b.c')).toBeUndefined();
    expect(get(undefined, 'a.b.c')).toBeUndefined();
  });
});
