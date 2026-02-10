import stringReverseWords from './string-reverse-words';

describe('stringReverseWords', () => {
  test('should reverse the order of words in a sentence', () => {
    expect(stringReverseWords('hello world')).toBe('world hello');
  });

  test('should handle multiple spaces between words', () => {
    expect(stringReverseWords('hello   world')).toBe('world   hello');
  });

  test('should handle leading and trailing spaces', () => {
    expect(stringReverseWords('  hello world  ')).toBe('  world hello  ');
  });

  test('should return an empty string for an empty input', () => {
    expect(stringReverseWords('')).toBe('');
  });

  test('should return the same string for a single word', () => {
    expect(stringReverseWords('word')).toBe('word');
  });

  test('should handle punctuation as part of words', () => {
    expect(stringReverseWords('hello, world!')).toBe('world! hello,');
  });
});
