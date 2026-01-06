const normalizeWhitespace = require('./string-normalize-whitespace-utils');

describe('normalizeWhitespace', () => {
  test('should remove leading and trailing whitespace', () => {
    expect(normalizeWhitespace('  hello world  ')).toBe('hello world');
  });

  test('should reduce multiple internal spaces to a single space', () => {
    expect(normalizeWhitespace('hello   world')).toBe('hello world');
    expect(normalizeWhitespace('hello\t\tworld')).toBe('hello world');
    expect(normalizeWhitespace('hello\n\rworld')).toBe('hello world');
    expect(normalizeWhitespace('hello   \t\n world')).toBe('hello world');
  });

  test('should handle string with only whitespace', () => {
    expect(normalizeWhitespace('   \t\n   ')).toBe('');
  });

  test('should handle empty string', () => {
    expect(normalizeWhitespace('')).toBe('');
  });

  test('should return original string if no extra whitespace', () => {
    expect(normalizeWhitespace('hello world')).toBe('hello world');
    expect(normalizeWhitespace('singleword')).toBe('singleword');
  });

  test('should return empty string for non-string input', () => {
    expect(normalizeWhitespace(null)).toBe('');
    expect(normalizeWhitespace(undefined)).toBe('');
    expect(normalizeWhitespace(123)).toBe('');
    expect(normalizeWhitespace({})).toBe('');
  });
});
