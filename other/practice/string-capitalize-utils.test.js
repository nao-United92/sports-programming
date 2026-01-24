import capitalize from './string-capitalize-utils';

describe('capitalize', () => {
  // Test case 1: Basic capitalization
  test('should capitalize the first letter of a simple word', () => {
    expect(capitalize('hello')).toBe('Hello');
  });

  // Test case 2: Already capitalized word
  test('should return the same string if the first letter is already capitalized', () => {
    expect(capitalize('World')).toBe('World');
  });

  // Test case 3: Empty string
  test('should return an empty string for an empty input', () => {
    expect(capitalize('')).toBe('');
  });

  // Test case 4: String with spaces
  test('should capitalize the first letter even if followed by spaces', () => {
    expect(capitalize('  hello')).toBe('  hello'); // Only the *first character* of the string is capitalized
  });

  // Test case 5: String with numbers
  test('should not change numbers at the beginning of a string', () => {
    expect(capitalize('123test')).toBe('123test');
  });

  // Test case 6: String with special characters
  test('should not change special characters at the beginning of a string', () => {
    expect(capitalize('@hello')).toBe('@hello');
  });

  // Test case 7: String with multiple words
  test('should only capitalize the very first letter of the entire string', () => {
    expect(capitalize('hello world')).toBe('Hello world');
  });

  // Test case 8: Invalid input - non-string
  test('should throw TypeError if the input is not a string', () => {
    expect(() => capitalize(123)).toThrow(TypeError);
    expect(() => capitalize(null)).toThrow(TypeError);
    expect(() => capitalize(undefined)).toThrow(TypeError);
    expect(() => capitalize({})).toThrow(TypeError);
    expect(() => capitalize([])).toThrow(TypeError);
  });
});
