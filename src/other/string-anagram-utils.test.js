
import { isAnagram } from './string-anagram-utils';

describe('isAnagram', () => {
  test('should return true for valid anagrams', () => {
    expect(isAnagram('listen', 'silent')).toBe(true);
  });

  test('should return true for anagrams with different cases and spacing', () => {
    expect(isAnagram('The Morse Code', 'Here come dots')).toBe(true);
  });

  test('should return false for strings that are not anagrams', () => {
    expect(isAnagram('hello', 'world')).toBe(false);
  });

  test('should return false for strings with different lengths', () => {
    expect(isAnagram('one', 'onetwo')).toBe(false);
  });

  test('should return true for empty strings', () => {
    expect(isAnagram('', '')).toBe(true);
  });

  test('should return false for non-string inputs', () => {
    expect(isAnagram('test', null)).toBe(false);
    expect(isAnagram(undefined, 'test')).toBe(false);
  });
});
