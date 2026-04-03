const stringReverseRecursive = require('./string-reverse-recursive');

describe('stringReverseRecursive', () => {
  test('should reverse a string', () => {
    expect(stringReverseRecursive('hello')).toBe('olleh');
  });

  test('should reverse a single character string', () => {
    expect(stringReverseRecursive('a')).toBe('a');
  });

  test('should handle empty string', () => {
    expect(stringReverseRecursive('')).toBe('');
  });

  test('should reverse a string with spaces', () => {
    expect(stringReverseRecursive('hello world')).toBe('dlrow olleh');
  });

  test('should reverse a string with special characters', () => {
    expect(stringReverseRecursive('!@#')).toBe('#@!');
  });
});
