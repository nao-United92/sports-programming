import { omit } from './object-omit-utils.js';

describe('omit', () => {
  test('should create an object without the specified keys', () => {
    const obj = { a: 1, b: 2, c: 3 };
    expect(omit(obj, ['a', 'c'])).toEqual({ b: 2 });
  });

  test('should not modify the original object', () => {
    const obj = { a: 1, b: 2, c: 3 };
    omit(obj, ['a']);
    expect(obj).toEqual({ a: 1, b: 2, c: 3 });
  });

  test('should return an identical object if no keys are omitted', () => {
    const obj = { a: 1, b: 2 };
    expect(omit(obj, [])).toEqual({ a: 1, b: 2 });
  });

  test('should handle an empty source object', () => {
    expect(omit({}, ['a'])).toEqual({});
  });

  test('should handle non-existent keys without errors', () => {
    const obj = { a: 1, b: 2 };
    expect(omit(obj, ['c', 'd'])).toEqual({ a: 1, b: 2 });
  });

  test('should return an empty object if all keys are omitted', () => {
    const obj = { a: 1, b: 2 };
    expect(omit(obj, ['a', 'b'])).toEqual({});
  });
});
