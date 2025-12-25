const { capitalize } = require('./string-capitalize-utils.js');

describe('capitalize', () => {
  it('should capitalize the first letter of a string', () => {
    expect(capitalize('hello')).toBe('Hello');
  });

  it('should return an empty string if the input is empty', () => {
    expect(capitalize('')).toBe('');
  });

  it('should handle already capitalized strings', () => {
    expect(capitalize('World')).toBe('World');
  });

  it('should handle non-string inputs gracefully', () => {
    expect(capitalize(null)).toBe('');
    expect(capitalize(undefined)).toBe('');
    expect(capitalize(123)).toBe('');
  });

  it('should only capitalize the first letter', () => {
    expect(capitalize('hello world')).toBe('Hello world');
  });
});