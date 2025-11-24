import { capitalize } from './string-capitalize-utils';

describe('capitalize', () => {
  test('should capitalize the first letter of a string', () => {
    expect(capitalize('hello')).toBe('Hello');
  });

  test('should return an empty string for an empty input', () => {
    expect(capitalize('')).toBe('');
  });

  test('should handle single character strings', () => {
    expect(capitalize('a')).toBe('A');
  });

  test('should not change already capitalized strings', () => {
    expect(capitalize('World')).toBe('World');
  });

  test('should handle strings with spaces', () => {
    expect(capitalize('hello world')).toBe('Hello world');
  });

  test('should return an empty string for non-string inputs', () => {
    expect(capitalize(null)).toBe('');
    expect(capitalize(undefined)).toBe('');
    expect(capitalize(123)).toBe('');
    expect(capitalize({})).toBe('');
  });
});
