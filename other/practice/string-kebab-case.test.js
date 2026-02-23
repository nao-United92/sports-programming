import { kebabCase } from './string-kebab-case';

describe('kebabCase', () => {
  test('converts space-separated words to kebab-case', () => {
    expect(kebabCase('hello world')).toBe('hello-world');
  });

  test('converts camelCase to kebab-case', () => {
    expect(kebabCase('helloWorld')).toBe('hello-world');
  });

  test('handles multiple spaces and special characters (simple)', () => {
    expect(kebabCase('hello  world')).toBe('hello-world');
  });

  test('returns empty string for non-string input', () => {
    expect(kebabCase(null)).toBe('');
  });
});
