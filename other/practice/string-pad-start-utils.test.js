const padStart = require('./string-pad-start-utils');

describe('padStart', () => {
  it('should pad the start of a string with spaces', () => {
    expect(padStart('abc', 5)).toBe('  abc');
  });

  it('should pad the start of a string with a custom character', () => {
    expect(padStart('abc', 5, '_')).toBe('__abc');
  });

  it('should not pad if the string is already at the target length', () => {
    expect(padStart('abcde', 5)).toBe('abcde');
  });

  it('should not pad if the string is longer than the target length', () => {
    expect(padStart('abcdef', 5)).toBe('abcdef');
  });

  it('should handle multi-character padding strings', () => {
    expect(padStart('abc', 8, '123')).toBe('12312abc');
  });
});
