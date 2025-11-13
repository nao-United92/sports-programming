const { camelCase, kebabCase, truncate } = require('./string-enhancements.js');

describe('String Enhancements', () => {
  describe('camelCase', () => {
    test('should convert kebab-case to camelCase', () => {
      expect(camelCase('hello-world')).toBe('helloWorld');
    });

    test('should convert snake_case to camelCase', () => {
      expect(camelCase('__FOO_BAR__')).toBe('fooBar');
    });

    test('should convert space-separated to camelCase', () => {
      expect(camelCase('Some text here')).toBe('someTextHere');
    });

    test('should handle empty or null strings', () => {
      expect(camelCase('')).toBe('');
      expect(camelCase(null)).toBe('');
    });
  });

  describe('kebabCase', () => {
    test('should convert camelCase to kebab-case', () => {
      expect(kebabCase('camelCase')).toBe('camel-case');
    });

    test('should convert space-separated to kebab-case', () => {
      expect(kebabCase('Some Text')).toBe('some-text');
    });

    test('should convert snake_case to kebab-case', () => {
      expect(kebabCase('__FOO_BAR__')).toBe('foo-bar');
    });

    test('should handle empty or null strings', () => {
        expect(kebabCase('')).toBe('');
        expect(kebabCase(null)).toBe('');
    });
  });

  describe('truncate', () => {
    const text = 'This is a long string to be truncated.';

    test('should truncate a string to a specified length', () => {
      expect(truncate(text, 20)).toBe('This is a long ...');
    });

    test('should not truncate if length is greater than string length', () => {
      expect(truncate(text, 100)).toBe(text);
    });

    test('should use custom omission string', () => {
      expect(truncate(text, 20, '... (more)')).toBe('This is a ... (more)');
    });

    test('should return only omission if length is too small', () => {
      expect(truncate(text, 3)).toBe('...');
    });

     test('should handle empty or null strings', () => {
      expect(truncate('')).toBe('');
      expect(truncate(null, 10)).toBe('');
    });
  });
});
