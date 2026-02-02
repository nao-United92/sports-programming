const matchesPattern = require('./string-matches-pattern');

describe('matchesPattern', () => {
  test('should return true if string matches pattern', () => {
    expect(matchesPattern('hello', /^hello$/)).toBe(true);
  });

  test('should return false if string does not match pattern', () => {
    expect(matchesPattern('world', /^hello$/)).toBe(false);
  });

  test('should work with complex patterns', () => {
    expect(matchesPattern('test123test', /\d+/)).toBe(true);
    expect(matchesPattern('testtest', /\d+/)).toBe(false);
  });

  test('should handle empty string matching empty pattern', () => {
    expect(matchesPattern('', /^$/)).toBe(true);
  });

  test('should handle empty string not matching non-empty pattern', () => {
    expect(matchesPattern('', /a/)).toBe(false);
  });

  test('should handle string matching partial pattern', () => {
    expect(matchesPattern('abcdef', /cde/)).toBe(true);
  });
});
