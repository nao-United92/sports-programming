import kebabCase from './string-kebab-case-utils';

describe('kebabCase', () => {
  // Test case 1: Basic string conversion
  test('should convert a single word to kebab-case', () => {
    expect(kebabCase('hello')).toBe('hello');
  });

  // Test case 2: Space separated words
  test('should convert space-separated words to kebab-case', () => {
    expect(kebabCase('Hello World')).toBe('hello-world');
  });

  // Test case 3: Camel case
  test('should convert camelCase to kebab-case', () => {
    expect(kebabCase('helloWorld')).toBe('hello-world');
  });

  // Test case 4: Pascal case
  test('should convert PascalCase to kebab-case', () => {
    expect(kebabCase('HelloWorld')).toBe('hello-world');
  });

  // Test case 5: Snake case
  test('should convert snake_case to kebab-case', () => {
    expect(kebabCase('hello_world')).toBe('hello-world');
  });

  // Test case 6: Mixed case and separators
  test('should convert mixed case and separators to kebab-case', () => {
    expect(kebabCase('fooBar Baz_QuX-bAng')).toBe('foo-bar-baz-qux-bang');
  });

  // Test case 7: String with numbers
  test('should handle strings with numbers correctly', () => {
    expect(kebabCase('version1 2 3')).toBe('version1-2-3');
    expect(kebabCase('version-1.2.3')).toBe('version-1-2-3');
  });

  // Test case 8: Leading/trailing spaces or separators
  test('should trim leading/trailing spaces and separators', () => {
    expect(kebabCase('  -Hello World-  ')).toBe('hello-world');
    expect(kebabCase('__hello_world__')).toBe('hello-world');
  });

  // Test case 9: Empty string
  test('should return an empty string for an empty input', () => {
    expect(kebabCase('')).toBe('');
  });

  // Test case 10: Invalid input - non-string
  test('should throw TypeError if the input is not a string', () => {
    expect(() => kebabCase(123)).toThrow(TypeError);
    expect(() => kebabCase(null)).toThrow(TypeError);
    expect(() => kebabCase(undefined)).toThrow(TypeError);
    expect(() => kebabCase({})).toThrow(TypeError);
    expect(() => kebabCase([])).toThrow(TypeError);
  });

  // Test case 11: Acronyms and multiple uppercase letters
  test('should handle acronyms and multiple uppercase letters correctly', () => {
    expect(kebabCase('NASA JPL')).toBe('nasa-jpl');
    expect(kebabCase('HTTPResponseCode')).toBe('http-response-code');
    expect(kebabCase('myHTMLDocument')).toBe('my-html-document');
  });
});