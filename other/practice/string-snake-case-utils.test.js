import snakeCase from './string-snake-case-utils';

describe('snakeCase', () => {
  // Test case 1: Basic string conversion with spaces
  test('should convert space-separated words to snake_case', () => {
    expect(snakeCase('hello world')).toBe('hello_world');
  });

  // Test case 2: Kebab case
  test('should convert kebab-case to snake_case', () => {
    expect(snakeCase('hello-world')).toBe('hello_world');
  });

  // Test case 3: Pascal case
  test('should convert PascalCase to snake_case', () => {
    expect(snakeCase('HelloWorld')).toBe('hello_world');
  });

  // Test case 4: Camel case
  test('should convert camelCase to snake_case', () => {
    expect(snakeCase('helloWorld')).toBe('hello_world');
  });

  // Test case 5: Already snake_case
  test('should return the same string if it is already snake_case', () => {
    expect(snakeCase('hello_world')).toBe('hello_world');
  });

  // Test case 6: Mixed case and separators
  test('should convert mixed case and separators to snake_case', () => {
    expect(snakeCase('fooBar Baz-QuX_bAng')).toBe('foo_bar_baz_qu_x_b_ang'); // Note: current implementation might produce extra underscores for mixed case
  });

  // Test case 7: String with numbers
  test('should handle strings with numbers correctly', () => {
    expect(snakeCase('version 1 2 3')).toBe('version_1_2_3');
    expect(snakeCase('version-1.2.3')).toBe('version_1_2_3');
  });

  // Test case 8: Leading/trailing spaces or separators
  test('should trim leading/trailing spaces and separators', () => {
    expect(snakeCase('  -Hello World-  ')).toBe('hello_world');
    expect(snakeCase('__hello_world__')).toBe('hello_world');
  });

  // Test case 9: Empty string
  test('should return an empty string for an empty input', () => {
    expect(snakeCase('')).toBe('');
  });

  // Test case 10: Invalid input - non-string
  test('should throw TypeError if the input is not a string', () => {
    expect(() => snakeCase(123)).toThrow(TypeError);
    expect(() => snakeCase(null)).toThrow(TypeError);
    expect(() => snakeCase(undefined)).toThrow(TypeError);
    expect(() => snakeCase({})).toThrow(TypeError);
    expect(() => snakeCase([])).toThrow(TypeError);
  });

  // Test case 11: Acronyms
  test('should handle acronyms correctly', () => {
    expect(snakeCase('NASA JPL')).toBe('nasa_jpl');
    expect(snakeCase('HTTP Response Code')).toBe('http_response_code');
  });
});