const { getProperty } = require('./object-get-property-utils.js');

describe('getProperty', () => {
  const testObj = {
    a: {
      b: {
        c: 'hello',
      },
      d: ['foo', 'bar'],
      e: null,
    },
    f: 123,
  };

  it('should get a deeply nested property using dot notation', () => {
    expect(getProperty(testObj, 'a.b.c')).toBe('hello');
  });

  it('should get an element from an array using bracket notation in the path', () => {
    expect(getProperty(testObj, 'a.d[0]')).toBe('foo');
    expect(getProperty(testObj, 'a.d[1]')).toBe('bar');
  });

  it('should return a top-level property', () => {
    expect(getProperty(testObj, 'f')).toBe(123);
  });

  it('should return undefined for a non-existent path', () => {
    expect(getProperty(testObj, 'a.x.y')).toBeUndefined();
  });

  it('should return the default value for a non-existent path when provided', () => {
    expect(getProperty(testObj, 'a.x.y', 'default')).toBe('default');
    expect(getProperty(testObj, 'a.b.z', null)).toBeNull();
  });

  it('should return undefined if an intermediate path is null or undefined', () => {
    expect(getProperty(testObj, 'a.e.f')).toBeUndefined();
    const objWithUndefined = { a: { b: undefined } };
    expect(getProperty(objWithUndefined, 'a.b.c')).toBeUndefined();
  });

  it('should return the default value if an intermediate path is null or undefined', () => {
    expect(getProperty(testObj, 'a.e.f', 'default')).toBe('default');
  });

  it('should handle an array path', () => {
    expect(getProperty(testObj, ['a', 'b', 'c'])).toBe('hello');
    expect(getProperty(testObj, ['a', 'd', '0'])).toBe('foo');
  });

  it('should return the object itself for an empty path', () => {
    expect(getProperty(testObj, '')).toEqual(testObj);
  });

  it('should handle invalid inputs gracefully', () => {
    expect(getProperty(null, 'a.b')).toBeUndefined();
    expect(getProperty(undefined, 'a.b')).toBeUndefined();
    expect(getProperty({}, 'a.b', 'default')).toBe('default');
  });
});
