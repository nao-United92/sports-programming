import { truncate, slugify } from './string-utils';

describe('String Utilities', () => {
  describe('truncate', () => {
    it('should not truncate a string shorter than the specified length', () => {
      expect(truncate('hello', 10)).toBe('hello');
    });

    it('should truncate a string longer than the specified length', () => {
      expect(truncate('hello world', 8)).toBe('hello...');
    });

    it('should use a custom suffix', () => {
      expect(truncate('hello world', 8, '--')).toBe('hello --');
    });

    it('should handle edge cases', () => {
      expect(truncate('hello', 5)).toBe('hello');
      expect(truncate('hello', 4)).toBe('h...');
    });
  });

  describe('slugify', () => {
    it('should convert a string to a slug', () => {
      expect(slugify('Hello World')).toBe('hello-world');
    });

    it('should remove special characters', () => {
      expect(slugify('Hello World! 123')).toBe('hello-world-123');
    });

    it('should handle multiple spaces', () => {
      expect(slugify('Hello   World')).toBe('hello-world');
    });
  });
});
