const toSnakeCase = require('./string-snake-case');

describe('toSnakeCase', () => {
  test('should convert camelCase to snake_case', () => {
    expect(toSnakeCase('helloWorld')).toBe('hello_world');
  });

  test('should convert PascalCase to snake_case', () => {
    expect(toSnakeCase('HelloWorld')).toBe('hello_world');
  });

  test('should convert kebab-case to snake_case', () => {
    expect(toSnakeCase('hello-world')).toBe('hello_world');
  });

  test('should convert spaces to underscores', () => {
    expect(toSnakeCase('hello world')).toBe('hello_world');
  });

  test('should handle alphanumeric strings', () => {
    expect(toSnakeCase('v1BetaVersion')).toBe('v1_beta_version');
  });
});
