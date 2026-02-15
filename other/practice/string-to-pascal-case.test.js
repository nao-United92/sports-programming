const toPascalCase = require('./string-to-pascal-case');

describe('toPascalCase', () => {
  test('should convert a dash-separated string to PascalCase', () => {
    expect(toPascalCase('hello-world')).toBe('HelloWorld');
  });

  test('should convert a space-separated string to PascalCase', () => {
    expect(toPascalCase('hello world')).toBe('HelloWorld');
  });

  test('should convert an underscore-separated string to PascalCase', () => {
    expect(toPascalCase('hello_world')).toBe('HelloWorld');
  });

  test('should convert a mixed-separator string to PascalCase', () => {
    expect(toPascalCase('hello-world_again and-again')).toBe('HelloWorldAgainAndAgain');
  });

  test('should handle a string that is already PascalCase', () => {
    expect(toPascalCase('AlreadyPascalCase')).toBe('AlreadyPascalCase');
  });

  test('should handle a single word string', () => {
    expect(toPascalCase('word')).toBe('Word');
  });

  test('should handle an empty string', () => {
    expect(toPascalCase('')).toBe('');
  });

  test('should handle a string with leading/trailing separators', () => {
    expect(toPascalCase('-hello-world-')).toBe('HelloWorld');
    expect(toPascalCase('_hello_world_')).toBe('HelloWorld');
    expect(toPascalCase(' hello world ')).toBe('HelloWorld');
  });

  test('should handle a string with numbers', () => {
    expect(toPascalCase('some-value-123')).toBe('SomeValue123');
  });

  test('should throw an error if the argument is not a string', () => {
    expect(() => toPascalCase(null)).toThrow('Argument must be a string.');
    expect(() => toPascalCase(123)).toThrow('Argument must be a string.');
    expect(() => toPascalCase([])).toThrow('Argument must be a string.');
  });
});
