const { words } = require('./string-words-utils.js');

describe('words', () => {
  test('should split a string into words', () => {
    expect(words('fred, bar, baz')).toEqual(['fred', 'bar', 'baz']);
  });

  test('should handle different delimiters', () => {
    expect(words('fred-bar-baz')).toEqual(['fred', 'bar', 'baz']);
    expect(words('fred_bar_baz')).toEqual(['fred', 'bar', 'baz']);
  });

  test('should handle custom pattern', () => {
    expect(words('fred, bar, baz', /[^, ]+/g)).toEqual(['fred', 'bar', 'baz']);
  });

  test('should handle empty string', () => {
    expect(words('')).toEqual([]);
  });

  test('should handle string with only delimiters', () => {
    expect(words('   ')).toEqual([]);
  });

  test('should handle non-string input', () => {
    expect(words(null)).toEqual([]);
    expect(words(undefined)).toEqual([]);
    expect(words(123)).toEqual([]);
  });
});