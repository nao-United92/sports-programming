const truncate = require('./string-truncate');

describe('truncate', () => {
  test('truncates a string to the specified length', () => {
    expect(truncate('hello world', 8)).toBe('hello...');
  });

  test('does not truncate if string is shorter than length', () => {
    expect(truncate('hello', 10)).toBe('hello');
  });

  test('uses a custom omission string', () => {
    expect(truncate('hello world', 8, '!')).toBe('hello w!');
  });

  test('returns empty string for non-string input', () => {
    expect(truncate(null, 5)).toBe('');
  });
});
