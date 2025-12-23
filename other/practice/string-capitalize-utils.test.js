const capitalize = require('./string-capitalize-utils');

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

  it('should handle strings with mixed case', () => {
    expect(capitalize('hELLo')).toBe('HELLo');
  });

  it('should return an empty string for non-string inputs', () => {
    expect(capitalize(null)).toBe('');
    expect(capitalize(undefined)).toBe('');
    expect(capitalize(123)).toBe('');
    expect(capitalize({})).toBe('');
  });
});
