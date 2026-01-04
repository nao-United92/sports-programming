import { startsWithIgnoreCase } from './string-starts-with-ignore-case-utils';

describe('startsWithIgnoreCase', () => {
  test('should return true for a case-sensitive match', () => {
    expect(startsWithIgnoreCase('HelloWorld', 'Hello')).toBe(true);
  });

  test('should return true for a case-insensitive match', () => {
    expect(startsWithIgnoreCase('HelloWorld', 'hello')).toBe(true);
    expect(startsWithIgnoreCase('helloworld', 'Hello')).toBe(true);
    expect(startsWithIgnoreCase('HELLOworld', 'hello')).toBe(true);
  });

  test('should return false for no match', () => {
    expect(startsWithIgnoreCase('HelloWorld', 'World')).toBe(false);
    expect(startsWithIgnoreCase('HelloWorld', 'xyz')).toBe(false);
  });

  test('should return true for a full string match', () => {
    expect(startsWithIgnoreCase('test', 'test')).toBe(true);
    expect(startsWithIgnoreCase('test', 'TeSt')).toBe(true);
  });

  test('should return false if the string is shorter than the prefix', () => {
    expect(startsWithIgnoreCase('abc', 'abcd')).toBe(false);
  });

  test('should return true for any string with an empty prefix', () => {
    expect(startsWithIgnoreCase('HelloWorld', '')).toBe(true);
    expect(startsWithIgnoreCase('', '')).toBe(true);
  });

  test('should throw a TypeError if str is not a string', () => {
    expect(() => startsWithIgnoreCase(null, 'prefix')).toThrow('Expected both arguments to be strings');
    expect(() => startsWithIgnoreCase(123, 'prefix')).toThrow('Expected both arguments to be strings');
  });

  test('should throw a TypeError if prefix is not a string', () => {
    expect(() => startsWithIgnoreCase('string', null)).toThrow('Expected both arguments to be strings');
    expect(() => startsWithIgnoreCase('string', 123)).toThrow('Expected both arguments to be strings');
  });
});
