import { get } from './object-get-utils.js';

describe('get', () => {
  const obj = {
    a: 1,
    b: {
      c: 2,
      d: [3, 4],
    },
    e: null,
    f: undefined,
  };

  test('should return the value at the specified path', () => {
    expect(get(obj, 'a')).toBe(1);
    expect(get(obj, 'b.c')).toBe(2);
    expect(get(obj, 'b.d[0]')).toBe(3);
    expect(get(obj, 'b.d[1]')).toBe(4);
  });

  test('should return undefined if the path does not exist', () => {
    expect(get(obj, 'x')).toBeUndefined();
    expect(get(obj, 'b.x')).toBeUndefined();
    expect(get(obj, 'b.d[2]')).toBeUndefined();
  });

  test('should return the default value if the path does not exist', () => {
    expect(get(obj, 'x', 'default')).toBe('default');
    expect(get(obj, 'b.x', null)).toBeNull();
  });

  test('should handle null or undefined values in the path', () => {
    expect(get(obj, 'e')).toBeNull();
    expect(get(obj, 'e.x')).toBeNull();
    expect(get(obj, 'f')).toBeUndefined();
    expect(get(obj, 'f.x')).toBeUndefined();
  });

  test('should handle null or undefined object', () => {
    expect(get(null, 'a')).toBeUndefined();
    expect(get(undefined, 'a')).toBeUndefined();
    expect(get(null, 'a', 'default')).toBe('default');
  });

  test('should handle empty path', () => {
    expect(get(obj, '')).toBeUndefined();
    expect(get(obj, '', 'default')).toBe('default');
  });
});