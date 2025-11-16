import { slugify, truncate, escapeHTML } from './string-helpers.js';

describe('String Helpers', () => {
  describe('slugify', () => {
    test('should convert string to slug', () => {
      expect(slugify('Hello World')).toBe('hello-world');
    });

    test('should handle multiple spaces and hyphens', () => {
      expect(slugify('  --hello--world--  ')).toBe('hello-world');
    });

    test('should remove special characters', () => {
      expect(slugify('!@#$%^&*()hello world?')).toBe('hello-world');
    });
  });

  describe('truncate', () => {
    test('should not truncate if string is shorter than length', () => {
      expect(truncate('hello', 10)).toBe('hello');
    });

    test('should truncate string to specified length', () => {
      expect(truncate('hello world', 8)).toBe('hello...');
    });

    test('should use custom suffix', () => {
      expect(truncate('hello world', 8, '!!!')).toBe('hello!!!');
    });
  });

  describe('escapeHTML', () => {
    test('should escape HTML special characters', () => {
      expect(escapeHTML('<script>"\'&')).toBe('&lt;script&gt;&quot;&#39;&amp;');
    });
  });
});
