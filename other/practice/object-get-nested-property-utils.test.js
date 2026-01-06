const getNestedProperty = require('./object-get-nested-property-utils');

describe('getNestedProperty', () => {
  const obj = {
    a: 1,
    b: {
      c: 2,
      d: {
        e: 3
      }
    },
    f: null,
    g: [10, 20, {
      h: 30
    }],
    h: undefined,
  };

  test('should return the value for a top-level property', () => {
    expect(getNestedProperty(obj, 'a')).toBe(1);
  });

  test('should return the value for a deeply nested property (string path)', () => {
    expect(getNestedProperty(obj, 'b.d.e')).toBe(3);
  });

  test('should return the value for a deeply nested property (array path)', () => {
    expect(getNestedProperty(obj, ['b', 'd', 'e'])).toBe(3);
  });

  test('should return default value if path does not exist', () => {
    expect(getNestedProperty(obj, 'b.d.x', 'default')).toBe('default');
    expect(getNestedProperty(obj, 'x.y.z', 'default')).toBe('default');
  });

  test('should return default value if an intermediate property is null', () => {
    expect(getNestedProperty(obj, 'f.x', 'default')).toBe('default');
  });

  test('should return default value if an intermediate property is undefined', () => {
    expect(getNestedProperty(obj, 'h.x', 'default')).toBe('default');
  });

  test('should return undefined if path does not exist and no default value is provided', () => {
    expect(getNestedProperty(obj, 'b.d.x')).toBeUndefined();
  });

  test('should return the value for array elements via index', () => {
    expect(getNestedProperty(obj, 'g.0')).toBe(10);
    expect(getNestedProperty(obj, 'g.2.h')).toBe(30);
  });

  test('should return default value for invalid input object', () => {
    expect(getNestedProperty(null, 'a', 'default')).toBe('default');
    expect(getNestedProperty(undefined, 'a', 'default')).toBe('default');
    expect(getNestedProperty(123, 'a', 'default')).toBe('default');
    expect(getNestedProperty('string', 'a', 'default')).toBe('default');
  });

  test('should return null if the property value is null and no default is provided', () => {
    expect(getNestedProperty(obj, 'f')).toBeNull();
  });

  test('should return undefined if the property value is undefined and no default is provided', () => {
    expect(getNestedProperty(obj, 'h')).toBeUndefined();
  });

  test('should handle empty path (return original object)', () => {
    expect(getNestedProperty(obj, '')).toBe(obj);
    expect(getNestedProperty(obj, [])).toBe(obj);
  });
});
