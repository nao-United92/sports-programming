import capitalize from './string-capitalize-utils';

describe('capitalize', () => {
  it('should capitalize the first letter of a string', () => {
    expect(capitalize('hello')).toBe('Hello');
  });

  it('should not change a string that is already capitalized', () => {
    expect(capitalize('World')).toBe('World');
  });

  it('should handle a single character string', () => {
    expect(capitalize('a')).toBe('A');
  });

  it('should return an empty string for an empty input', () => {
    expect(capitalize('')).toBe('');
  });

  it('should return an empty string for non-string inputs', () => {
    expect(capitalize(null)).toBe('');
    expect(capitalize(undefined)).toBe('');
    expect(capitalize(123)).toBe('');
    expect(capitalize({})).toBe('');
  });

  it('should handle strings with leading spaces', () => {
    // Note: This implementation does not trim spaces.
    expect(capitalize(' hello')).toBe(' hello');
  });

  it('should only capitalize the first character', () => {
    expect(capitalize('hello world')).toBe('Hello world');
  });
});