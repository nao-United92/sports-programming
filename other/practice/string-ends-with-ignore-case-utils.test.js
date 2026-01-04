import { endsWithIgnoreCase } from './string-ends-with-ignore-case-utils';

describe('endsWithIgnoreCase', () => {
  test('should return true for a case-sensitive match', () => {
    expect(endsWithIgnoreCase('HelloWorld', 'World')).toBe(true);
  });

  test('should return true for a case-insensitive match', () => {
    expect(endsWithIgnoreCase('HelloWorld', 'world')).toBe(true);
    expect(endsWithIgnoreCase('helloworld', 'World')).toBe(true);
    expect(endsWithIgnoreCase('HELLOworld', 'WoRld')).toBe(true);
  });

  test('should return false for no match', () => {
    expect(endsWithIgnoreCase('HelloWorld', 'Hello')).toBe(false);
    expect(endsWithIgnoreCase('HelloWorld', 'xyz')).toBe(false);
  });

  test('should return true for a full string match', () => {
    expect(endsWithIgnoreCase('test', 'test')).toBe(true);
    expect(endsWithIgnoreCase('test', 'TeSt')).toBe(true);
  });

  test('should return false if the string is shorter than the suffix', () => {
    expect(endsWithIgnoreCase('abc', 'abcd')).toBe(false);
  });

  test('should return true for any string with an empty suffix', () => {
    expect(endsWithIgnoreCase('HelloWorld', '')).toBe(true);
    expect(endsWithIgnoreCase('', '')).toBe(true);
  });

  test('should throw a TypeError if str is not a string', () => {
    expect(() => endsWithIgnoreCase(null, 'suffix')).toThrow('Expected both arguments to be strings');
    expect(() => endsWithIgnoreCase(123, 'suffix')).toThrow('Expected both arguments to be strings');
  });

  test('should throw a TypeError if suffix is not a string', () => {
    expect(() => endsWithIgnoreCase('string', null)).toThrow('Expected both arguments to be strings');
    expect(() => endsWithIgnoreCase('string', 123)).toThrow('Expected both arguments to be strings');
  });
});
