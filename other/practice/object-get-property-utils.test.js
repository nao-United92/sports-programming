const get = require('./object-get-property-utils');

describe('get', () => {
  const obj = {
    a: 1,
    b: {
      c: 2,
      d: {
        e: 3
      }
    },
    f: [{
      g: 4
    }, {
      h: 5
    }],
    i: null,
    j: undefined,
  };

  test('should retrieve a top-level property', () => {
    expect(get(obj, 'a')).toBe(1);
  });

  test('should retrieve a nested property', () => {
    expect(get(obj, 'b.c')).toBe(2);
    expect(get(obj, 'b.d.e')).toBe(3);
  });

  test('should retrieve a property using an array path', () => {
    expect(get(obj, ['b', 'c'])).toBe(2);
    expect(get(obj, ['b', 'd', 'e'])).toBe(3);
  });

  test('should return undefined for a non-existent path', () => {
    expect(get(obj, 'x')).toBeUndefined();
    expect(get(obj, 'b.x')).toBeUndefined();
    expect(get(obj, 'b.d.x')).toBeUndefined();
  });

  test('should return a default value for a non-existent path', () => {
    expect(get(obj, 'x', 'default')).toBe('default');
    expect(get(obj, 'b.x', 'default')).toBe('default');
    expect(get(obj, 'b.d.x', 'default')).toBe('default');
  });

  test('should return null if the path leads to null', () => {
    expect(get(obj, 'i')).toBeNull();
  });

  test('should return undefined if the path leads to undefined', () => {
    expect(get(obj, 'j')).toBeUndefined();
  });

  test('should return default value if the path leads to undefined and default is provided', () => {
    expect(get(obj, 'j', 'fallback')).toBe('fallback');
  });

  test('should handle array indices', () => {
    expect(get(obj, 'f.0.g')).toBe(4);
    expect(get(obj, ['f', '1', 'h'])).toBe(5);
  });

  test('should return default for invalid array index', () => {
    expect(get(obj, 'f.2.g', 'default')).toBe('default');
  });

  test('should return default if intermediate path is null or undefined', () => {
    expect(get(obj, 'i.x', 'default')).toBe('default');
    expect(get(obj, 'j.y', 'default')).toBe('default');
  });

  test('should handle empty object', () => {
    const emptyObj = {};
    expect(get(emptyObj, 'a', 'default')).toBe('default');
  });

  test('should handle non-object input for obj', () => {
    expect(get(null, 'a', 'default')).toBe('default');
    expect(get(undefined, 'a', 'default')).toBe('default');
    expect(get(123, 'a', 'default')).toBe('default');
    expect(get('string', 'a', 'default')).toBe('default');
  });

  test('should handle empty path string', () => {
    expect(get(obj, '', 'default')).toBe(obj);
    expect(get(obj, [], 'default')).toBe(obj);
  });

  test('should return the object itself if path is empty', () => {
    expect(get(obj, '')).toEqual(obj);
    expect(get(obj, [])).toEqual(obj);
  });
});
