const { matchesPattern } = require('./string-matches-pattern');

describe('matchesPattern', () => {
  test('should return true if string matches pattern', () => {
    expect(matchesPattern('hello', /he../)).toBe(true);
    expect(matchesPattern('world', /^world$/)).toBe(true);
    expect(matchesPattern('123abc', /\d+/)).toBe(true);
  });

  test('should return false if string does not match pattern', () => {
    expect(matchesPattern('hello', /xyz/)).toBe(false);
    expect(matchesPattern('apple', /^orange$/)).toBe(false);
    expect(matchesPattern('abc', /^\d+$/)).toBe(false);
  });

  test('should handle empty string matching', () => {
    expect(matchesPattern('', /^$/)).toBe(true);
    expect(matchesPattern('', /a/)).toBe(false);
  });

  test('should handle patterns with flags', () => {
    expect(matchesPattern('Hello World', /world/i)).toBe(true); // Case-insensitive
    expect(matchesPattern('line1\nline2', /^line1$/m)).toBe(true); // Multiline
  });

  test('should throw TypeError if first argument is not a string', () => {
    expect(() => matchesPattern(123, /./)).toThrow(TypeError);
    expect(() => matchesPattern(null, /./)).toThrow(TypeError);
    expect(() => matchesPattern(undefined, /./)).toThrow(TypeError);
    expect(() => matchesPattern({}, /./)).toThrow(TypeError);
  });

  test('should throw TypeError if second argument is not a RegExp object', () => {
    expect(() => matchesPattern('abc', 'pattern')).toThrow(TypeError);
    expect(() => matchesPattern('abc', null)).toThrow(TypeError);
    expect(() => matchesPattern('abc', undefined)).toThrow(TypeError);
    expect(() => matchesPattern('abc', '/pattern/')).toThrow(TypeError); // String literal of regex
  });
});
