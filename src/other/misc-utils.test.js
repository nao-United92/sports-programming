import { truncate, invert } from './misc-utils.js';

describe('misc-utils', () => {
  describe('truncate', () => {
    const text = 'abcdefghijklmnopqrstuvwxyz';

    it('should not truncate if string is shorter than length', () => {
      expect(truncate(text, 30)).toBe(text);
    });

    it('should truncate the string to the specified length', () => {
      expect(truncate(text, 10)).toBe('abcdefg...');
    });

    it('should use a custom omission string', () => {
      expect(truncate(text, 10, '-->')).toBe('abcdefg-->');
    });

    it('should return only the omission if length is too small', () => {
      expect(truncate(text, 3)).toBe('...');
      expect(truncate(text, 2)).toBe('...');
    });

    it('should handle null or undefined input', () => {
      expect(truncate(null, 10)).toBe('');
      expect(truncate(undefined, 10)).toBe('');
    });
  });

  describe('invert', () => {
    it('should invert the keys and values of an object', () => {
      const obj = { a: '1', b: '2', c: '3' };
      expect(invert(obj)).toEqual({ '1': 'a', '2': 'b', '3': 'c' });
    });

    it('should handle later properties overwriting earlier ones if values are the same', () => {
      const obj = { a: '1', b: '2', c: '1' };
      expect(invert(obj)).toEqual({ '1': 'c', '2': 'b' });
    });

    it('should return an empty object for null or non-object inputs', () => {
      expect(invert(null)).toEqual({});
      expect(invert(undefined)).toEqual({});
      expect(invert(123)).toEqual({});
    });
  });
});
