import { truncate, slugify } from './string-utils.js';

describe('truncate', () => {
  test('should truncate a string that is longer than the specified length', () => {
    expect(truncate('hello world', 8)).toBe('hello...');
  });

  test('should not truncate a string that is shorter than or equal to the specified length', () => {
    expect(truncate('hello', 10)).toBe('hello');
  });

  test('should allow a custom suffix', () => {
    expect(truncate('hello world', 8, '---')).toBe('hello---');
  });
});

describe('slugify', () => {
  test('should convert a string to a slug', () => {
    expect(slugify('Hello World')).toBe('hello-world');
  });

  test('should remove special characters', () => {
    expect(slugify('Hello World! 123?')).toBe('hello-world-123');
  });

  test('should handle multiple spaces and hyphens', () => {
    expect(slugify('  hello   world--  ')).toBe('hello-world');
  });
});

