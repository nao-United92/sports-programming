import { truncate, slugify } from './string-utils';

describe('truncate', () => {
  test('should truncate a string that is too long', () => {
    expect(truncate('hello world', 8)).toBe('hello...');
  });

  test('should not truncate a string that is short enough', () => {
    expect(truncate('hello', 10)).toBe('hello');
  });

  test('should use a custom suffix', () => {
    expect(truncate('hello world', 8, '!!')).toBe('hello !!');
  });

  test('should return an empty string for non-string input', () => {
    expect(truncate(123, 5)).toBe('');
  });

  test('should return an empty string for empty input', () => {
    expect(truncate('', 5)).toBe('');
  });
});

describe('slugify', () => {
  test('should convert string to slug', () => {
    expect(slugify('Hello World!')).toBe('hello-world');
  });

  test('should handle multiple spaces and hyphens', () => {
    expect(slugify(' --some--  string-- ')).toBe('some-string');
  });

  test('should remove special characters', () => {
    expect(slugify('!@#$%^&*()=+_`~[]{}|;:\'",.<>/?')).toBe('');
  });

  test('should handle empty string', () => {
    expect(slugify('')).toBe('');
  });

  test('should handle non-string input', () => {
    expect(slugify(null)).toBe('');
    expect(slugify(undefined)).toBe('');
    expect(slugify(123)).toBe('');
  });
});
