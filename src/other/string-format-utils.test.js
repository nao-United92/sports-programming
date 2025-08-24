import { truncateString } from './string-format-utils.js';

describe('String Formatting Utilities', () => {
  describe('truncateString', () => {
    it('should return the original string if it is shorter than maxLength', () => {
      expect(truncateString('hello world', 20)).toBe('hello world');
    });

    it('should return the original string if it is equal to maxLength', () => {
      expect(truncateString('hello world', 11)).toBe('hello world');
    });

    it('should truncate the string and add ellipsis if it is longer than maxLength', () => {
      expect(truncateString('hello world, this is a long string', 20)).toBe('hello world, this...');
    });

    it('should handle maxLength less than 3', () => {
      expect(truncateString('hello', 2)).toBe('he');
      expect(truncateString('hello', 0)).toBe('');
    });

    it('should return an empty string for non-string inputs', () => {
      expect(truncateString(null, 10)).toBe('');
      expect(truncateString(undefined, 10)).toBe('');
      expect(truncateString(123, 10)).toBe('');
      expect(truncateString({}, 10)).toBe('');
    });

    it('should return an empty string for an empty input string', () => {
      expect(truncateString('', 10)).toBe('');
    });
  });
});
