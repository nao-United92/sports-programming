import stringCapitalize from './string-capitalize';

describe('stringCapitalize', () => {
  test('should capitalize the first letter of a word', () => {
    expect(stringCapitalize('hello')).toBe('Hello');
  });

  test('should capitalize the first letter of a sentence', () => {
    expect(stringCapitalize('hello world')).toBe('Hello world');
  });

  test('should return an empty string for an empty input', () => {
    expect(stringCapitalize('')).toBe('');
  });

  test('should handle a single character string', () => {
    expect(stringCapitalize('a')).toBe('A');
  });

  test('should not change an already capitalized string', () => {
    expect(stringCapitalize('Hello')).toBe('Hello');
  });

  test('should handle strings with numbers or special characters at the beginning', () => {
    expect(stringCapitalize('1abc')).toBe('1abc');
    expect(stringCapitalize('@xyz')).toBe('@xyz');
  });
});