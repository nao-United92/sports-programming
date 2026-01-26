const { truncate } = require('./string-truncate');

describe('String Truncate', () => {
  test('should truncate a string to the specified length with default ending', () => {
    expect(truncate('The quick brown fox jumps over the lazy dog', 20)).toBe('The quick brown fo...');
  });

  test('should truncate a string to the specified length with custom ending', () => {
    expect(truncate('The quick brown fox jumps over the lazy dog', 20, '---')).toBe('The quick brown fo---');
  });

  test('should return original string if it is shorter than length', () => {
    expect(truncate('Short string', 20)).toBe('Short string');
  });

  test('should handle empty string', () => {
    expect(truncate('', 10)).toBe('');
  });

  test('should handle non-string inputs', () => {
    expect(truncate(null, 10)).toBe('');
    expect(truncate(123, 10)).toBe('');
  });

  test('should handle length less than or equal to ending length', () => {
    expect(truncate('Long string', 3)).toBe('...');
    expect(truncate('Long string', 2, '..')).toBe('..');
  });

  test('should return empty string if length is 0', () => {
    expect(truncate('test', 0)).toBe('');
  });
});
