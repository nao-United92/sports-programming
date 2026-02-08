import { kebabCase } from './string-kebab-case.js';

describe('kebabCase', () => {
  it('should convert a camelCase string to kebab-case', () => {
    expect(kebabCase('helloWorld')).toBe('hello-world');
  });

  it('should convert a snake_case string to kebab-case', () => {
    expect(kebabCase('hello_world')).toBe('hello-world');
  });

  it('should convert a space-separated string to kebab-case', () => {
    expect(kebabCase('hello world')).toBe('hello-world');
  });

  it('should handle already kebab-cased strings', () => {
    expect(kebabCase('hello-world')).toBe('hello-world');
  });

  it('should handle strings with leading and trailing separators', () => {
    expect(kebabCase('-hello-world-')).toBe('hello-world');
  });
});