import { camelCase } from './string-camel-case';

describe('camelCase', () => {
  test('converts space-separated words to camelCase', () => {
    expect(camelCase('hello world')).toBe('helloWorld');
    expect(camelCase('foo bar baz')).toBe('fooBarBaz');
  });

  test('handles single word', () => {
    expect(camelCase('hello')).toBe('hello');
  });

  test('capitalizes existing camelCase correctly (simple case)', () => {
    expect(camelCase('Hello World')).toBe('helloWorld');
  });

  test('returns empty string for non-string input', () => {
    expect(camelCase(null)).toBe('');
  });
});
