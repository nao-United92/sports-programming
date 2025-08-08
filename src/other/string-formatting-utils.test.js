import { escapeHTML, toTitleCase } from './string-formatting-utils.js';

describe('escapeHTML', () => {
  test('should escape HTML special characters', () => {
    expect(escapeHTML('<div class="test">Hello & World</div>')).toBe('&lt;div class=&quot;test&quot;&gt;Hello &amp; World&lt;&#x2F;div&gt;');
  });

  test('should handle empty string', () => {
    expect(escapeHTML('')).toBe('');
  });

  test('should handle non-string input', () => {
    expect(escapeHTML(null)).toBe('');
    expect(escapeHTML(undefined)).toBe('');
    expect(escapeHTML(123)).toBe('123');
  });
});

describe('toTitleCase', () => {
  test('should convert a string to title case', () => {
    expect(toTitleCase('hello world')).toBe('Hello World');
    expect(toTitleCase('this is a test string')).toBe('This Is A Test String');
    expect(toTitleCase('another-example-string')).toBe('Another-example-string');
    expect(toTitleCase('already Title Case')).toBe('Already Title Case');
  });

  test('should handle empty string', () => {
    expect(toTitleCase('')).toBe('');
  });

  test('should handle single word string', () => {
    expect(toTitleCase('word')).toBe('Word');
    expect(toTitleCase('WORD')).toBe('Word');
  });

  test('should return empty string for non-string inputs', () => {
      expect(toTitleCase(null)).toBe('');
      expect(toTitleCase(undefined)).toBe('');
  });
});
