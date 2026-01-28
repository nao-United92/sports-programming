const { getProperty } = require('./object-get-property');

describe('getProperty', () => {
  const obj = {
    a: 1,
    b: {
      c: 2,
      d: {
        e: 'hello',
      },
    },
    f: null,
    g: undefined,
    h: [10, 20, { i: 30 }],
  };

  it('should return the value for a top-level property', () => {
    expect(getProperty(obj, 'a')).toBe(1);
  });

  it('should return the value for a nested property', () => {
    expect(getProperty(obj, 'b.c')).toBe(2);
  });

  it('should return the value for a deeply nested property', () => {
    expect(getProperty(obj, 'b.d.e')).toBe('hello');
  });

  it('should return undefined if the path does not exist', () => {
    expect(getProperty(obj, 'b.x.y')).toBeUndefined();
  });

  it('should return the defaultValue if the path does not exist', () => {
    expect(getProperty(obj, 'b.x.y', 'default')).toBe('default');
  });

  it('should return null if the property value is null', () => {
    expect(getProperty(obj, 'f')).toBeNull();
  });

  it('should return undefined if the property value is undefined', () => {
    expect(getProperty(obj, 'g')).toBeUndefined();
  });

  it('should return the defaultValue if the property value is undefined', () => {
    expect(getProperty(obj, 'g', 'default')).toBe('default');
  });

  it('should handle array elements by index', () => {
    expect(getProperty(obj, 'h.0')).toBe(10);
    expect(getProperty(obj, 'h.2.i')).toBe(30);
  });

  it('should return defaultValue if object is null or undefined', () => {
    expect(getProperty(null, 'a', 'default')).toBe('default');
    expect(getProperty(undefined, 'a', 'default')).toBe('default');
  });

  it('should return undefined if object is null or undefined and no defaultValue', () => {
    expect(getProperty(null, 'a')).toBeUndefined();
    expect(getProperty(undefined, 'a')).toBeUndefined();
  });

  it('should return undefined if intermediate path is not an object', () => {
    expect(getProperty(obj, 'a.x')).toBeUndefined();
    expect(getProperty(obj, 'b.c.x')).toBeUndefined();
  });
});
