const { padLeft, padRight } = require('./string-pad-utils.js');

describe('padLeft', () => {
  test('should pad a string on the left', () => {
    expect(padLeft('abc', 5)).toBe('  abc');
  });

  test('should use a custom character for padding', () => {
    expect(padLeft('abc', 5, '0')).toBe('00abc');
  });

  test('should not pad if string is already long enough', () => {
    expect(padLeft('abcde', 5)).toBe('abcde');
    expect(padLeft('abcdef', 5)).toBe('abcdef');
  });
});

describe('padRight', () => {
  test('should pad a string on the right', () => {
    expect(padRight('abc', 5)).toBe('abc  ');
  });

  test('should use a custom character for padding', () => {
    expect(padRight('abc', 5, '0')).toBe('abc00');
  });

  test('should not pad if string is already long enough', () => {
    expect(padRight('abcde', 5)).toBe('abcde');
    expect(padRight('abcdef', 5)).toBe('abcdef');
  });
});