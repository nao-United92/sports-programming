import { capitalizeFirstLetter } from './capitalize-utils.js';

describe('capitalizeFirstLetter', () => {
  test('should capitalize the first letter of a string', () => {
    expect(capitalizeFirstLetter('hello')).toBe('Hello');
    expect(capitalizeFirstLetter('world')).toBe('World');
    expect(capitalizeFirstLetter('fooBar')).toBe('FooBar');
  });

  test('should return an empty string for an empty string input', () => {
    expect(capitalizeFirstLetter('')).toBe('');
  });

  test('should handle strings with leading spaces', () => {
    expect(capitalizeFirstLetter('  test')).toBe('  test');
  });

  test('should return an empty string for non-string inputs', () => {
    expect(capitalizeFirstLetter(null)).toBe('');
    expect(capitalizeFirstLetter(undefined)).toBe('');
    expect(capitalizeFirstLetter(123)).toBe('');
    expect(capitalizeFirstLetter({})).toBe('');
    expect(capitalizeFirstLetter([])).toBe('');
  });

  test('should handle single character strings', () => {
    expect(capitalizeFirstLetter('a')).toBe('A');
    expect(capitalizeFirstLetter('Z')).toBe('Z');
  });
});