const { get } = require('./object-get-nested-utils');

describe('get (nested property accessor)', () => {
  const testObj = {
    a: {
      b: {
        c: 'hello',
      },
      d: ['e', 'f'],
      g: null,
    },
  };

  test('should get a deeply nested property using a string path', () => {
    expect(get(testObj, 'a.b.c')).toBe('hello');
  });

  test('should get a deeply nested property using an array path', () => {
    expect(get(testObj, ['a', 'b', 'c'])).toBe('hello');
  });

  test('should return the default value for a non-existent path', () => {
    expect(get(testObj, 'a.b.x', 'default')).toBe('default');
  });

  test('should get a property from an array within the object', () => {
    expect(get(testObj, 'a.d.0')).toBe('e');
    expect(get(testObj, 'a.d.1')).toBe('f');
  });

  test('should return the default value for out-of-bounds array index', () => {
    expect(get(testObj, 'a.d.2', 'not found')).toBe('not found');
  });

  test('should handle null or undefined objects gracefully', () => {
    expect(get(null, 'a.b', 'fallback')).toBe('fallback');
    expect(get(undefined, 'a.b', 'fallback')).toBe('fallback');
  });

  test('should return the default value if the resolved value is null', () => {
    expect(get(testObj, 'a.g', 'default value')).toBe('default value');
  });

  test('should get a top-level property', () => {
    expect(get(testObj, 'a')).toEqual(testObj.a);
  });
});
