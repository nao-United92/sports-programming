import { truncate, slugify } from './string-utils.js';

describe('String Utilities', () => {
  describe('truncate', () => {
    test('should truncate a string that is too long', () => {
      expect(truncate('hello world', 5)).toBe('hello...');
    });

    test('should not truncate a string that is short enough', () => {
      expect(truncate('hello', 10)).toBe('hello');
    });

    test('should handle edge case where length is equal to num', () => {
      expect(truncate('hello', 5)).toBe('hello');
    });
  });

  describe('slugify', () => {
    test('should convert a string to a slug', () => {
      expect(slugify('Hello World!')).toBe('hello-world');
    });

    test('should handle multiple spaces and hyphens', () => {
      expect(slugify('  --hello--world--  ')).toBe('hello-world');
    });

    test('should remove special characters', () => {
      expect(slugify('!@#$%^&*()hello_world')).toBe('hello-world');
    });
  });
});