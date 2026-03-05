const capitalizeWords = require('./string-capitalize-words');

describe('capitalizeWords', () => {
  test('capitalizes the first letter of each word', () => {
    expect(capitalizeWords('hello world')).toBe('Hello World');
    expect(capitalizeWords('the quick brown fox')).toBe('The Quick Brown Fox');
  });

  test('handles already capitalized words', () => {
    expect(capitalizeWords('Hello World')).toBe('Hello World');
  });

  test('handles single word strings', () => {
    expect(capitalizeWords('javascript')).toBe('Javascript');
  });

  test('returns empty string for non-string input', () => {
    expect(capitalizeWords(null)).toBe('');
    expect(capitalizeWords(123)).toBe('');
  });
});
