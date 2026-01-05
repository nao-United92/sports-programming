import isURL from './string-is-url-utils';

describe('isURL', () => {
  test('should return true for valid URLs', () => {
    expect(isURL('http://example.com')).toBe(true);
    expect(isURL('https://www.example.com/path?query=1#hash')).toBe(true);
    expect(isURL('ftp://ftp.example.com')).toBe(true);
    expect(isURL('http://localhost:3000')).toBe(true);
    expect(isURL('http://127.0.0.1')).toBe(true);
    expect(isURL('https://user:pass@example.com')).toBe(true);
  });

  test('should return false for invalid URLs', () => {
    expect(isURL('example.com')).toBe(false); // Missing protocol
    expect(isURL('invalid-url')).toBe(false);
    expect(isURL('http://')).toBe(false);

    expect(isURL('  http://example.com  ')).toBe(false); // Leading/trailing spaces
  });

  test('should throw an error if the argument is not a string', () => {
    expect(() => isURL(null)).toThrow(TypeError);
    expect(() => isURL(undefined)).toThrow(TypeError);
    expect(() => isURL(123)).toThrow(TypeError);
    expect(() => isURL({})).toThrow(TypeError);
    expect(() => isURL([])).toThrow(TypeError);
  });
});
