const truncateBytes = require('./string-truncate-bytes');

describe('truncateBytes', () => {
  test('truncates simple ASCII string', () => {
    expect(truncateBytes('abcdef', 3)).toBe('abc');
  });

  test('truncates multi-byte characters correctly', () => {
    // 'あ' is 3 bytes in UTF-8
    expect(truncateBytes('あいう', 3)).toBe('あ');
    expect(truncateBytes('あいう', 4)).toBe('あ');
    expect(truncateBytes('あいう', 6)).toBe('あい');
  });

  test('returns original string if within limit', () => {
    expect(truncateBytes('hello', 10)).toBe('hello');
  });

  test('handles empty string', () => {
    expect(truncateBytes('', 10)).toBe('');
  });
});
