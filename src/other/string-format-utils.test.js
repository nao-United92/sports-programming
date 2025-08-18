import { truncate, slugify } from './string-format-utils';

describe('String Format Utilities', () => {
  describe('truncate', () => {
    it('should not truncate a string shorter than the specified length', () => {
      expect(truncate('hello', 10)).toBe('hello');
    });

    it('should truncate a string longer than the specified length', () => {
      expect(truncate('hello world', 8)).toBe('hello...');
    });

    it('should use a custom omission string', () => {
      expect(truncate('hello world', 8, '...')).toBe('hello...');
    });

    it('should handle edge cases where length is less than or equal to omission length', () => {
      expect(truncate('hello world', 3)).toBe('...');
      expect(truncate('hello world', 2)).toBe('...');
    });
  });

  describe('slugify', () => {
    it('should convert a simple string to a slug', () => {
      expect(slugify('Hello World')).toBe('hello-world');
    });

    it('should handle multiple spaces', () => {
      expect(slugify('  Hello   World  ')).toBe('hello-world');
    });

    it('should remove special characters', () => {
      expect(slugify('Hello World!@#$%^&*()')).toBe('hello-world');
    });

    it('should handle multiple hyphens', () => {
      expect(slugify('Hello--World')).toBe('hello-world');
    });
  });
});