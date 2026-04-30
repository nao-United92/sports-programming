const repeat = require('./fundamental-string-repeat');

describe('repeat', () => {
  test('should repeat string n times', () => {
    expect(repeat('*', 3)).toBe('***');
    expect(repeat('abc', 2)).toBe('abcabc');
  });

  test('should return empty string if n is 0', () => {
    expect(repeat('abc', 0)).toBe('');
  });

  test('should return empty string if n is negative', () => {
    expect(repeat('abc', -1)).toBe('');
  });

  test('should handle string input for n', () => {
    expect(repeat('a', '2')).toBe('aa');
  });
});
