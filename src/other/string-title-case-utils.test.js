import { toTitleCase } from './string-title-case-utils.js';

describe('toTitleCase', () => {
  it('should convert a single word to title case', () => {
    expect(toTitleCase('hello')).toBe('Hello');
  });

  it('should convert a sentence to title case', () => {
    expect(toTitleCase('hello world')).toBe('Hello World');
  });

  it('should handle already title cased strings', () => {
    expect(toTitleCase('Hello World')).toBe('Hello World');
  });

  it('should handle strings with mixed case', () => {
    expect(toTitleCase('hELLo wORLd')).toBe('Hello World');
  });

  it('should handle strings with multiple spaces', () => {
    expect(toTitleCase('  hello   world  ')).toBe('  Hello   World  ');
  });

  it('should handle empty strings', () => {
    expect(toTitleCase('')).toBe('');
  });

  it('should handle non-string inputs', () => {
    expect(toTitleCase(null)).toBe('');
    expect(toTitleCase(undefined)).toBe('');
    expect(toTitleCase(123)).toBe('');
  });

  it('should handle strings with special characters', () => {
    expect(toTitleCase('hello-world')).toBe('Hello-world');
    expect(toTitleCase('hello_world')).toBe('Hello_world');
  });
});