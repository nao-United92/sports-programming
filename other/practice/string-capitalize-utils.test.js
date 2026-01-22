import { capitalize } from './string-capitalize-utils';

describe('capitalize', () => {
  it('should capitalize the first letter of a string', () => {
    expect(capitalize('hello')).toBe('Hello');
  });

  it('should return an empty string for an empty input', () => {
    expect(capitalize('')).toBe('');
  });

  it('should handle non-string inputs gracefully', () => {
    expect(capitalize(null)).toBe('');
    expect(capitalize(undefined)).toBe('');
    expect(capitalize(123)).toBe('');
  });

  it('should not change an already capitalized string', () => {
    expect(capitalize('World')).toBe('World');
  });

  it('should handle single-character strings', () => {
    expect(capitalize('a')).toBe('A');
  });
});