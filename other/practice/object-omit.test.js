import { omit } from './object-omit.js';

describe('omit', () => {
  it('should omit specified keys from an object', () => {
    const obj = { a: 1, b: 2, c: 3 };
    const keys = ['a', 'c'];
    const expected = { b: 2 };
    expect(omit(obj, keys)).toEqual(expected);
  });

  it('should handle non-existent keys gracefully', () => {
    const obj = { a: 1, b: 2 };
    const keys = ['c', 'd'];
    const expected = { a: 1, b: 2 };
    expect(omit(obj, keys)).toEqual(expected);
  });

  it('should return the original object if no keys are provided', () => {
    const obj = { a: 1, b: 2 };
    expect(omit(obj, [])).toEqual(obj);
  });

  it('should return an empty object if the input object is empty', () => {
    expect(omit({}, ['a'])).toEqual({});
  });
});