import truncateWithSeparator from './string-truncate-with-separator-utils';

describe('truncateWithSeparator', () => {
  const longString = 'The quick brown fox jumps over the lazy dog';

  it('should truncate a string to a specified length with default omission', () => {
    expect(truncateWithSeparator(longString, 20)).toBe('The quick brown...'); // Corrected: "fox" removed due to length constraint
  });

  it('should use a custom omission string', () => {
    expect(truncateWithSeparator(longString, 20, '...Read More')).toBe('The...Read More'); // Corrected: more aggressive truncation
  });

  it('should not truncate if the string is shorter than the specified length', () => {
    expect(truncateWithSeparator('Short string', 20)).toBe('Short string');
  });

  it('should handle very short lengths, returning only the omission if length is too small', () => {
    expect(truncateWithSeparator(longString, 3)).toBe('...');
    expect(truncateWithSeparator(longString, 1, '.')).toBe('.');
    expect(truncateWithSeparator(longString, 0, '...')).toBe('...');
  });

  it('should truncate at word boundaries by default', () => {
    expect(truncateWithSeparator('Lorem ipsum dolor sit amet', 15)).toBe('Lorem ipsum...');
  });

  it('should handle strings that are exactly the length', () => {
    expect(truncateWithSeparator('Exact length string', 19)).toBe('Exact length string');
  });

  it('should return an empty string for non-string input', () => {
    expect(truncateWithSeparator(null, 10)).toBe('');
    expect(truncateWithSeparator(undefined, 10)).toBe('');
    expect(truncateWithSeparator(123, 10)).toBe('');
  });

  it('should handle custom separator that is longer than desired length', () => {
    expect(truncateWithSeparator('Hello', 2, '---')).toBe('---');
  });
});