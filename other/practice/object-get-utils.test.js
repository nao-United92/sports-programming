import get from './object-get-utils';

describe('get', () => {
  const obj = {
    a: {
      b: {
        c: 1,
      },
      d: [
        { e: 2 },
        { f: 3 },
      ],
    },
  };

  test('should get a nested property', () => {
    expect(get(obj, 'a.b.c')).toBe(1);
  });

  test('should get a nested property with array path', () => {
    expect(get(obj, ['a', 'b', 'c'])).toBe(1);
  });

  test('should return default value for non-existent path', () => {
    expect(get(obj, 'a.b.x', 'default')).toBe('default');
  });

  test('should return undefined for non-existent path without default value', () => {
    expect(get(obj, 'a.b.x')).toBeUndefined();
  });

  test('should handle arrays in path', () => {
    expect(get(obj, 'a.d.0.e')).toBe(2);
  });

  test('should handle null and undefined objects', () => {
    expect(get(null, 'a.b.c')).toBeUndefined();
    expect(get(undefined, 'a.b.c')).toBeUndefined();
  });
});
