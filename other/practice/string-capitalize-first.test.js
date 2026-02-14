const { capitalizeFirstLetter } = require('./string-capitalize-first');

describe('capitalizeFirstLetter', () => {
  test('should capitalize the first letter of a word', () => {
    expect(capitalizeFirstLetter('hello')).toBe('Hello');
  });

  test('should capitalize the first letter of a sentence', () => {
    expect(capitalizeFirstLetter('hello world')).toBe('Hello world');
  });

  test('should return an empty string if given an empty string', () => {
    expect(capitalizeFirstLetter('')).toBe('');
  });

  test('should handle strings that are already capitalized', () => {
    expect(capitalizeFirstLetter('World')).toBe('World');
  });

  test('should handle single character strings', () => {
    expect(capitalizeFirstLetter('a')).toBe('A');
  });

  test('should handle strings starting with numbers', () => {
    expect(capitalizeFirstLetter('123test')).toBe('123test');
  });

  test('should throw TypeError if argument is not a string', () => {
    expect(() => capitalizeFirstLetter(123)).toThrow(TypeError);
    expect(() => capitalizeFirstLetter(null)).toThrow(TypeError);
    expect(() => capitalizeFirstLetter(undefined)).toThrow(TypeError);
    expect(() => capitalizeFirstLetter({})).toThrow(TypeError);
  });
});
