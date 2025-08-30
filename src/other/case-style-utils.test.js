import { camelCase, kebabCase, snakeCase, startCase, pascalCase, toggleCase, pascalCaseToKebabCase, pascalCaseToSnakeCase } from './case-style-utils.js';

describe('Case Style Utilities', () => {

  describe('camelCase', () => {
    it('should convert various strings to camelCase', () => {
      expect(camelCase('foo-bar')).toBe('fooBar');
      expect(camelCase('foo_bar')).toBe('fooBar');
      expect(camelCase('Foo Bar')).toBe('fooBar');
      expect(camelCase('--FOO-BAR--')).toBe('fooBar');
      expect(camelCase('__FOO_BAR__')).toBe('fooBar');
    });
  });

  describe('kebabCase', () => {
    it('should convert various strings to kebab-case', () => {
      expect(kebabCase('fooBar')).toBe('foo-bar');
      expect(kebabCase('FooBar')).toBe('foo-bar');
      expect(kebabCase('__FOO_BAR__')).toBe('foo-bar');
      expect(kebabCase('foo bar')).toBe('foo-bar');
    });
  });

  describe('snakeCase', () => {
    it('should convert various strings to snake_case', () => {
      expect(snakeCase('fooBar')).toBe('foo_bar');
      expect(snakeCase('FooBar')).toBe('foo_bar');
      expect(snakeCase('--FOO-BAR--')).toBe('foo_bar');
      expect(snakeCase('foo bar')).toBe('foo_bar');
    });
  });

  describe('startCase', () => {
    it('should convert various strings to Start Case', () => {
      expect(startCase('foo-bar')).toBe('Foo Bar');
      expect(startCase('foo_bar')).toBe('Foo Bar');
      expect(startCase('__FOO_BAR__')).toBe('Foo Bar');
      expect(startCase('foo bar')).toBe('Foo Bar');
    });
  });

  describe('pascalCase', () => {
    it('should convert various strings to PascalCase', () => {
      expect(pascalCase('foo-bar')).toBe('FooBar');
      expect(pascalCase('foo_bar')).toBe('FooBar');
      expect(pascalCase('Foo Bar')).toBe('FooBar');
      expect(pascalCase('--FOO-BAR--')).toBe('FooBar');
      expect(pascalCase('__FOO_BAR__')).toBe('FooBar');
      expect(pascalCase('fooBar')).toBe('FooBar'); // Already camelCase
      expect(pascalCase('FooBar')).toBe('FooBar'); // Already PascalCase
    });

    it('should handle empty strings', () => {
      expect(pascalCase('')).toBe('');
    });

    it('should handle non-string inputs', () => {
      expect(pascalCase(null)).toBe('');
      expect(pascalCase(undefined)).toBe('');
      expect(pascalCase(123)).toBe('');
    });
  });

  describe('toggleCase', () => {
    it('should toggle the case of a string', () => {
      expect(toggleCase('Hello World')).toBe('hELLO wORLD');
      expect(toggleCase('hELLO wORLD')).toBe('Hello World');
      expect(toggleCase('123!@#')).toBe('123!@#');
    });

    it('should handle empty strings', () => {
      expect(toggleCase('')).toBe('');
    });

    it('should handle non-string inputs', () => {
      expect(toggleCase(null)).toBe('');
      expect(toggleCase(undefined)).toBe('');
      expect(toggleCase(123)).toBe('');
    });
  });

  describe('pascalCaseToKebabCase', () => {
    it('should convert PascalCase to kebab-case', () => {
      expect(pascalCaseToKebabCase('HelloWorld')).toBe('hello-world');
      expect(pascalCaseToKebabCase('AnotherExampleString')).toBe('another-example-string');
      expect(pascalCaseToKebabCase('APIResponse')).toBe('api-response');
      expect(pascalCaseToKebabCase('SingleWord')).toBe('single-word');
    });

    it('should handle empty strings', () => {
      expect(pascalCaseToKebabCase('')).toBe('');
    });

    it('should handle non-string inputs', () => {
      expect(pascalCaseToKebabCase(null)).toBe('');
      expect(pascalCaseToKebabCase(undefined)).toBe('');
      expect(pascalCaseToKebabCase(123)).toBe('');
    });
  });

  describe('pascalCaseToSnakeCase', () => {
    it('should convert PascalCase to snake_case', () => {
      expect(pascalCaseToSnakeCase('HelloWorld')).toBe('hello_world');
      expect(pascalCaseToSnakeCase('AnotherExampleString')).toBe('another_example_string');
      expect(pascalCaseToSnakeCase('APIResponse')).toBe('api_response');
      expect(pascalCaseToSnakeCase('SingleWord')).toBe('single_word');
    });

    it('should handle empty strings', () => {
      expect(pascalCaseToSnakeCase('')).toBe('');
    });

    it('should handle non-string inputs', () => {
      expect(pascalCaseToSnakeCase(null)).toBe('');
      expect(pascalCaseToSnakeCase(undefined)).toBe('');
      expect(pascalCaseToSnakeCase(123)).toBe('');
    });
  });

  describe('edge cases', () => {
    it('should handle empty strings', () => {
      expect(camelCase('')).toBe('');
      expect(kebabCase('')).toBe('');
      expect(snakeCase('')).toBe('');
      expect(startCase('')).toBe('');
    });

    it('should handle non-string inputs', () => {
      expect(camelCase(null)).toBe('');
      expect(kebabCase(undefined)).toBe('');
      expect(snakeCase(123)).toBe('');
      expect(startCase(null)).toBe('');
    });
  });

});
