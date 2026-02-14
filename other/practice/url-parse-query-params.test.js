const { parseQueryParams } = require('./url-parse-query-params');

describe('parseQueryParams', () => {
  test('should parse simple query parameters', () => {
    const url = 'http://example.com?name=Alice&age=30';
    expect(parseQueryParams(url)).toEqual({ name: 'Alice', age: '30' });
  });

  test('should handle multiple parameters with the same name (last one wins)', () => {
    const url = 'http://example.com?color=red&color=blue';
    expect(parseQueryParams(url)).toEqual({ color: 'blue' });
  });

  test('should handle empty query string', () => {
    const url = 'http://example.com';
    expect(parseQueryParams(url)).toEqual({});
  });

  test('should handle query string with no values', () => {
    const url = 'http://example.com?param1&param2';
    expect(parseQueryParams(url)).toEqual({ param1: '', param2: '' });
  });

  test('should handle complex characters in values', () => {
    const url = 'http://example.com?query=hello%20world%21&param=a%26b';
    expect(parseQueryParams(url)).toEqual({ query: 'hello world!', param: 'a&b' });
  });

  test('should handle URL with hash fragment', () => {
    const url = 'http://example.com?name=Alice#section';
    expect(parseQueryParams(url)).toEqual({ name: 'Alice' });
  });

  test('should handle URL with port number', () => {
    const url = 'http://localhost:3000/path?data=test';
    expect(parseQueryParams(url)).toEqual({ data: 'test' });
  });

  test('should throw TypeError if URL is not a string', () => {
    expect(() => parseQueryParams(123)).toThrow(TypeError);
    expect(() => parseQueryParams(null)).toThrow(TypeError);
    expect(() => parseQueryParams(undefined)).toThrow(TypeError);
    expect(() => parseQueryParams({})).toThrow(TypeError);
  });

  test('should throw Error if an invalid URL is provided', () => {
    expect(() => parseQueryParams('invalid-url')).toThrow('Invalid URL provided');
    expect(() => parseQueryParams('ftp://example.com')).toThrow('Invalid URL provided');
  });
});
