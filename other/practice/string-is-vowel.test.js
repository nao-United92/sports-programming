import { isVowel } from './string-is-vowel';

describe('isVowel', () => {
  test('should return true for vowels', () => {
    expect(isVowel('a')).toBe(true);
    expect(isVowel('E')).toBe(true);
    expect(isVowel('i')).toBe(true);
    expect(isVowel('O')).toBe(true);
    expect(isVowel('u')).toBe(true);
  });

  test('should return false for non-vowels', () => {
    expect(isVowel('b')).toBe(false);
    expect(isVowel('z')).toBe(false);
    expect(isVowel('1')).toBe(false);
    expect(isVowel(' ')).toBe(false);
    expect(isVowel('ae')).toBe(false);
  });
});
