const stringIsIsogram = require('./string-is-isogram');

describe('stringIsIsogram', () => {
  test('should return true for an isogram', () => {
    expect(stringIsIsogram('Dermatoglyphics')).toBe(true);
    expect(stringIsIsogram('isogram')).toBe(true);
    expect(stringIsIsogram('abc')).toBe(true);
  });

  test('should return false for a non-isogram', () => {
    expect(stringIsIsogram('isograms')).toBe(false);
    expect(stringIsIsogram('hello')).toBe(false);
    expect(stringIsIsogram('aba')).toBe(false);
  });

  test('should be case-insensitive', () => {
    expect(stringIsIsogram('Alphabet')).toBe(false); // 'a' repeats
  });

  test('should ignore non-letter characters', () => {
    expect(stringIsIsogram('abc-123')).toBe(true);
    expect(stringIsIsogram('abc abc')).toBe(false); // 'a', 'b', 'c' repeat
  });

  test('should return true for empty string', () => {
    expect(stringIsIsogram('')).toBe(true);
  });

  test('should return false for non-string input', () => {
    expect(stringIsIsogram(123)).toBe(false);
    expect(stringIsIsogram(null)).toBe(false);
  });
});
