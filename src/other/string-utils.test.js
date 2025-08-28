import { truncate, slugify } from './string-utils';

describe('String Utilities', () => {
  // truncate tests
  describe('truncate', () => {
    test('should not truncate if string is shorter than length', () => {
      expect(truncate('hello', 10)).toBe('hello');
    });

    test('should not truncate if string is equal to length', () => {
      expect(truncate('hello', 5)).toBe('hello');
    });

    test('should truncate string if it is longer than length', () => {
      expect(truncate('hello world', 5)).toBe('hello...');
    });
  });

  // slugify tests
  describe('slugify', () => {
    test('should convert spaces to hyphens', () => {
      expect(slugify('hello world')).toBe('hello-world');
    });

    test('should convert to lower case', () => {
      expect(slugify('Hello World')).toBe('hello-world');
    });

    test('should remove special characters', () => {
      expect(slugify('hello world! 123')).toBe('hello-world-123');
    });

    test('should handle multiple spaces', () => {
      expect(slugify('hello   world')).toBe('hello-world');
    });
  });
});
