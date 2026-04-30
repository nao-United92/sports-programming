const pad = require('./fundamental-string-pad');

describe('pad', () => {
  test('should pad a string on both sides', () => {
    expect(pad('abc', 8)).toBe('  abc   ');
  });

  test('should pad with a custom character', () => {
    expect(pad('abc', 8, '_')).toBe('__abc___');
  });

  test('should not pad if length is less than string length', () => {
    expect(pad('abc', 2)).toBe('abc');
  });

  test('should handle multi-character padding strings', () => {
    expect(pad('abc', 8, 'xy')).toBe('xyabcxyx');
  });
});
