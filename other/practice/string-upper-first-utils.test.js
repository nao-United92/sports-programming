const { upperFirst } = require('./string-upper-first-utils');

describe('upperFirst', () => {
  it('should convert the first character of string to upper case', () => {
    expect(upperFirst('fred')).toBe('Fred');
  });

  it('should handle already upper-cased first letter strings', () => {
    expect(upperFirst('Fred')).toBe('Fred');
  });

  it('should handle empty strings', () => {
    expect(upperFirst('')).toBe('');
  });

  it('should handle null or undefined input', () => {
    expect(upperFirst(null)).toBe('');
    expect(upperFirst(undefined)).toBe('');
  });

  it('should handle strings with leading/trailing spaces (and not modify them)', () => {
    expect(upperFirst('  hello')).toBe('  hello');
  });

  it('should handle numbers as string input', () => {
    expect(upperFirst(123)).toBe('123');
  });
});
