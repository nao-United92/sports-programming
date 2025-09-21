import { truncate } from './string-utils.js';

describe('string-utils', () => {
  describe('truncate', () => {
    test('should not truncate a string shorter than the specified length', () => {
      expect(truncate('hello', 10)).toBe('hello');
    });

    test('should not truncate a string equal to the specified length', () => {
      expect(truncate('hello world', 11)).toBe('hello world');
    });

    test('should truncate a string longer than the specified length', () => {
      expect(truncate('hello world', 8)).toBe('hello...');
    });

    test('should use a custom suffix if provided', () => {
      expect(truncate('hello world', 8, '... more')).toBe('he... more');
    });

    test('should return an empty string if the length is less than or equal to the suffix length', () => {
      expect(truncate('hello world', 3)).toBe('...');
    });

    test('should handle empty strings', () => {
      expect(truncate('', 10)).toBe('');
    });
  });
});
