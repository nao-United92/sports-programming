import { capitalize } from './capitalize-utils.js';

describe('capitalize', () => {
  test('should capitalize the first letter of a string', () => {
    expect(capitalize('hello')).toBe('Hello');
  });

  test('should return an empty string for an empty string', () => {
    expect(capitalize('')).toBe('');
  });

  test('should handle a single character string', () => {
    expect(capitalize('a')).toBe('A');
  });

  test('should not change an already capitalized string', () => {
    expect(capitalize('Hello')).toBe('Hello');
  });

  test('should handle strings with spaces', () => {
    expect(capitalize('hello world')).toBe('Hello world');
  });

  test('should return an empty string for non-string inputs', () => {
    expect(capitalize(null)).toBe('');
    expect(capitalize(undefined)).toBe('');
    expect(capitalize(123)).toBe('');
    expect(capitalize([])).toBe('');
    expect(capitalize({})).toBe('');
  });
});