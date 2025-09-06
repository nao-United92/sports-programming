import { capitalize } from './string-capitalize-utils.js';

describe('capitalize', () => {
  test('should capitalize the first letter of a string', () => {
    expect(capitalize('hello')).toBe('Hello');
  });

  test('should return an empty string for an empty input', () => {
    expect(capitalize('')).toBe('');
  });

  test('should handle a single character string', () => {
    expect(capitalize('a')).toBe('A');
  });

  test('should not change already capitalized strings', () => {
    expect(capitalize('World')).toBe('World');
  });

  test('should handle strings with leading spaces', () => {
    expect(capitalize(' hello')).toBe(' hello');
  });

  test('should handle non-string inputs', () => {
    expect(capitalize(null)).toBe('');
    expect(capitalize(undefined)).toBe('');
    expect(capitalize(123)).toBe('');
  });
});
