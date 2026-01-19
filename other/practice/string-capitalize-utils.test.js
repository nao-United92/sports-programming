const { capitalize } = require('./string-capitalize-utils');

describe('capitalize', () => {
  it('should capitalize the first letter of a word', () => {
    expect(capitalize('hello')).toBe('Hello');
  });

  it('should capitalize the first letter of a sentence', () => {
    expect(capitalize('hello world')).toBe('Hello world');
  });

  it('should handle an already capitalized word', () => {
    expect(capitalize('Hello')).toBe('Hello');
  });

  it('should handle an empty string', () => {
    expect(capitalize('')).toBe('');
  });

  it('should handle a single letter string', () => {
    expect(capitalize('a')).toBe('A');
  });

  it('should handle strings with leading spaces (no change)', () => {
    expect(capitalize(' hello')).toBe(' hello');
  });

  it('should handle non-string input (return empty string)', () => {
    expect(capitalize(null)).toBe('');
    expect(capitalize(undefined)).toBe('');
    expect(capitalize(123)).toBe('');
  });
});
