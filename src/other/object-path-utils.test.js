const { get, set } = require('./object-path-utils.js');

describe('get', () => {
  const obj = { a: { b: { c: 1 } } };

  it('should get a value from a nested object using a string path', () => {
    expect(get(obj, 'a.b.c')).toBe(1);
  });

  it('should get a value from a nested object using an array path', () => {
    expect(get(obj, ['a', 'b', 'c'])).toBe(1);
  });

  it('should return undefined for a non-existent path', () => {
    expect(get(obj, 'a.b.d')).toBeUndefined();
  });

  it('should return the default value for a non-existent path', () => {
    expect(get(obj, 'a.b.d', 'default')).toBe('default');
  });

  it('should handle an empty path', () => {
    expect(get(obj, '')).toBe(obj);
  });
});

describe('set', () => {
  it('should set a value in a nested object using a string path', () => {
    const obj = {};
    set(obj, 'a.b.c', 1);
    expect(obj.a.b.c).toBe(1);
  });

  it('should set a value in a nested object using an array path', () => {
    const obj = {};
    set(obj, ['a', 'b', 'c'], 1);
    expect(obj.a.b.c).toBe(1);
  });

  it('should modify an existing object', () => {
    const obj = { a: { b: { c: 1 } } };
    set(obj, 'a.b.c', 2);
    expect(obj.a.b.c).toBe(2);
  });

  it('should create nested properties if they don\'t exist', () => {
    const obj = {};
    set(obj, 'a.b.c', 1);
    expect(obj).toEqual({ a: { b: { c: 1 } } });
  });
});
