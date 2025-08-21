import { has } from './has-utils.js';

describe('has', () => {
  const obj = {
    a: {
      b: {
        c: 'hello',
      },
      d: ['one', 'two'],
    },
    e: null,
    f: undefined,
  };

  test('should return true for a top-level property', () => {
    expect(has(obj, 'a')).toBe(true);
  });

  test('should return true for a nested property', () => {
    expect(has(obj, 'a.b.c')).toBe(true);
  });

  test('should return true for an array element', () => {
    expect(has(obj, 'a.d.0')).toBe(true);
  });

  test('should return false for a non-existent property', () => {
    expect(has(obj, 'x')).toBe(false);
  });

  test('should return false for a non-existent nested property', () => {
    expect(has(obj, 'a.b.x')).toBe(false);
  });

  test('should return false for a path that goes through a non-object', () => {
    expect(has(obj, 'a.b.c.d')).toBe(false);
  });

  test('should return true for a property that exists but is undefined', () => {
    expect(has(obj, 'f')).toBe(true);
  });

  test('should handle null and undefined objects gracefully', () => {
    expect(has(null, 'a')).toBe(false);
    expect(has(undefined, 'a')).toBe(false);
  });

  test('should handle an array path', () => {
    expect(has(obj, ['a', 'b', 'c'])).toBe(true);
    expect(has(obj, ['a', 'b', 'x'])).toBe(false);
  });
});
