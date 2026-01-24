import pascalCase from './string-pascal-case-utils';

describe('pascalCase', () => {
  // Test case 1: Basic string conversion with spaces
  test('should convert space-separated words to PascalCase', () => {
    expect(pascalCase('hello world')).toBe('HelloWorld');
  });

  // Test case 2: Kebab case
  test('should convert kebab-case to PascalCase', () => {
    expect(pascalCase('hello-world')).toBe('HelloWorld');
  });

  // Test case 3: Snake case
  test('should convert snake_case to PascalCase', () => {
    expect(pascalCase('hello_world')).toBe('HelloWorld');
  });

  // Test case 4: Camel case
  test('should convert camelCase to PascalCase', () => {
    expect(pascalCase('helloWorld')).toBe('HelloWorld');
  });

  // Test case 5: Already PascalCase
  test('should return the same string if it is already PascalCase', () => {
    expect(pascalCase('HelloWorld')).toBe('HelloWorld');
  });

  // Test case 6: Mixed case and separators
  test('should convert mixed case and separators to PascalCase', () => {
    expect(pascalCase('fooBar Baz_QuX-bAng')).toBe('FooBarBazQuxBang');
  });

  // Test case 7: String with numbers
  test('should handle strings with numbers correctly', () => {
    expect(pascalCase('version 1 2 3')).toBe('Version123');
    expect(pascalCase('version-1.2.3')).toBe('Version123');
  });

  // Test case 8: Leading/trailing spaces or separators
  test('should trim leading/trailing spaces and separators', () => {
    expect(pascalCase('  -Hello World-  ')).toBe('HelloWorld');
    expect(pascalCase('__hello_world__')).toBe('HelloWorld');
  });

  // Test case 9: Empty string
  test('should return an empty string for an empty input', () => {
    expect(pascalCase('')).toBe('');
  });

  // Test case 10: Invalid input - non-string
  test('should throw TypeError if the input is not a string', () => {
    expect(() => pascalCase(123)).toThrow(TypeError);
    expect(() => pascalCase(null)).toThrow(TypeError);
    expect(() => pascalCase(undefined)).toThrow(TypeError);
    expect(() => pascalCase({})).toThrow(TypeError);
    expect(() => pascalCase([])).toThrow(TypeError);
  });

  // Test case 11: Acronyms
  test('should handle acronyms correctly', () => {
    expect(pascalCase('NASA JPL')).toBe('NasaJpl'); // Note: Typically acronyms are capitalized like 'NASA' in PascalCase, but this common implementation converts them fully.
    expect(pascalCase('HTTP Response Code')).toBe('HttpResponseCode');
  });
});
