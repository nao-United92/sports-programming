const startsWithIgnoreCase = require('./string-starts-with-ignore-case-utils');

describe('startsWithIgnoreCase', () => {
  test('should return true if string starts with prefix (case-insensitive)', () => {
    expect(startsWithIgnoreCase('Hello World', 'hello')).toBe(true);
    expect(startsWithIgnoreCase('Hello World', 'HELLO')).toBe(true);
    expect(startsWithIgnoreCase('Hello World', 'HeLlO')).toBe(true);
  });

  test('should return false if string does not start with prefix', () => {
    expect(startsWithIgnoreCase('Hello World', 'world')).toBe(false);
    expect(startsWithIgnoreCase('Foo Bar', 'baz')).toBe(false);
  });

  test('should return true if prefix is an empty string', () => {
    expect(startsWithIgnoreCase('Hello World', '')).toBe(true);
    expect(startsWithIgnoreCase('', '')).toBe(true);
  });

  test('should return false if string is empty and prefix is not empty', () => {
    expect(startsWithIgnoreCase('', 'a')).toBe(false);
  });

  test('should return false if string is shorter than prefix', () => {
    expect(startsWithIgnoreCase('abc', 'abcd')).toBe(false);
  });

  test('should throw an error if first argument is not a string', () => {
    expect(() => startsWithIgnoreCase(null, 'hello')).toThrow('Both arguments must be strings.');
    expect(() => startsWithIgnoreCase(undefined, 'hello')).toThrow('Both arguments must be strings.');
    expect(() => startsWithIgnoreCase(123, 'hello')).toThrow('Both arguments must be strings.');
    expect(() => startsWithIgnoreCase({}, 'hello')).toThrow('Both arguments must be strings.');
  });

  test('should throw an error if second argument is not a string', () => {
    expect(() => startsWithIgnoreCase('hello', null)).toThrow('Both arguments must be strings.');
    expect(() => startsWithIgnoreCase('hello', undefined)).toThrow('Both arguments must be strings.');
    expect(() => startsWithIgnoreCase('hello', 123)).toThrow('Both arguments must be strings.');
    expect(() => startsWithIgnoreCase('hello', {})).toThrow('Both arguments must be strings.');
  });
});