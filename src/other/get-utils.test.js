import { get } from './get-utils.js';

describe('get', () => {
  const obj = {
    a: {
      b: {
        c: 'hello',
      },
      d: ['one', 'two'],
    },
    e: null,
  };

  test('should get a top-level property', () => {
    expect(get(obj, 'e')).toBeNull();
  });

  test('should get a nested property using dot notation', () => {
    expect(get(obj, 'a.b.c')).toBe('hello');
  });

  test('should get a nested property using an array path', () => {
    expect(get(obj, ['a', 'b', 'c'])).toBe('hello');
  });

  test('should get an array element by index', () => {
    expect(get(obj, 'a.d.1')).toBe('two');
  });

  test('should return undefined for a non-existent path', () => {
    expect(get(obj, 'a.b.x')).toBeUndefined();
  });

  test('should return the default value for a non-existent path', () => {
    expect(get(obj, 'a.b.x', 'default')).toBe('default');
  });

  test('should return undefined if the path is invalid mid-way', () => {
    expect(get(obj, 'a.x.c')).toBeUndefined();
  });

  test('should return the default value if the path is invalid mid-way', () => {
    expect(get(obj, 'a.x.c', 'fallback')).toBe('fallback');
  });

  test('should handle null or undefined objects gracefully', () => {
    expect(get(null, 'a.b')).toBeUndefined();
    expect(get(undefined, 'a.b', 'default')).toBe('default');
  });
});
