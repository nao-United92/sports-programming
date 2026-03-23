import { omit } from './object-omit.js';

describe('omit', () => {
  test('should omit specified keys', () => {
    const obj = { a: 1, b: 2, c: 3 };
    expect(omit(obj, ['a', 'c'])).toEqual({ b: 2 });
  });

  test('should return a shallow copy if no keys omitted', () => {
    const obj = { a: 1 };
    const result = omit(obj, []);
    expect(result).toEqual(obj);
    expect(result).not.toBe(obj);
  });

  test('should handle non-existent keys', () => {
    const obj = { a: 1 };
    expect(omit(obj, ['b'])).toEqual({ a: 1 });
  });

  test('should return empty object for invalid input', () => {
      expect(omit(null, ['a'])).toEqual({});
  });
});
