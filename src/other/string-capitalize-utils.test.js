import { capitalize } from './string-capitalize-utils.js';

describe('capitalize', () => {
  it('should capitalize the first letter of a word', () => {
    expect(capitalize('fred')).toBe('Fred');
  });

  it('should handle an empty string', () => {
    expect(capitalize('')).toBe('');
  });

  it('should handle a string that is already capitalized', () => {
    expect(capitalize('Fred')).toBe('Fred');
  });

  it('should convert the rest of the string to lowercase', () => {
    expect(capitalize('FRED')).toBe('Fred');
    expect(capitalize('fRED')).toBe('Fred');
  });

  it('should handle strings with multiple words (only first letter of first word)', () => {
    expect(capitalize('hello world')).toBe('Hello world');
  });

  it('should handle strings starting with numbers', () => {
    expect(capitalize('123test')).toBe('123test');
  });

  it('should handle non-string inputs', () => {
    expect(capitalize(null)).toBe('');
    expect(capitalize(undefined)).toBe('');
    expect(capitalize(123)).toBe('');
    expect(capitalize({})).toBe('');
  });
});