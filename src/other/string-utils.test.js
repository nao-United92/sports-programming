import { truncate, toCamelCase } from './string-utils';

describe('String Utilities', () => {
  describe('truncate', () => {
    it('should not truncate a string shorter than the max length', () => {
      expect(truncate('hello', 10)).toBe('hello');
    });

    it('should truncate a string longer than the max length', () => {
      expect(truncate('hello world', 8)).toBe('hello...');
    });

    it('should use a custom suffix', () => {
      expect(truncate('hello world', 8, '!')).toBe('hello w!');
    });

    it('should return the suffix if maxLength is less than or equal to suffix length', () => {
      expect(truncate('hello world', 3)).toBe('...');
      expect(truncate('hello world', 2)).toBe('...');
    });
  });

  describe('toCamelCase', () => {
    it('should convert a kebab-case string to camelCase', () => {
      expect(toCamelCase('hello-world')).toBe('helloWorld');
    });

    it('should convert a snake_case string to camelCase', () => {
      expect(toCamelCase('hello_world')).toBe('helloWorld');
    });

    it('should handle already camelCased strings', () => {
      expect(toCamelCase('helloWorld')).toBe('helloWorld');
    });

    it('should handle strings with leading dashes or underscores', () => {
      expect(toCamelCase('--hello-world')).toBe('--helloWorld');
      expect(toCamelCase('__hello_world')).toBe('__helloWorld');
    });

    it('should handle strings with mixed cases', () => {
      expect(toCamelCase('foo-bar-baz')).toBe('fooBarBaz');
      expect(toCamelCase('FOO_BAR_BAZ')).toBe('FOOBarBaz');
    });
  });
});