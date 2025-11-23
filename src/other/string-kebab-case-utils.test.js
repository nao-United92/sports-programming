import { kebabCase } from './string-kebab-case-utils';

describe('kebabCase', () => {
  it('should convert a space-separated string to kebab case', () => {
    expect(kebabCase('Foo Bar')).toBe('foo-bar');
  });

  it('should convert a camelCased string to kebab case', () => {
    expect(kebabCase('fooBar')).toBe('foo-bar');
  });

  it('should convert a snake_cased string to kebab case', () => {
    expect(kebabCase('__FOO_BAR__')).toBe('foo-bar');
  });

  it('should handle a single word', () => {
    expect(kebabCase('foo')).toBe('foo');
    expect(kebabCase('FOO')).toBe('foo');
  });

  it('should handle an empty string', () => {
    expect(kebabCase('')).toBe('');
  });

  it('should handle non-string inputs', () => {
    expect(kebabCase(null)).toBe('');
    expect(kebabCase(undefined)).toBe('');
    expect(kebabCase(123)).toBe('');
  });
});