import { toSentenceCase } from './string-sentence-case-utils.js';

describe('toSentenceCase', () => {
  it('should convert a simple lowercase string to sentence case', () => {
    expect(toSentenceCase('hello world')).toBe('Hello world');
  });

  it('should handle a string that is already in sentence case', () => {
    expect(toSentenceCase('Hello world')).toBe('Hello world');
  });

  it('should convert an uppercase string to sentence case', () => {
    expect(toSentenceCase('HELLO WORLD')).toBe('Hello world');
  });

  it('should convert a mixed-case string to sentence case', () => {
    expect(toSentenceCase('hELLo wORLd')).toBe('Hello world');
  });

  it('should return an empty string for an empty input', () => {
    expect(toSentenceCase('')).toBe('');
  });

  it('should handle a string with leading/trailing whitespace', () => {
    expect(toSentenceCase('  hello world  ')).toBe('Hello world');
  });

  it('should handle a string with numbers and special characters', () => {
    expect(toSentenceCase('123 test!@#')).toBe('123 test!@#');
    expect(toSentenceCase('another-test_string')).toBe('Another-test_string');
  });

  it('should return an empty string for null or undefined input', () => {
    expect(toSentenceCase(null)).toBe('');
    expect(toSentenceCase(undefined)).toBe('');
  });

  it('should return an empty string for non-string input', () => {
    expect(toSentenceCase(123)).toBe('');
    expect(toSentenceCase({})).toBe('');
    expect(toSentenceCase([])).toBe('');
  });
});
