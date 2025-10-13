import { truncate, slugify } from './string-utils';

describe('String Utilities', () => {
  describe('truncate', () => {
    it('should not truncate a string shorter than the specified length', () => {
      expect(truncate('hello world', 20)).toBe('hello world');
    });

    it('should return the original string if length is equal to string length', () => {
      expect(truncate('exact length', 12)).toBe('exact length');
    });

    it('should truncate a string longer than the specified length', () => {
      expect(truncate('hello world, this is a long string', 20)).toBe('hello world, this...');
    });

    it('should use a custom suffix if provided', () => {
      expect(truncate('long string', 10, '...')).toBe('long st...');
    });

    it('should handle edge case where length is less than or equal to suffix length', () => {
      expect(truncate('any string', 3)).toBe('...');
      expect(truncate('any string', 2)).toBe('..');
    });
  });

  describe('slugify', () => {
    it('should convert a string to a slug', () => {
      expect(slugify('Hello World!')).toBe('hello-world');
    });

    it('should handle multiple spaces and hyphens', () => {
      expect(slugify('  --hello--world--  ')).toBe('hello-world');
    });

    it('should remove special characters and convert underscores to hyphens', () => {
      expect(slugify('!@#$%^&*()hello_world')).toBe('hello-world');
    });

    it('should handle leading and trailing hyphens', () => {
      expect(slugify('-hello-world-')).toBe('hello-world');
    });

    it('should handle mixed spaces, underscores and hyphens', () => {
      expect(slugify('  A-b_c  d-e_f ')).toBe('a-b-c-d-e-f');
    });

    it('should return an empty string for non-string inputs', () => {
      expect(slugify(null)).toBe('');
      expect(slugify(undefined)).toBe('');
      expect(slugify(123)).toBe('');
    });
  });
});