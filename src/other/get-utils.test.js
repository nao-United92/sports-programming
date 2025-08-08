import { get } from './get-utils';

describe('get', () => {
  const obj = {
    a: 1,
    b: {
      c: 2,
      d: {
        e: 3,
      },
    },
    f: [4, 5, { g: 6 }],
  };

  test('should get a top-level property', () => {
    expect(get(obj, 'a')).toBe(1);
  });

  test('should get a nested property', () => {
    expect(get(obj, 'b.c')).toBe(2);
    expect(get(obj, 'b.d.e')).toBe(3);
  });

  test('should get an array element', () => {
    expect(get(obj, 'f[0]')).toBe(4);
    expect(get(obj, 'f[2].g')).toBe(6);
  });

  test('should return undefined for a non-existent path', () => {
    expect(get(obj, 'x')).toBeUndefined();
    expect(get(obj, 'b.x')).toBeUndefined();
    expect(get(obj, 'f[5]')).toBeUndefined();
  });

  test('should return default value for a non-existent path', () => {
    expect(get(obj, 'x', 'default')).toBe('default');
    expect(get(obj, 'b.x', null)).toBe(null);
  });

  test('should handle null or undefined intermediate paths', () => {
    const testObj = { a: { b: null } };
    expect(get(testObj, 'a.b.c')).toBeUndefined();
    expect(get(testObj, 'a.b.c', 'default')).toBe('default');
  });

  test('should handle empty path', () => {
    expect(get(obj, '')).toBeUndefined();
    expect(get(obj, '', 'default')).toBe('default');
  });
});