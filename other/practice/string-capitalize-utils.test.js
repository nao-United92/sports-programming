const { capitalize } = require('./string-capitalize-utils');

describe('capitalize', () => {
  it('should capitalize the first letter and lowercase the rest', () => {
    expect(capitalize('fred')).toBe('Fred');
  });

  it('should handle already capitalized strings', () => {
    expect(capitalize('Fred')).toBe('Fred');
  });

  it('should handle all uppercase strings', () => {
    expect(capitalize('FRED')).toBe('Fred');
  });

  it('should handle empty strings', () => {
    expect(capitalize('')).toBe('');
  });

  it('should handle null or undefined input', () => {
    expect(capitalize(null)).toBe('');
    expect(capitalize(undefined)).toBe('');
  });

  it('should handle strings with leading/trailing spaces (and not modify them)', () => {
    expect(capitalize('  hello world  ')).toBe('  hello world  ');
  });

  it('should handle numbers as string input', () => {
    expect(capitalize(123)).toBe('123');
  });
});
