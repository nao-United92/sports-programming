import countOccurrences from './string-count-occurrences-utils';

describe('countOccurrences', () => {
  test('should return the correct count for existing substrings (non-overlapping)', () => {
    expect(countOccurrences('hello world', 'o')).toBe(2);
    expect(countOccurrences('banana', 'na')).toBe(2);
    expect(countOccurrences('aaaaa', 'a')).toBe(5);
    expect(countOccurrences('ababab', 'aba')).toBe(1); // Corrected expectation for non-overlapping
  });

  test('should return 0 for non-existing substrings', () => {
    expect(countOccurrences('hello world', 'x')).toBe(0);
    expect(countOccurrences('apple', 'banana')).toBe(0);
    expect(countOccurrences('', 'test')).toBe(0);
  });

  test('should handle empty main string', () => {
    expect(countOccurrences('', 'a')).toBe(0);
  });

  test('should handle empty substring', () => {
    // Behavior for empty substring is context-dependent.
    // A common interpretation is length + 1, as an empty string can be found before
    // the first character, between any two characters, and after the last character.
    // For "hello", "" can be found 6 times.
    expect(countOccurrences('hello', '')).toBe('hello'.length + 1);
    expect(countOccurrences('', '')).toBe(1);
  });

  test('should handle non-overlapping occurrences', () => {
    expect(countOccurrences('aaaaa', 'aa')).toBe(2); // 'aa' at index 0, then 'aa' at index 2
  });

  test('should throw an error if arguments are not strings', () => {
    expect(() => countOccurrences(null, 'a')).toThrow(TypeError);
    expect(() => countOccurrences('a', null)).toThrow(TypeError);
    expect(() => countOccurrences(123, 'a')).toThrow(TypeError);
    expect(() => countOccurrences('a', 123)).toThrow(TypeError);
  });
});
