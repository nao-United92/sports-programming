import { omit } from './omit-utils';

describe('omit', () => {
  test('should return a new object', () => {
    const original = { a: 1, b: 2 };
    const result = omit(original, ['b']);
    expect(result).not.toBe(original);
  });

  test('should omit specified keys from an object', () => {
    const obj = { a: 1, b: 2, c: 3 };
    expect(omit(obj, ['b', 'c'])).toEqual({ a: 1 });
  });

  test('should handle keys that do not exist in the object', () => {
    const obj = { a: 1, b: 2 };
    expect(omit(obj, ['c', 'd'])).toEqual({ a: 1, b: 2 });
  });

  test('should handle an empty array of keys', () => {
    const obj = { a: 1, b: 2 };
    expect(omit(obj, [])).toEqual({ a: 1, b: 2 });
  });

  test('should handle an empty object', () => {
    expect(omit({}, ['a'])).toEqual({});
  });

  test('should handle null and non-object inputs', () => {
    expect(omit(null, ['a'])).toEqual({});
    expect(omit(undefined, ['a'])).toEqual({});
    expect(omit(123, ['a'])).toEqual({});
  });
});
