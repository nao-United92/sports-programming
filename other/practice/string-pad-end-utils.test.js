const padEnd = require('./string-pad-end-utils');

describe('padEnd', () => {
  it('should pad the end of a string with spaces', () => {
    expect(padEnd('abc', 5)).toBe('abc  ');
  });

  it('should pad the end of a string with a custom character', () => {
    expect(padEnd('abc', 5, '_')).toBe('abc__');
  });

  it('should not pad if the string is already at the target length', () => {
    expect(padEnd('abcde', 5)).toBe('abcde');
  });

  it('should not pad if the string is longer than the target length', () => {
    expect(padEnd('abcdef', 5)).toBe('abcdef');
  });

  it('should handle multi-character padding strings', () => {
    expect(padEnd('abc', 8, '123')).toBe('abc12312');
  });
});
