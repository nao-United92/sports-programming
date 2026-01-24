import camelCase from './string-camel-case-utils';

describe('camelCase', () => {
  // Test case 1: Basic string conversion with spaces
  test('should convert space-separated words to camelCase', () => {
    expect(camelCase('hello world')).toBe('helloWorld');
  });

  // Test case 2: Kebab case
  test('should convert kebab-case to camelCase', () => {
    expect(camelCase('hello-world')).toBe('helloWorld');
  });

  // Test case 3: Snake case
  test('should convert snake_case to camelCase', () => {
    expect(camelCase('hello_world')).toBe('helloWorld');
  });

  // Test case 4: Pascal case
  test('should convert PascalCase to camelCase', () => {
    expect(camelCase('HelloWorld')).toBe('helloWorld');
  });

  // Test case 5: Already camelCase
  test('should return the same string if it is already camelCase', () => {
    expect(camelCase('helloWorld')).toBe('helloWorld');
  });

  // Test case 6: Mixed case and separators
  test('should convert mixed case and separators to camelCase', () => {
    expect(camelCase('fooBar Baz_QuX-bAng')).toBe('fooBarBazQuxBang');
  });

  // Test case 7: String with numbers
  test('should handle strings with numbers correctly', () => {
    expect(camelCase('version 1 2 3')).toBe('version123');
    expect(camelCase('version-1.2.3')).toBe('version123');
  });

  // Test case 8: Leading/trailing spaces or separators
  test('should trim leading/trailing spaces and separators', () => {
    expect(camelCase('  -Hello World-  ')).toBe('helloWorld');
    expect(camelCase('__hello_world__')).toBe('helloWorld');
  });

  // Test case 9: Empty string
  test('should return an empty string for an empty input', () => {
    expect(camelCase('')).toBe('');
  });

  // Test case 10: Invalid input - non-string
  test('should throw TypeError if the input is not a string', () => {
    expect(() => camelCase(123)).toThrow(TypeError);
    expect(() => camelCase(null)).toThrow(TypeError);
    expect(() => camelCase(undefined)).toThrow(TypeError);
    expect(() => camelCase({})).toThrow(TypeError);
    expect(() => camelCase([])).toThrow(TypeError);
  });

  // Test case 11: Acronyms
  test('should handle acronyms correctly', () => {
    expect(camelCase('NASA JPL')).toBe('nasaJpl');
    expect(camelCase('HTTP Response Code')).toBe('httpResponseCode');
  });
});