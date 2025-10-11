import { lowerFirst } from './string-lower-first-utils.js';

describe('lowerFirst', () => {
  test('should convert the first character of a string to lowercase', () => {
    expect(lowerFirst('Hello')).toBe('hello');
    expect(lowerFirst('World')).toBe('world');
  });

  test('should return an empty string for an empty input', () => {
    expect(lowerFirst('')).toBe('');
  });

  test('should handle single character strings', () => {
    expect(lowerFirst('A')).toBe('a');
  });

  test('should return an empty string for non-string inputs', () => {
    expect(lowerFirst(null)).toBe('');
    expect(lowerFirst(undefined)).toBe('');
    expect(lowerFirst(123)).toBe('');
  });
});
