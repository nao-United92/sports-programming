import isAnagram from './string-is-anagram-utils';

describe('isAnagram', () => {
  test('should return true for anagrams', () => {
    expect(isAnagram('listen', 'silent')).toBe(true);
    expect(isAnagram('Debit card', 'Bad credit')).toBe(true);
    expect(isAnagram('Astronomer', 'Moon starer')).toBe(true);
    expect(isAnagram("A decimal point", "I'm a dot in place")).toBe(true);
    expect(isAnagram('', '')).toBe(true);
  });

  test('should return false for non-anagrams', () => {
    expect(isAnagram('hello', 'world')).toBe(false);
    expect(isAnagram('abc', 'abcd')).toBe(false);
    expect(isAnagram('aab', 'baa')).toBe(true); // Testing sorting for same length, different order
  });

  test('should ignore case and non-alphanumeric characters', () => {
    expect(isAnagram('Madam Curie', 'Radium came')).toBe(true);
    expect(isAnagram('funeral', 'real fun')).toBe(true);
  });

  test('should throw an error if arguments are not strings', () => {
    expect(() => isAnagram(null, 'silent')).toThrow(TypeError);
    expect(() => isAnagram('listen', null)).toThrow(TypeError);
    expect(() => isAnagram(123, 'silent')).toThrow(TypeError);
    expect(() => isAnagram('listen', 456)).toThrow(TypeError);
  });
});
