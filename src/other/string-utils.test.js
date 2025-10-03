import { truncate, slugify } from './string-utils.js';

describe('string-utils', () => {
  describe('truncate', () => {
    it('should truncate a string that is longer than the specified length', () => {
      expect(truncate('hello world', 5)).toBe('hello...');
    });

    it('should not truncate a string that is shorter than or equal to the specified length', () => {
      expect(truncate('hello', 5)).toBe('hello');
      expect(truncate('hello', 10)).toBe('hello');
    });

    it('should use a custom suffix if provided', () => {
      expect(truncate('hello world', 5, '--')).toBe('hello--');
    });

    it('should return an empty string for non-string inputs', () => {
      expect(truncate(null, 5)).toBe('');
      expect(truncate(undefined, 5)).toBe('');
      expect(truncate(123, 5)).toBe('');
    });
  });

  describe('slugify', () => {
    it('should convert a string to a slug', () => {
      expect(slugify('Hello World')).toBe('hello-world');
    });

    it('should handle multiple spaces and hyphens', () => {
      expect(slugify('  foo  bar  - baz ')).toBe('foo-bar-baz');
    });

    it('should remove special characters', () => {
      expect(slugify('foo!@#$%^&*()bar')).toBe('foobar');
    });

    it('should return an empty string for non-string inputs', () => {
      expect(slugify(null)).toBe('');
      expect(slugify(undefined)).toBe('');
      expect(slugify(123)).toBe('');
    });
  });
});