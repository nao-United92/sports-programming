// src/other/string-utils.test.js

import { capitalize } from './string-utils';

describe('capitalize', () => {
  test('should capitalize the first letter of a single word', () => {
    expect(capitalize('hello')).toBe('Hello');
  });

  test('should capitalize the first letter of a sentence', () => {
    expect(capitalize('hello world')).toBe('Hello world');
  });

  test('should handle an empty string', () => {
    expect(capitalize('')).toBe('');
  });

  test('should handle a string that is already capitalized', () => {
    expect(capitalize('World')).toBe('World');
  });

  test('should handle a string with leading spaces', () => {
    expect(capitalize('  test')).toBe('  test'); // Only first char is capitalized, not first non-space char
  });

  test('should return an empty string for non-string input like null', () => {
    expect(capitalize(null)).toBe('');
  });

  test('should return an empty string for non-string input like undefined', () => {
    expect(capitalize(undefined)).toBe('');
  });

  test('should return an empty string for non-string input like a number', () => {
    expect(capitalize(123)).toBe('');
  });
});