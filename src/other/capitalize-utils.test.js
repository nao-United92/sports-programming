import { capitalizeFirstLetter, capitalizeWords } from './capitalize-utils.js';

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

describe('capitalizeWords', () => {
  test('should capitalize the first letter of each word', () => {
    expect(capitalizeWords('hello world')).toBe('Hello World');
    expect(capitalizeWords('foo bar baz')).toBe('Foo Bar Baz');
  });

  test('should handle single word', () => {
    expect(capitalizeWords('hello')).toBe('Hello');
  });

  test('should return an empty string for empty or non-string inputs', () => {
    expect(capitalizeWords('')).toBe('');
    expect(capitalizeWords(null)).toBe('');
    expect(capitalizeWords(undefined)).toBe('');
  });

  test('should handle strings with extra spaces', () => {
    expect(capitalizeWords('  hello   world  ')).toBe('  Hello   World  ');
  });
});