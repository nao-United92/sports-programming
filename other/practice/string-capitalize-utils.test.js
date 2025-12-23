const capitalize = require('./string-capitalize-utils');

describe('capitalize', () => {
  test('should capitalize the first letter of a single word string', () => {
    expect(capitalize('hello')).toBe('Hello');
  });

  test('should capitalize the first letter of a multi-word string', () => {
    expect(capitalize('hello world')).toBe('Hello world');
  });

  test('should return an empty string for an empty input string', () => {
    expect(capitalize('')).toBe('');
  });

  test('should handle a string that is already capitalized', () => {
    expect(capitalize('Hello')).toBe('Hello');
  });

  test('should handle a single character string', () => {
    expect(capitalize('a')).toBe('A');
  });

  test('should return an empty string for non-string input (null)', () => {
    expect(capitalize(null)).toBe('');
  });

  test('should return an empty string for non-string input (undefined)', () => {
    expect(capitalize(undefined)).toBe('');
  });

  test('should return an empty string for non-string input (number)', () => {
    expect(capitalize(123)).toBe('');
  });

  test('should return an empty string for non-string input (object)', () => {
    expect(capitalize({})).toBe('');
  });

  test('should not affect subsequent characters', () => {
    expect(capitalize('jAvaScript')).toBe('JAvaScript');
  });
});