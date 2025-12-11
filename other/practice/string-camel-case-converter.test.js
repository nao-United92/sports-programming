const toCamelCase = require('./string-camel-case-converter');

describe('toCamelCase', () => {
  test('should convert kebab-case to camelCase', () => {
    expect(toCamelCase('hello-world')).toBe('helloWorld');
    expect(toCamelCase('my-first-string')).toBe('myFirstString');
    expect(toCamelCase('a-b-c-d-e')).toBe('aBCDE');
  });

  test('should convert snake_case to camelCase', () => {
    expect(toCamelCase('hello_world')).toBe('helloWorld');
    expect(toCamelCase('my_first_string')).toBe('myFirstString');
    expect(toCamelCase('a_b_c_d_e')).toBe('aBCDE');
  });

  test('should handle strings that are already camelCase', () => {
    expect(toCamelCase('helloWorld')).toBe('helloWorld');
    expect(toCamelCase('myFirstString')).toBe('myFirstString');
  });

  test('should handle empty or null strings', () => {
    expect(toCamelCase('')).toBe('');
    expect(toCamelCase(null)).toBe('');
    expect(toCamelCase(undefined)).toBe('');
  });

  test('should handle strings with leading/trailing separators', () => {
    expect(toCamelCase('_hello_world_')).toBe('helloWorld');
    expect(toCamelCase('-hello-world-')).toBe('helloWorld');
  });

  test('should handle strings with mixed separators', () => {
    expect(toCamelCase('hello_world-from-me')).toBe('helloWorldFromMe');
  });
});
