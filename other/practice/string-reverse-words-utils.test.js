import reverseWords from './string-reverse-words-utils';

describe('reverseWords', () => {
  test('should reverse the order of words in a string', () => {
    expect(reverseWords('Hello world')).toBe('world Hello');
    expect(reverseWords('The quick brown fox')).toBe('fox brown quick The');
  });

  test('should handle single word string', () => {
    expect(reverseWords('word')).toBe('word');
  });

  test('should handle empty string', () => {
    expect(reverseWords('')).toBe('');
  });

  test('should handle string with multiple spaces between words', () => {
    expect(reverseWords('  Hello   world  ')).toBe('  world   Hello  ');
  });

  test('should handle leading/trailing spaces', () => {
    expect(reverseWords(' Hello world ')).toBe(' world Hello ');
  });

  test('should throw TypeError if argument is not a string', () => {
    expect(() => reverseWords(null)).toThrow(TypeError);
    expect(() => reverseWords(undefined)).toThrow(TypeError);
    expect(() => reverseWords(123)).toThrow(TypeError);
    expect(() => reverseWords({})).toThrow(TypeError);
  });
});