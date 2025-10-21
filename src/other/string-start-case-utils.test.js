import { startCase } from './string-start-case-utils.js';

describe('startCase', () => {
  test('should convert a string to start case', () => {
    expect(startCase('foo-bar')).toBe('Foo Bar');
    expect(startCase('fooBar')).toBe('Foo Bar');
    expect(startCase('__FOO_BAR__')).toBe('Foo Bar');
  });

  test('should handle empty string', () => {
    expect(startCase('')).toBe('');
  });

  test('should handle single word string', () => {
    expect(startCase('word')).toBe('Word');
  });
});