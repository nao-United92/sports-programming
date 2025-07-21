
describe('removeNonAlphanumeric', () => {
  test('should remove all non-alphanumeric characters from a string', () => {
    expect(removeNonAlphanumeric('Hello, World!123')).toBe('HelloWorld123');
    expect(removeNonAlphanumeric('  abc-123_xyz  ')).toBe('abc123xyz');
    expect(removeNonAlphanumeric('!@#$%^&*()')).toBe('');
    expect(removeNonAlphanumeric('abc')).toBe('abc');
  });

  test('should return an empty string if the input is not a string', () => {
    expect(removeNonAlphanumeric(123)).toBe('');
    expect(removeNonAlphanumeric(null)).toBe('');
    expect(removeNonAlphanumeric(undefined)).toBe('');
  });

  test('should handle empty string', () => {
    expect(removeNonAlphanumeric('')).toBe('');
  });
});

describe('reverseString', () => {
  test('should reverse a given string', () => {
    expect(reverseString('hello')).toBe('olleh');
    expect(reverseString('world')).toBe('dlrow');
    expect(reverseString('12345')).toBe('54321');
    expect(reverseString('')).toBe('');
  });

  test('should return an empty string if the input is not a string', () => {
    expect(reverseString(123)).toBe('');
    expect(reverseString(null)).toBe('');
    expect(reverseString(undefined)).toBe('');
  });
});
