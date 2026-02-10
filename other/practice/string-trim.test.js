import stringTrim from './string-trim';

describe('stringTrim', () => {
  test('should remove leading and trailing spaces', () => {
    expect(stringTrim('  hello world  ')).toBe('hello world');
  });

  test('should return the same string if no leading or trailing spaces', () => {
    expect(stringTrim('hello world')).toBe('hello world');
  });

  test('should return an empty string for an empty string', () => {
    expect(stringTrim('')).toBe('');
  });

  test('should return an empty string for a string with only spaces', () => {
    expect(stringTrim('   ')).toBe('');
  });

    test('should handle other whitespace characters (tabs, newlines)', () => {

      expect(stringTrim('\tHello\n')).toBe('Hello');

    });

  test('should not remove internal spaces', () => {
    expect(stringTrim('  one   two  ')).toBe('one   two');
  });
});
