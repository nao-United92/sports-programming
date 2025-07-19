import {
  capitalize,
  truncate,
  kebabCase,
  camelCase,
  stripHtml,
  startsWith,
  endsWith,
  reverseString,
  isEmpty,
  isPalindrome,
  countOccurrences,
  escapeHtml,
  toSnakeCase,
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

  describe('startsWith', () => {
    it('should return true if a string starts with the specified substring', () => {
      expect(startsWith('hello world', 'hello')).toBe(true);
    });

    it('should return false if a string does not start with the specified substring', () => {
      expect(startsWith('hello world', 'world')).toBe(false);
    });
  });

  describe('endsWith', () => {
    it('should return true if a string ends with the specified substring', () => {
      expect(endsWith('hello world', 'world')).toBe(true);
    });

    it('should return false if a string does not end with the specified substring', () => {
      expect(endsWith('hello world', 'hello')).toBe(false);
    });
  });

  describe('reverseString', () => {
    it('should reverse a string', () => {
      expect(reverseString('hello')).toBe('olleh');
      expect(reverseString('world')).toBe('dlrow');
    });

    it('should return an empty string for non-string inputs', () => {
      expect(reverseString(null)).toBe('');
      expect(reverseString(undefined)).toBe('');
      expect(reverseString(123)).toBe('');
    });
  });

  describe('isEmpty', () => {
    it('should return true for empty or whitespace-only strings', () => {
      expect(isEmpty('')).toBe(true);
      expect(isEmpty('  ')).toBe(true);
      expect(isEmpty(null)).toBe(true);
      expect(isEmpty(undefined)).toBe(true);
    });

    it('should return false for non-empty strings', () => {
      expect(isEmpty('hello')).toBe(false);
      expect(isEmpty('  hello  ')).toBe(false);
    });
  });

  describe('isPalindrome', () => {
    it('should return true for palindromes', () => {
      expect(isPalindrome('madam')).toBe(true);
      expect(isPalindrome('A man, a plan, a canal: Panama')).toBe(true);
      expect(isPalindrome('racecar')).toBe(true);
      expect(isPalindrome('No lemon, no melon')).toBe(true);
    });

    it('should return false for non-palindromes', () => {
      expect(isPalindrome('hello')).toBe(false);
      expect(isPalindrome('world')).toBe(false);
    });

    it('should handle empty strings and non-string inputs', () => {
      expect(isPalindrome('')).toBe(true);
      expect(isPalindrome(null)).toBe(false);
      expect(isPalindrome(undefined)).toBe(false);
      expect(isPalindrome(123)).toBe(false);
    });
  });

  describe('countOccurrences', () => {
    it('should count occurrences of a substring case-sensitively', () => {
      expect(countOccurrences('hello world hello', 'hello')).toBe(2);
      expect(countOccurrences('Hello world hello', 'hello')).toBe(1);
      expect(countOccurrences('aaaaa', 'aa')).toBe(2);
    });

    it('should count occurrences of a substring case-insensitively', () => {
      expect(countOccurrences('Hello world hello', 'hello', false)).toBe(2);
      expect(countOccurrences('HELLO world HELLO', 'hello', false)).toBe(2);
    });

    it('should return 0 if substring is not found', () => {
      expect(countOccurrences('hello world', 'foo')).toBe(0);
    });

    it('should return 0 for empty string or empty substring', () => {
      expect(countOccurrences('', 'hello')).toBe(0);
      expect(countOccurrences('hello', '')).toBe(0);
    });

    it('should handle non-string inputs', () => {
      expect(countOccurrences(null, 'a')).toBe(0);
      expect(countOccurrences('a', null)).toBe(0);
    });
  });

  describe('escapeHtml', () => {
    it('should escape HTML special characters', () => {
      expect(escapeHtml('<script>alert("xss")</script>')).toBe('&lt;script&gt;alert(&quot;xss&quot;)&lt;&#x2F;script&gt;');
      expect(escapeHtml('Stay tuned for more & great content!')).toBe('Stay tuned for more &amp; great content!');
    });

    it('should return an empty string for non-string inputs', () => {
      expect(escapeHtml(null)).toBe('');
      expect(escapeHtml(undefined)).toBe('');
      expect(escapeHtml(123)).toBe('');
    });
  });

  describe('toSnakeCase', () => {
    it('should convert a string to snake_case', () => {
      expect(toSnakeCase('helloWorld')).toBe('hello_world');
      expect(toSnakeCase('HelloWorld')).toBe('hello_world');
      expect(toSnakeCase('hello-world')).toBe('hello_world');
      expect(toSnakeCase('Hello World')).toBe('hello_world');
      expect(toSnakeCase('  Hello   World  ')).toBe('hello_world');
      expect(toSnakeCase('XMLHttpRequest')).toBe('xml_http_request');
    });

    it('should return an empty string for non-string inputs', () => {
      expect(toSnakeCase(null)).toBe('');
      expect(toSnakeCase(undefined)).toBe('');
      expect(toSnakeCase(123)).toBe('');
    });
  });
});
