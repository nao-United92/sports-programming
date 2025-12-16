const pad = require('./string-pad-utils');

describe('pad', () => {
  it('should pad a string on both sides to reach a certain length', () => {
    expect(pad('abc', 7)).toBe('  abc  ');
  });

  it('should pad with a specified character', () => {
    expect(pad('abc', 7, '-')).toBe('--abc--');
  });

  it('should handle lengths that result in uneven padding', () => {
    expect(pad('abc', 6)).toBe(' abc  ');
  });

  it('should not pad if the string is already at or longer than the specified length', () => {
    expect(pad('abcde', 5)).toBe('abcde');
    expect(pad('abcdef', 5)).toBe('abcdef');
  });

  it('should handle multi-character padding strings', () => {
    expect(pad('abc', 9, '_-')).toBe('_-_abc_-_');
  });

  it('should handle an empty string', () => {
    expect(pad('', 5, '*')).toBe('*****');
  });

  it('should default to padding with a space', () => {
    expect(pad('a', 3)).toBe(' a ');
  });
});
