
import { capitalize } from './capitalize-utils.js';

describe('capitalize', () => {
  test('should capitalize the first letter and lowercase the rest', () => {
    expect(capitalize('fred')).toBe('Fred');
    expect(capitalize('FRED')).toBe('Fred');
    expect(capitalize('fRED')).toBe('Fred');
    expect(capitalize('hello world')).toBe('Hello world');
  });

  test('should handle empty strings', () => {
    expect(capitalize('')).toBe('');
  });

  test('should handle single character strings', () => {
    expect(capitalize('a')).toBe('A');
    expect(capitalize('Z')).toBe('Z');
  });

  test('should handle non-string inputs gracefully', () => {
    expect(capitalize(null)).toBe('');
    expect(capitalize(undefined)).toBe('');
    expect(capitalize(123)).toBe('');
    expect(capitalize({})).toBe('');
  });

  test('should handle strings with leading/trailing spaces (only first char is affected)', () => {
    expect(capitalize('  hello')).toBe('  hello'); // Note: current implementation doesn't trim
    expect(capitalize(' hello ')).toBe(' hello ');
  });
});
