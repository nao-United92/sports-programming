import {
  capitalize,
  truncate,
  kebabCase,
  camelCase,
  stripHtml,
} from './string-utils';

describe('string-utils', () => {
  describe('capitalize', () => {
    it('should capitalize the first letter and lowercase the rest', () => {
      expect(capitalize('hello world')).toBe('Hello world');
      expect(capitalize('HELLO WORLD')).toBe('Hello world');
      expect(capitalize('single')).toBe('Single');
    });

    it('should return an empty string for non-string inputs', () => {
      expect(capitalize(null)).toBe('');
      expect(capitalize(undefined)).toBe('');
      expect(capitalize(123)).toBe('');
      expect(capitalize('')).toBe('');
    });
  });

  describe('truncate', () => {
    it('should truncate a string to the specified length with default suffix', () => {
      expect(truncate('The quick brown fox jumps over the lazy dog', 20)).toBe('The quick brown fo...');
    });

    it('should truncate a string with a custom suffix', () => {
      expect(truncate('The quick brown fox', 10, '--')).toBe('The quic--');
    });

    it('should not truncate if string is shorter than maxLength', () => {
      expect(truncate('Short string', 20)).toBe('Short string');
    });

    it('should return an empty string for non-string inputs', () => {
      expect(truncate(null, 10)).toBe('');
      expect(truncate(undefined, 10)).toBe('');
      expect(truncate(123, 10)).toBe('');
    });
  });

  describe('kebabCase', () => {
    it('should convert a string to kebab-case', () => {
      expect(kebabCase('HelloWorld')).toBe('hello-world');
      expect(kebabCase('helloWorld')).toBe('hello-world');
      expect(kebabCase('hello-world')).toBe('hello-world');
      expect(kebabCase('hello_world')).toBe('hello-world');
      expect(kebabCase('Hello World')).toBe('hello-world');
      expect(kebabCase('  Hello   World  ')).toBe('hello-world');
      expect(kebabCase('XMLHttpRequest')).toBe('xml-http-request');
    });

    it('should return an empty string for non-string inputs', () => {
      expect(kebabCase(null)).toBe('');
      expect(kebabCase(undefined)).toBe('');
      expect(kebabCase(123)).toBe('');
    });
  });

  describe('camelCase', () => {
    it('should convert a string to camelCase', () => {
      expect(camelCase('hello-world')).toBe('helloWorld');
      expect(camelCase('Hello World')).toBe('helloWorld');
      expect(camelCase('hello_world')).toBe('helloWorld');
      expect(camelCase('foo-bar-baz')).toBe('fooBarBaz');
      expect(camelCase('FooBarBaz')).toBe('fooBarBaz');
      expect(camelCase('XMLHttpRequest')).toBe('xmlHttpRequest');
    });

    it('should return an empty string for non-string inputs', () => {
      expect(camelCase(null)).toBe('');
      expect(camelCase(undefined)).toBe('');
      expect(camelCase(123)).toBe('');
    });
  });

  describe('stripHtml', () => {
    it('should remove HTML tags from a string', () => {
      expect(stripHtml('<p>Hello <strong>World</strong>!</p>')).toBe('Hello World!');
      expect(stripHtml('<div>Line 1<br>Line 2</div>')).toBe('Line 1Line 2');
      expect(stripHtml('No HTML here.')).toBe('No HTML here.');
    });

    it('should handle malformed HTML gracefully', () => {
      expect(stripHtml('<p>Unclosed tag')).toBe('Unclosed tag');
    });

    it('should return an empty string for non-string inputs', () => {
      expect(stripHtml(null)).toBe('');
      expect(stripHtml(undefined)).toBe('');
      expect(stripHtml(123)).toBe('');
    });
  });
});