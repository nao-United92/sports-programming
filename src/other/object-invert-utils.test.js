import { invert } from './object-invert-utils';

describe('invert', () => {
  it('should invert key-value pairs of an object', () => {
    const object = { 'a': 1, 'b': 2, 'c': 1 };
    expect(invert(object)).toEqual({ '1': 'c', '2': 'b' });
  });

  it('should handle an empty object', () => {
    expect(invert({})).toEqual({});
  });

  it('should handle objects with non-string values', () => {
    const object = { a: 1, b: 'hello', c: true };
    expect(invert(object)).toEqual({ '1': 'a', 'hello': 'b', 'true': 'c' });
  });
});