// src/other/string-manipulation.test.js

import { capitalizeFirstLetter } from './string-manipulation';

describe('capitalizeFirstLetter', () => {
  test('should capitalize the first letter of a word', () => {
    expect(capitalizeFirstLetter('hello')).toBe('Hello');
  });

  test('should return an empty string for an empty input', () => {
    expect(capitalizeFirstLetter('')).toBe('');
  });

  test('should handle single letter strings', () => {
    expect(capitalizeFirstLetter('a')).toBe('A');
  });

  test('should handle strings that are already capitalized', () => {
    expect(capitalizeFirstLetter('World')).toBe('World');
  });

  test('should handle strings with multiple words', () => {
    expect(capitalizeFirstLetter('hello world')).toBe('Hello world');
  });

  test('should handle non-string inputs gracefully (return empty string)', () => {
    expect(capitalizeFirstLetter(null)).toBe('');
    expect(capitalizeFirstLetter(undefined)).toBe('');
    expect(capitalizeFirstLetter(123)).toBe('');
    expect(capitalizeFirstLetter({})).toBe('');
  });
});
