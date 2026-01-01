const { matches } = require('./string-matches-utils');

describe('matches', () => {
  test('should return true if string matches pattern', () => {
    expect(matches('hello world', 'hello')).toBe(true);
    expect(matches('hello world', 'world$')).toBe(true);
    expect(matches('123abc', '\\d+')).toBe(true);
  });

  test('should return false if string does not match pattern', () => {
    expect(matches('hello world', 'goodbye')).toBe(false);
    expect(matches('hello world', '^world')).toBe(false);
  });

  test('should handle empty string and pattern', () => {
    expect(matches('', '')).toBe(true);
    expect(matches('hello', '')).toBe(true);
    expect(matches('', 'hello')).toBe(false);
  });

  test('should return false for non-string input', () => {
    expect(matches(null, 'test')).toBe(false);
    expect(matches(undefined, 'test')).toBe(false);
    expect(matches(123, '123')).toBe(false);
  });
});
