const { get, set } = require('./object-path-utils');

describe('get', () => {
  const obj = {
    a: {
      b: {
        c: 123,
        d: [4, 5, 6]
      },
      e: null
    },
    f: 'hello'
  };

  test('should get a value using dot notation path', () => {
    expect(get(obj, 'a.b.c')).toBe(123);
  });

  test('should get a value using array path', () => {
    expect(get(obj, ['a', 'b', 'c'])).toBe(123);
  });

  test('should return default value for non-existent path', () => {
    expect(get(obj, 'a.b.x', 'default')).toBe('default');
  });

  test('should return undefined for non-existent path without default value', () => {
    expect(get(obj, 'a.b.x')).toBeUndefined();
  });

  test('should handle null intermediate path', () => {
    expect(get(obj, 'a.e.g', 'default')).toBe('default');
  });

  test('should handle non-object intermediate path', () => {
    expect(get(obj, 'f.g', 'default')).toBe('default');
  });

  test('should get array element', () => {
    expect(get(obj, 'a.b.d.1')).toBe(5);
  });

  test('should handle null or non-object input', () => {
    expect(get(null, 'a.b', 'default')).toBe('default');
    expect(get(undefined, 'a.b', 'default')).toBe('default');
    expect(get('string', 'a.b', 'default')).toBe('default');
  });
});

describe('set', () => {
  test('should set a value using dot notation path', () => {
    const obj = {};
    set(obj, 'a.b.c', 123);
    expect(obj).toEqual({ a: { b: { c: 123 } } });
  });

  test('should set a value using array path', () => {
    const obj = {};
    set(obj, ['x', 'y', 'z'], 'test');
    expect(obj).toEqual({ x: { y: { z: 'test' } } });
  });

  test('should overwrite existing value', () => {
    const obj = { a: { b: { c: 1 } } };
    set(obj, 'a.b.c', 2);
    expect(obj.a.b.c).toBe(2);
  });

  test('should create intermediate objects if they do not exist', () => {
    const obj = { a: {} };
    set(obj, 'a.b.c', 123);
    expect(obj).toEqual({ a: { b: { c: 123 } } });
  });

  test('should handle setting value at root level', () => {
    const obj = {};
    set(obj, 'key', 'value');
    expect(obj).toEqual({ key: 'value' });
  });

  test('should return the modified object', () => {
    const obj = {};
    const result = set(obj, 'a.b', 1);
    expect(result).toBe(obj);
  });

  test('should handle null or non-object input for obj', () => {
    expect(set(null, 'a.b', 1)).toBeNull();
    expect(set(undefined, 'a.b', 1)).toBeUndefined();
    expect(set('string', 'a.b', 1)).toBe('string');
  });
});
