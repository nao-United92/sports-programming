import { snakeCase } from './string-snake-case-utils.js';

describe('snakeCase', () => {
  test('should convert a string to snake case', () => {
    expect(snakeCase('Foo Bar')).toBe('foo_bar');
    expect(snakeCase('--foo-bar--')).toBe('foo_bar');
    expect(snakeCase('__FOO_BAR__')).toBe('foo_bar');
  });
});