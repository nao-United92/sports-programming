import { capitalize } from './string-capitalize-utils.js';

describe('capitalize', () => {
  test('should capitalize the first letter of a string', () => {
    expect(capitalize('hello')).toBe('Hello');
  });

  test('should return an empty string if input is an empty string', () => {
    expect(capitalize('')).toBe('');
  });

  test('should return an empty string for non-string inputs', () => {
    expect(capitalize(123)).toBe('');
    expect(capitalize(null)).toBe('');
    expect(capitalize(undefined)).toBe('');
    expect(capitalize({})).toBe('');
    expect(capitalize([])).toBe('');
  });

  test('should handle already capitalized strings', () => {
    expect(capitalize('World')).toBe('World');
  });

  test('should handle single-character strings', () => {
    expect(capitalize('a')).toBe('A');
  });
});