import { pascalCase } from './string-pascal-case-utils.js';

describe('pascalCase', () => {
  test('should convert a string to PascalCase', () => {
    expect(pascalCase('Foo Bar')).toBe('FooBar');
    expect(pascalCase('--foo-bar--')).toBe('FooBar');
    expect(pascalCase('__FOO_BAR__')).toBe('FooBar');
  });
});
