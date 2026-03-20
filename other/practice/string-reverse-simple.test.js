import { reverseString } from './string-reverse-simple';

describe('reverseString', () => {
  test('reverses a string', () => {
    expect(reverseString('hello')).toBe('olleh');
    expect(reverseString('world')).toBe('dlrow');
  });

  test('returns empty string for empty input', () => {
    expect(reverseString('')).toBe('');
  });
});
