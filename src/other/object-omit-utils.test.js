import { omit } from './object-omit-utils.js';

describe('omit', () => {
  it('should create a new object without the specified keys', () => {
    const obj = { a: 1, b: 2, c: 3 };
    const result = omit(obj, ['a', 'c']);
    expect(result).toEqual({ b: 2 });
  });

  it('should not modify the original object', () => {
    const obj = { a: 1, b: 2, c: 3 };
    omit(obj, ['a']);
    expect(obj).toEqual({ a: 1, b: 2, c: 3 });
  });

  it('should handle an empty array of keys', () => {
    const obj = { a: 1, b: 2 };
    const result = omit(obj, []);
    expect(result).toEqual({ a: 1, b: 2 });
  });

  it('should handle keys that do not exist in the object', () => {
    const obj = { a: 1, b: 2 };
    const result = omit(obj, ['c', 'd']);
    expect(result).toEqual({ a: 1, b: 2 });
  });

  it('should return an empty object if all keys are omitted', () => {
    const obj = { a: 1, b: 2 };
    const result = omit(obj, ['a', 'b']);
    expect(result).toEqual({});
  });

  it('should work with an empty source object', () => {
    const obj = {};
    const result = omit(obj, ['a', 'b']);
    expect(result).toEqual({});
  });
});
