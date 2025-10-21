import { words } from './string-words-utils.js';

describe('words', () => {
  test('should split a string into an array of words', () => {
    expect(words('hello world')).toEqual(['hello', 'world']);
  });

  test('should handle strings with punctuation', () => {
    expect(words('hello, world!')).toEqual(['hello', 'world']);
  });

  test('should handle empty string', () => {
    expect(words('')).toEqual([]);
  });

  test('should handle strings with no words', () => {
    expect(words('!@#$%^&*')).toEqual([]);
  });
});
