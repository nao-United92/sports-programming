const { countOccurrences } = require('./string-count-occurrences-utils');

describe('countOccurrences', () => {
  it('should return 0 for an empty substring', () => {
    expect(countOccurrences('abc', '')).toBe(0);
  });

  it('should count non-overlapping occurrences', () => {
    expect(countOccurrences('ababab', 'ab')).toBe(3);
  });

  it('should handle potentially overlapping substrings by finding non-overlapping instances', () => {
    expect(countOccurrences('aaaaa', 'aa')).toBe(2);
  });

  it('should return 0 if the substring is not found', () => {
    expect(countOccurrences('abc', 'd')).toBe(0);
  });

  it('should handle special characters in strings', () => {
    expect(countOccurrences('$$$', '$$')).toBe(1);
  });

  it('should work with longer strings', () => {
    const longString = 'one two three one two one';
    expect(countOccurrences(longString, 'one')).toBe(3);
    expect(countOccurrences(longString, 'two')).toBe(2);
  });

  it('should be case-sensitive', () => {
    expect(countOccurrences('aAaaA', 'a')).toBe(3);
    expect(countOccurrences('aAaaA', 'A')).toBe(2);
  });
});
