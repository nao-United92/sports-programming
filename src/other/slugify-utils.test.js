const { slugify } = require('./slugify-utils.js');

describe('slugify', () => {
  it('should convert spaces to hyphens and lowercase the string', () => {
    expect(slugify('Hello World')).toBe('hello-world');
  });

  it('should remove special characters', () => {
    expect(slugify('Hello, World! How are you?')).toBe('hello-world-how-are-you');
  });

  it('should handle leading and trailing spaces', () => {
    expect(slugify('  Another Test String  ')).toBe('another-test-string');
  });

  it('should replace multiple spaces with a single hyphen', () => {
    expect(slugify('  Multiple   Spaces   Here  ')).toBe('multiple-spaces-here');
  });

  it('should handle empty strings', () => {
    expect(slugify('')).toBe('');
  });

  it('should handle strings with only special characters', () => {
    expect(slugify('!@#$%^&*()')).toBe('');
  });

  it('should handle accented characters', () => {
    expect(slugify('Crème Brûlée')).toBe('creme-brulee');
  });

  it('should return an empty string for non-string inputs', () => {
    expect(slugify(null)).toBe('');
    expect(slugify(undefined)).toBe('');
    expect(slugify(123)).toBe('');
    expect(slugify({})).toBe('');
  });
});
