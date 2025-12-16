const padStart = require('./string-pad-start-utils');

describe('padStart', () => {
  it('should pad a string on the left to reach a certain length', () => {
    expect(padStart('abc', 7)).toBe('    abc');
  });

  it('should pad with a specified character', () => {
    expect(padStart('abc', 7, '-')).toBe('----abc');
  });

  it('should not pad if the string is already at or longer than the specified length', () => {
    expect(padStart('abcde', 5)).toBe('abcde');
    expect(padStart('abcdef', 5)).toBe('abcdef');
  });

  it('should handle multi-character padding strings', () => {
    expect(padStart('abc', 9, '_-')).toBe('_-_-_-abc');
  });

  it('should handle an empty string', () => {
    expect(padStart('', 5, '*')).toBe('*****');
  });

  it('should default to padding with a space', () => {
    expect(padStart('a', 3)).toBe('  a');
  });
});