const get = require('./object-get-utils');

describe('get', () => {
  const obj = {
    a: [
      { b: { c: 3, d: null } },
      { b: {} }
    ],
    x: {
      y: 'hello',
    },
    'with.dot': 'value'
  };

  test('should get a value using a dot-separated path', () => {
    expect(get(obj, 'x.y')).toBe('hello');
  });

  test('should get a value using a path with brackets', () => {
    expect(get(obj, 'a[0].b.c')).toBe(3);
  });
  
  test('should get a value using an array path', () => {
    expect(get(obj, ['a', '0', 'b', 'c'])).toBe(3);
  });

  test('should return undefined for a non-existent path', () => {
    expect(get(obj, 'x.z')).toBe(undefined);
    expect(get(obj, 'a[0].b.e')).toBe(undefined);
  });

  test('should return a default value for a non-existent path', () => {
    expect(get(obj, 'x.z', 'default')).toBe('default');
    expect(get(obj, 'deeply.nested.path', 'fallback')).toBe('fallback');
    expect(get(obj, 'a[1].b.c', null)).toBe(null);
  });
  
  test('should handle null or undefined objects', () => {
    expect(get(null, 'a.b', 'default')).toBe('default');
    expect(get(undefined, 'a.b')).toBe(undefined);
  });

  test('should handle null values in the path', () => {
    expect(get(obj, 'a[0].b.d')).toBe(null);
    expect(get(obj, 'a[0].b.d.e', 'default')).toBe('default');
  });
  
  test('should return undefined for empty properties in path', () => {
    // 'a..b' becomes ['a', 'b'] due to filter(Boolean)
    // Let's test a path into an empty object
    expect(get(obj, 'a[1].b.c')).toBe(undefined);
    expect(get(obj, 'a[1].b.c', 'default')).toBe('default');
  });

  test('should return the object for an empty path', () => {
    expect(get(obj, '')).toBe(obj);
    expect(get(obj, [])).toBe(obj);
    expect(get({}, [])).toEqual({});
    expect(get(undefined, [])).toBe(undefined);
    expect(get(undefined, '', 'default')).toBe('default');
  });
});