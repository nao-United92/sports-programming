import { reverseString } from './string-reverse';

describe('reverseString', () => {
  test('reverses a standard string', () => {
    expect(reverseString('hello')).toBe('olleh');
  });

  test('handles empty strings', () => {
    expect(reverseString('')).toBe('');
  });

  test('returns empty string for non-string inputs', () => {
    expect(reverseString(null)).toBe('');
    expect(reverseString(undefined)).toBe('');
    expect(reverseString(123)).toBe('');
  });

  test('handles strings with spaces', () => {
    expect(reverseString('a b c')).toBe('c b a');
  });
});
