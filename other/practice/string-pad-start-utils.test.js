const { padStart } = require('./string-pad-start-utils');

describe('string-pad-start-utils', () => {
  it('should pad a string with spaces by default', () => {
    expect(padStart('abc', 5)).toBe('  abc');
  });

  it('should pad a string with the given character', () => {
    expect(padStart('abc', 5, '_')).toBe('__abc');
  });

  it('should not pad if the string is already long enough', () => {
    expect(padStart('abcde', 5)).toBe('abcde');
    expect(padStart('abcdef', 5)).toBe('abcdef');
  });

  it('should handle multi-character padding strings', () => {
    expect(padStart('abc', 7, '123')).toBe('1231abc');
  });

  it('should return the original string if length is less than or equal to string length', () => {
    expect(padStart('hello', 3)).toBe('hello');
  });
});
