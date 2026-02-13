import truncateWords from './string-truncate-words';

describe('truncateWords', () => {
  test('should truncate a string to the specified number of words', () => {
    const text = 'The quick brown fox jumps over the lazy dog';
    expect(truncateWords(text, 3)).toBe('The quick brown...');
    expect(truncateWords(text, 6)).toBe('The quick brown fox jumps over...');
  });

  test('should not truncate if the word count is less than or equal to numWords', () => {
    const text = 'Hello world';
    expect(truncateWords(text, 2)).toBe('Hello world');
    expect(truncateWords(text, 3)).toBe('Hello world');
  });

  test('should handle empty string', () => {
    expect(truncateWords('', 5)).toBe('');
    expect(truncateWords(null, 5)).toBe('');
    expect(truncateWords(undefined, 5)).toBe('');
  });

  test('should use a custom appendix if provided', () => {
    const text = 'One two three four five';
    expect(truncateWords(text, 2, ' ---')).toBe('One two ---');
  });

  test('should handle strings with multiple spaces between words', () => {
    const text = '  Hello   beautiful   world  ';
    expect(truncateWords(text, 2)).toBe('Hello beautiful...');
    expect(truncateWords(text, 3)).toBe('Hello beautiful world'); // No truncation needed
  });

  test('should handle numWords being 0', () => {
    const text = 'Hello world';
    expect(truncateWords(text, 0)).toBe('...');
    expect(truncateWords(text, 0, '')).toBe('');
  });

  test('should handle numWords being 1', () => {
    const text = 'Hello world';
    expect(truncateWords(text, 1)).toBe('Hello...');
  });
});
