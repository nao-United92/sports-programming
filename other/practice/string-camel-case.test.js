import { camelCase } from './string-camel-case.js';

describe('camelCase', () => {
  it('should convert a snake_case string to camelCase', () => {
    expect(camelCase('hello_world')).toBe('helloWorld');
  });

  it('should convert a kebab-case string to camelCase', () => {
    expect(camelCase('hello-world')).toBe('helloWorld');
  });

  it('should convert a space-separated string to camelCase', () => {
    expect(camelCase('hello world')).toBe('helloWorld');
  });

  it('should handle already camelCased strings', () => {
    expect(camelCase('helloWorld')).toBe('helloWorld');
  });

  it('should handle strings with leading and trailing separators', () => {
    expect(camelCase('-hello-world-')).toBe('helloWorld');
  });
});