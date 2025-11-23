import { camelCase } from './string-camel-case-utils';

describe('camelCase', () => {
  it('should convert a space-separated string to camel case', () => {
    expect(camelCase('Foo Bar')).toBe('fooBar');
  });

  it('should convert a kebab-cased string to camel case', () => {
    expect(camelCase('--foo-bar--')).toBe('fooBar');
  });

  it('should convert a snake_cased string to camel case', () => {
    expect(camelCase('__FOO_BAR__')).toBe('fooBar');
  });

  it('should handle a single word', () => {
    expect(camelCase('foo')).toBe('foo');
    expect(camelCase('FOO')).toBe('foo');
  });

  it('should handle an empty string', () => {
    expect(camelCase('')).toBe('');
  });

  it('should handle non-string inputs', () => {
    expect(camelCase(null)).toBe('');
    expect(camelCase(undefined)).toBe('');
    expect(camelCase(123)).toBe('');
  });
});
