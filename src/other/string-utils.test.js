const { truncate, slugify } = require('./string-utils.js');

describe('string-utils', () => {
  describe('truncate', () => {
    it('should truncate a string that is longer than the specified length', () => {
      expect(truncate('hello world', 8)).toBe('hello...');
    });

    it('should not truncate a string that is shorter than or equal to the specified length', () => {
      expect(truncate('hello', 8)).toBe('hello');
      expect(truncate('hello', 5)).toBe('hello');
    });

    it('should use a custom suffix if provided', () => {
      expect(truncate('hello world', 9, '...more')).toBe('hel...more');
    });

    it('should return an empty string if input is empty', () => {
      expect(truncate('', 5)).toBe('');
    });

    it('should handle truncation to a very short length', () => {
      expect(truncate('hello', 4)).toBe('h...');
      expect(truncate('hello', 3)).toBe('...');
    });
  });

  describe('slugify', () => {
    it('should convert a string with spaces to a slug', () => {
      expect(slugify('Hello World')).toBe('hello-world');
    });

    it('should remove special characters from the beginning and end of the string', () => {
      expect(slugify('!@#$Hello%^&*()=+_World`~[]{}|;:\',.<>/?')).toBe('helloworld');
    });

    it('should handle multiple spaces between words', () => {
      expect(slugify('hello   world')).toBe('hello-world');
    });

    it('should handle leading and trailing spaces', () => {
      expect(slugify('  hello world  ')).toBe('hello-world');
    });

    it('should handle strings with mixed case', () => {
      expect(slugify('HeLLo WoRLD')).toBe('hello-world');
    });

    it('should return an empty string if input is only special characters and spaces', () => {
      expect(slugify('  !@#$  ')).toBe('');
    });
  });
});
