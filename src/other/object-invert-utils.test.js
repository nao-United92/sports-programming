import { invert } from './object-invert-utils';

describe('invert', () => {
  it('should invert the keys and values of an object', () => {
    const object = { 'a': 1, 'b': 2, 'c': 3 };
    expect(invert(object)).toEqual({ '1': 'a', '2': 'b', '3': 'c' });
  });

  it('should handle duplicate values by overwriting previous assignments', () => {
    const object = { 'a': 1, 'b': 2, 'c': 1 };
    expect(invert(object)).toEqual({ '1': 'c', '2': 'b' });
  });

  it('should handle empty objects', () => {
    expect(invert({})).toEqual({});
  });

  it('should handle null or undefined objects', () => {
    expect(invert(null)).toEqual({});
    expect(invert(undefined)).toEqual({});
  });

  it('should convert non-string values to strings as keys', () => {
    const object = { 'a': 1, 'b': true, 'c': null };
    expect(invert(object)).toEqual({ '1': 'a', 'true': 'b', 'null': 'c' });
  });
});