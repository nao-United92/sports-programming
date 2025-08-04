import { omit } from './omit-utils.js';

describe('omit', () => {
  test('should omit specified keys from an object', () => {
    const obj = { a: 1, b: 2, c: 3 };
    expect(omit(obj, ['a', 'c'])).toEqual({ b: 2 });
  });

  test('should return a new object without modifying the original', () => {
    const obj = { a: 1, b: 2, c: 3 };
    omit(obj, ['a']);
    expect(obj).toEqual({ a: 1, b: 2, c: 3 });
  });

  test('should handle non-existent keys gracefully', () => {
    const obj = { a: 1, b: 2 };
    expect(omit(obj, ['c'])).toEqual({ a: 1, b: 2 });
  });

  test('should return an empty object if input is null or not an object', () => {
    expect(omit(null, ['a'])).toEqual({});
    expect(omit(undefined, ['a'])).toEqual({});
    expect(omit('string', ['a'])).toEqual({});
    expect(omit(123, ['a'])).toEqual({});
  });

  test('should return the same object if no keys are specified', () => {
    const obj = { a: 1, b: 2 };
    expect(omit(obj, [])).toEqual({ a: 1, b: 2 });
  });
});