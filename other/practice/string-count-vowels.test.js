import stringCountVowels from './string-count-vowels';

describe('stringCountVowels', () => {
  test('should count vowels in a simple string', () => {
    expect(stringCountVowels('hello')).toBe(2);
  });

  test('should count vowels case-insensitively', () => {
    expect(stringCountVowels('HELLO')).toBe(2);
  });

  test('should return 0 for a string with no vowels', () => {
    expect(stringCountVowels('rhythm')).toBe(0);
  });

  test('should return 0 for an empty string', () => {
    expect(stringCountVowels('')).toBe(0);
  });

  test('should count vowels in a string with mixed characters', () => {
    expect(stringCountVowels('JavaScript is awesome!')).toBe(8);
  });

  test('should handle string with only vowels', () => {
    expect(stringCountVowels('aeiouAEIOU')).toBe(10);
  });

  test('should handle string with only consonants', () => {
    expect(stringCountVowels('bcdfg')).toBe(0);
  });
});
