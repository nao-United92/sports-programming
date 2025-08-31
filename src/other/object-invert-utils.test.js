import { invert } from './object-invert-utils.js';

describe('invert', () => {
  it('should invert keys and values', () => {
    const object = { 'a': 1, 'b': 2 };
    expect(invert(object)).toEqual({ '1': 'a', '2': 'b' });
  });

  it('should handle an empty object', () => {
    expect(invert({})).toEqual({});
  });

  it('should handle null or undefined input', () => {
    expect(invert(null)).toEqual({});
    expect(invert(undefined)).toEqual({});
  });

  it('should overwrite keys with the last value', () => {
    const object = { 'a': 1, 'b': 2, 'c': 1 };
    expect(invert(object)).toEqual({ '1': 'c', '2': 'b' });
  });
});
