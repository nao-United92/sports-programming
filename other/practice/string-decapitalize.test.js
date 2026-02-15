const decapitalize = require('./string-decapitalize');

describe('decapitalize', () => {
  test('should decapitalize the first letter of a string', () => {
    expect(decapitalize('Hello')).toBe('hello');
  });

  test('should return an empty string if given an empty string', () => {
    expect(decapitalize('')).toBe('');
  });

  test('should handle a string that is already decapitalized', () => {
    expect(decapitalize('world')).toBe('world');
  });

  test('should handle a single character string', () => {
    expect(decapitalize('A')).toBe('a');
  });

  test('should not affect subsequent characters', () => {
    expect(decapitalize('Hello World')).toBe('hello World');
  });

  test('should handle strings with leading spaces', () => {
    expect(decapitalize(' Hello')).toBe(' Hello'); // Only the first char is affected, which is a space
  });

  test('should throw an error if the argument is not a string', () => {
    expect(() => decapitalize(null)).toThrow('Argument must be a string.');
    expect(() => decapitalize(123)).toThrow('Argument must be a string.');
    expect(() => decapitalize([])).toThrow('Argument must be a string.');
  });
});
