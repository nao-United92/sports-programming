const padEnd = require('./string-pad-end-utils');

describe('padEnd', () => {
  it('should pad a string on the right to reach a certain length', () => {
    expect(padEnd('abc', 7)).toBe('abc    ');
  });

  it('should pad with a specified character', () => {
    expect(padEnd('abc', 7, '-')).toBe('abc----');
  });

  it('should not pad if the string is already at or longer than the specified length', () => {
    expect(padEnd('abcde', 5)).toBe('abcde');
    expect(padEnd('abcdef', 5)).toBe('abcdef');
  });

  it('should handle multi-character padding strings', () => {
    expect(padEnd('abc', 9, '_-')).toBe('abc_-_-_-');
  });

  it('should handle an empty string', () => {
    expect(padEnd('', 5, '*')).toBe('*****');
  });

  it('should default to padding with a space', () => {
    expect(padEnd('a', 3)).toBe('a  ');
  });
});