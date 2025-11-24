import { reverseWords } from './string-reverse-words-utils';

describe('reverseWords', () => {
  test('should reverse the order of words in a string', () => {
    expect(reverseWords('hello world')).toBe('world hello');
  });

  test('should handle multiple spaces between words', () => {
    expect(reverseWords('hello   world')).toBe('world hello');
  });

  test('should handle leading and trailing spaces', () => {
    expect(reverseWords('  hello world  ')).toBe('world hello');
  });

  test('should handle a single word', () => {
    expect(reverseWords('hello')).toBe('hello');
  });

  test('should handle an empty string', () => {
    expect(reverseWords('')).toBe('');
  });

  test('should throw an error if the input is not a string', () => {
    expect(() => reverseWords(123)).toThrow(TypeError);
    expect(() => reverseWords(null)).toThrow(TypeError);
    expect(() => reverseWords(undefined)).toThrow(TypeError);
  });
});
