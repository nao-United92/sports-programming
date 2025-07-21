
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
