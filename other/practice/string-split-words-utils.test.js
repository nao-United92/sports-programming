import splitWords from './string-split-words-utils';

describe('splitWords', () => {
  it('should split a string into words by spaces', () => {
    expect(splitWords('hello world')).toEqual(['hello', 'world']);
  });

  it('should handle multiple spaces between words', () => {
    expect(splitWords('  hello   world  ')).toEqual(['hello', 'world']);
  });

  it('should split by hyphens', () => {
    expect(splitWords('kebab-case-string')).toEqual(['kebab', 'case', 'string']);
  });

  it('should split by underscores', () => {
    expect(splitWords('snake_case_string')).toEqual(['snake', 'case', 'string']);
  });

  it('should handle mixed delimiters', () => {
    expect(splitWords('hello-world_how are_you')).toEqual(['hello', 'world', 'how', 'are', 'you']);
  });

  it('should return an empty array for an empty string', () => {
    expect(splitWords('')).toEqual([]);
  });

  it('should return an empty array for a string with only delimiters', () => {
    expect(splitWords('  _ -  ')).toEqual([]);
  });

  it('should handle non-string input by returning an empty array', () => {
    expect(splitWords(null)).toEqual([]);
    expect(splitWords(undefined)).toEqual([]);
    expect(splitWords(123)).toEqual([]);
    expect(splitWords({})).toEqual([]);
  });

  it('should handle punctuation as part of words unless separated by delimiters', () => {
    expect(splitWords('hello,world!')).toEqual(['hello,world!']);
    expect(splitWords('hello world. This is a test.')).toEqual(['hello', 'world.', 'This', 'is', 'a', 'test.']);
  });
});