import { kebabCase } from './string-kebab-case-utils.js';

describe('kebabCase', () => {
  test('should convert a string to kebab case', () => {
    expect(kebabCase('Foo Bar')).toBe('foo-bar');
    expect(kebabCase('--foo-bar--')).toBe('foo-bar');
    expect(kebabCase('__FOO_BAR__')).toBe('foo-bar');
  });
});