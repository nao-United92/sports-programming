import stringIsAlpha from './string-is-alpha';

describe('stringIsAlpha', () => {
  test('should return true for a string with only alphabetic characters', () => {
    expect(stringIsAlpha('helloWorld')).toBe(true);
  });

  test('should return true for a string with only uppercase alphabetic characters', () => {
    expect(stringIsAlpha('HELLO')).toBe(true);
  });

  test('should return true for a string with only lowercase alphabetic characters', () => {
    expect(stringIsAlpha('world')).toBe(true);
  });

  test('should return true for an empty string', () => {
    expect(stringIsAlpha('')).toBe(true);
  });

  test('should return false for a string with numbers', () => {
    expect(stringIsAlpha('hello123')).toBe(false);
  });

  test('should return false for a string with spaces', () => {
    expect(stringIsAlpha('hello world')).toBe(false);
  });

  test('should return false for a string with special characters', () => {
    expect(stringIsAlpha('hello!')).toBe(false);
  });

  test('should return false for a string with mixed alphanumeric and special characters', () => {
    expect(stringIsAlpha('hello-world123!')).toBe(false);
  });
});
