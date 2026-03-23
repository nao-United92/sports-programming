import { capitalize } from './string-capitalize.js';

describe('capitalize', () => {
  test('should capitalize the first character of a string', () => {
    expect(capitalize('hello')).toBe('Hello');
  });

  test('should return empty string for non-string input', () => {
    expect(capitalize(null)).toBe('');
    expect(capitalize(undefined)).toBe('');
    expect(capitalize(123)).toBe('');
  });

  test('should handle empty string', () => {
    expect(capitalize('')).toBe('');
  });
});
