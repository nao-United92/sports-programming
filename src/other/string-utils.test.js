import { truncate, slugify } from './string-utils.js';

describe('String Utilities', () => {
  describe('truncate', () => {
    test('should truncate a string that is longer than the specified length', () => {
      expect(truncate('Hello world, this is a long string', 11)).toBe('Hello world...');
    });

    test('should not truncate a string that is shorter than or equal to the specified length', () => {
      expect(truncate('Hello world', 11)).toBe('Hello world');
    });

    test('should allow a custom suffix', () => {
      expect(truncate('Hello world', 5, '... more')).toBe('Hello... more');
    });
  });

  describe('slugify', () => {
    test('should convert a string to a slug', () => {
      expect(slugify('Hello World!')).toBe('hello-world');
    });

    test('should handle multiple spaces and trim', () => {
      expect(slugify('  leading and trailing spaces  ')).toBe('leading-and-trailing-spaces');
    });

    test('should handle underscores', () => {
      expect(slugify('foo_bar_baz')).toBe('foo-bar-baz');
    });

    test('should handle multiple hyphens', () => {
      expect(slugify('foo--bar---baz')).toBe('foo-bar-baz');
    });

    test('should remove special characters', () => {
      expect(slugify('!@#$%^&*()=+`~[]{}|;:",./<>?')).toBe('');
    });

    test('should remove leading and trailing hyphens', () => {
      expect(slugify('-foo-bar-')).toBe('foo-bar');
    });

    test('should handle a mix of operations', () => {
      expect(slugify('__-Foo bar-baz!@#-')).toBe('foo-bar-baz');
    });
  });
});
