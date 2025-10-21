import { upperFirst } from './string-upper-first-utils.js';

describe('upperFirst', () => {
  test('should convert the first character of a string to uppercase', () => {
    expect(upperFirst('hello')).toBe('Hello');
    expect(upperFirst('world')).toBe('World');
  });

  test('should return an empty string for an empty input', () => {
    expect(upperFirst('')).toBe('');
  });

  test('should handle single character strings', () => {
    expect(upperFirst('a')).toBe('A');
  });

  test('should return an empty string for non-string inputs', () => {
    expect(upperFirst(null)).toBe('');
    expect(upperFirst(undefined)).toBe('');
    expect(upperFirst(123)).toBe('');
  });
});