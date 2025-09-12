import { trim } from './string-trim-utils';

describe('trim', () => {
  it('should trim leading and trailing whitespace by default', () => {
    expect(trim('  hello world  ')).toBe('hello world');
    expect(trim('\t\n hello \t\n')).toBe('hello');
  });

  it('should return an empty string for null or undefined input', () => {
    expect(trim(null)).toBe('');
    expect(trim(undefined)).toBe('');
  });

  it('should trim specified characters', () => {
    expect(trim('_-abc-_', '_-')).toBe('abc');
    expect(trim('...hello...', '.')).toBe('hello');
  });

  it('should handle strings with no leading/trailing characters to trim', () => {
    expect(trim('hello world')).toBe('hello world');
    expect(trim('abc', 'xyz')).toBe('abc');
  });

  it('should handle empty strings', () => {
    expect(trim('')).toBe('');
    expect(trim('', 'abc')).toBe('');
  });

  it('should handle trimming characters that are part of the string content', () => {
    expect(trim('abcabc', 'abc')).toBe('');
    expect(trim('abccba', 'abc')).toBe('');
  });
});