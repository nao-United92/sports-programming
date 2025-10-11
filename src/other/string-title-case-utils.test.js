import { titleCase } from './string-title-case-utils.js';

describe('titleCase', () => {
  test('should convert a string to title case', () => {
    expect(titleCase('hello world')).toBe('Hello World');
    expect(titleCase('this is a test string')).toBe('This Is A Test String');
    expect(titleCase('another-example-string')).toBe('Another-Example-String');
    expect(titleCase('already Title Case')).toBe('Already Title Case');
  });

  test('should handle empty string', () => {
    expect(titleCase('')).toBe('');
  });

  test('should handle single word string', () => {
    expect(titleCase('word')).toBe('Word');
  });

  test('should return empty string for non-string inputs', () => {
    expect(titleCase(123)).toBe('');
    expect(titleCase(null)).toBe('');
    expect(titleCase(undefined)).toBe('');
  });
});
