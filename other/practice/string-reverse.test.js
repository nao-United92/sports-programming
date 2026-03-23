import { reverse } from './string-reverse.js';

describe('reverse', () => {
  test('should reverse a string', () => {
    expect(reverse('hello')).toBe('olleh');
    expect(reverse('world')).toBe('dlrow');
  });

  test('should return empty string for non-string input', () => {
    expect(reverse(null)).toBe('');
    expect(reverse(123)).toBe('');
  });

  test('should handle empty string', () => {
    expect(reverse('')).toBe('');
  });
  
  test('should handle palindromes', () => {
    expect(reverse('racecar')).toBe('racecar');
  });
});
