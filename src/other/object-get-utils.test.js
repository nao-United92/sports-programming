import { get } from './object-get-utils';

describe('get', () => {
  const testObj = {
    a: 1,
    b: {
      c: 2,
      d: {
        e: 3,
      },
    },
    f: [4, 5, { g: 6 }],
    'h.i': 7, // Key with dot
  };

  test('should get a top-level property', () => {
    expect(get(testObj, 'a')).toBe(1);
  });

  test('should get a nested property using dot notation string', () => {
    expect(get(testObj, 'b.c')).toBe(2);
    expect(get(testObj, 'b.d.e')).toBe(3);
  });

  test('should get a nested property using array path', () => {
    expect(get(testObj, ['b', 'c'])).toBe(2);
    expect(get(testObj, ['b', 'd', 'e'])).toBe(3);
  });

  test('should return undefined if property does not exist', () => {
    expect(get(testObj, 'x')).toBeUndefined();
    expect(get(testObj, 'b.x')).toBeUndefined();
    expect(get(testObj, 'b.d.x')).toBeUndefined();
  });

  test('should return defaultValue if property does not exist', () => {
    expect(get(testObj, 'x', 'default')).toBe('default');
    expect(get(testObj, 'b.x', null)).toBeNull();
    expect(get(testObj, 'b.d.x', 0)).toBe(0);
  });

  test('should handle array elements in path', () => {
    expect(get(testObj, 'f.0')).toBe(4);
    expect(get(testObj, ['f', 1])).toBe(5);
    expect(get(testObj, 'f.2.g')).toBe(6);
    expect(get(testObj, ['f', 2, 'g'])).toBe(6);
  });

  test('should handle null or undefined object', () => {
    expect(get(null, 'a')).toBeUndefined();
    expect(get(undefined, 'a')).toBeUndefined();
    expect(get(null, 'a', 'default')).toBe('default');
  });

  test('should handle non-object input', () => {
    expect(get(123, 'a')).toBeUndefined();
    expect(get('string', 'a')).toBeUndefined();
    expect(get(true, 'a')).toBeUndefined();
  });

  test('should handle empty path', () => {
    expect(get(testObj, '')).toEqual(testObj);
    expect(get(testObj, [])).toEqual(testObj);
  });

  test('should handle key with dot in its name', () => {
    // When path is a string, dot is a separator
    expect(get(testObj, 'h.i')).toBeUndefined(); // Corrected expectation
    // When path is an array, dot is part of the key name
    expect(get(testObj, ['h.i'])).toBe(7);
  });

  test('should return undefined if an intermediate path is not an object', () => {
    expect(get(testObj, 'a.x')).toBeUndefined(); // a is 1, not an object
    expect(get(testObj, 'f.0.x')).toBeUndefined(); // f.0 is 4, not an object
  });
});