import { camelCase } from './string-camel-case-utils.js';

describe('camelCase', () => {
  test('should convert a string to camel case', () => {
    expect(camelCase('Foo Bar')).toBe('fooBar');
    expect(camelCase('--foo-bar--')).toBe('fooBar');
    expect(camelCase('__FOO_BAR__')).toBe('fooBar');
  });
});
