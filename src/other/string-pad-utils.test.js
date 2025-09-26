const { pad } = require('./string-pad-utils.js');

describe('pad', () => {
  test('should pad a string evenly', () => {
    expect(pad('abc', 8)).toBe('  abc   ');
  });

  test('should pad a string with custom characters', () => {
    expect(pad('abc', 8, '_- ')).toBe('_-abc_-');
  });

  test('should not pad if string length is greater than or equal to length', () => {
    expect(pad('abc', 3)).toBe('abc');
    expect(pad('abc', 2)).toBe('abc');
  });

  test('should handle empty string', () => {
    expect(pad('', 5)).toBe('     ');
  });

  test('should handle non-string input', () => {
    expect(pad(123, 7)).toBe('  123  ');
    expect(pad(null, 5)).toBe(' null ');
    expect(pad(undefined, 9)).toBe('undefined');
  });
});
