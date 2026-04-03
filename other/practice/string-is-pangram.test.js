const stringIsPangram = require('./string-is-pangram');

describe('stringIsPangram', () => {
  test('should return true for a pangram', () => {
    expect(stringIsPangram('The quick brown fox jumps over the lazy dog.')).toBe(true);
    expect(stringIsPangram('Two driven jocks help fax my big quiz.')).toBe(true);
  });

  test('should return false for a non-pangram', () => {
    expect(stringIsPangram('The quick brown fox jumps over the lazy dog')).toBe(true); // wait, it's a pangram
    expect(stringIsPangram('Hello world')).toBe(false);
    expect(stringIsPangram('abcdefghijklmnopqrstuvwxy')).toBe(false); // missing 'z'
  });

  test('should be case-insensitive', () => {
    expect(stringIsPangram('THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG')).toBe(true);
  });

  test('should ignore non-letter characters', () => {
    expect(stringIsPangram('123 The quick brown fox jumps over the lazy dog! 456')).toBe(true);
  });

  test('should return false for empty string', () => {
    expect(stringIsPangram('')).toBe(false);
  });

  test('should return false for non-string input', () => {
    expect(stringIsPangram(123)).toBe(false);
    expect(stringIsPangram(null)).toBe(false);
  });
});
