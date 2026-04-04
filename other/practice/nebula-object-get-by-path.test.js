const getByPath = require('./nebula-object-get-by-path');

describe('nebula-object-get-by-path', () => {
  const obj = {
    a: 1,
    b: {
      c: 2,
      d: {
        e: 3
      }
    },
    f: [1, 2, 3]
  };

  test('should get simple paths', () => {
    expect(getByPath(obj, 'a')).toBe(1);
    expect(getByPath(obj, 'b.c')).toBe(2);
  });

  test('should get deeply nested paths', () => {
    expect(getByPath(obj, 'b.d.e')).toBe(3);
  });

  test('should return defaultValue if path does not exist', () => {
    expect(getByPath(obj, 'x')).toBeUndefined();
    expect(getByPath(obj, 'b.x', 'default')).toBe('default');
    expect(getByPath(obj, 'b.d.x.y', 'default')).toBe('default');
  });

  test('should handle arrays', () => {
    expect(getByPath(obj, 'f.0')).toBe(1);
    expect(getByPath(obj, 'f.2')).toBe(3);
    expect(getByPath(obj, 'f.5', 'out')).toBe('out');
  });

  test('should handle null/non-object input', () => {
    expect(getByPath(null, 'a', 'default')).toBe('default');
    expect(getByPath(123, 'a', 'default')).toBe('default');
  });

  test('should return defaultValue if final value is undefined', () => {
    const objWithUndefined = { a: undefined };
    expect(getByPath(objWithUndefined, 'a', 'default')).toBe('default');
  });
});
