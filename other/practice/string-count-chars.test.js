import stringCountChars from './string-count-chars';

describe('stringCountChars', () => {
  test('should count characters in a simple string', () => {
    expect(stringCountChars('hello')).toEqual({ h: 1, e: 1, l: 2, o: 1 });
  });

  test('should handle strings with spaces', () => {
    expect(stringCountChars('hello world')).toEqual({ h: 1, e: 1, l: 3, o: 2, ' ': 1, w: 1, r: 1, d: 1 });
  });

  test('should return an empty object for an empty string', () => {
    expect(stringCountChars('')).toEqual({});
  });

  test('should count case-sensitive characters separately', () => {
    expect(stringCountChars('Hello')).toEqual({ H: 1, e: 1, l: 2, o: 1 });
  });

  test('should handle numbers and special characters', () => {
    expect(stringCountChars('123!@#abc')).toEqual({ '1': 1, '2': 1, '3': 1, '!': 1, '@': 1, '#': 1, a: 1, b: 1, c: 1 });
  });

  test('should handle a single character string', () => {
    expect(stringCountChars('a')).toEqual({ a: 1 });
  });
});
