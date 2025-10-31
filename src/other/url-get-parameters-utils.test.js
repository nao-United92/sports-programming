const { getURLParameters } = require('./url-get-parameters-utils');

describe('getURLParameters', () => {
  it('should parse a simple URL with one parameter', () => {
    const url = 'https://example.com?name=John';
    expect(getURLParameters(url)).toEqual({ name: 'John' });
  });

  it('should parse a URL with multiple parameters', () => {
    const url = 'https://example.com/path?name=John&age=30';
    expect(getURLParameters(url)).toEqual({ name: 'John', age: '30' });
  });

  it('should handle URLs with no query string', () => {
    const url = 'https://example.com/path';
    expect(getURLParameters(url)).toEqual({});
  });

  it('should handle URLs with an empty query string', () => {
    const url = 'https://example.com/path?';
    expect(getURLParameters(url)).toEqual({});
  });

  it('should handle special characters in parameters', () => {
    const url = 'https://example.com?query=hello%20world&char=%26';
    expect(getURLParameters(url)).toEqual({ query: 'hello world', char: '&' });
  });

  it('should handle duplicate keys by taking the last value', () => {
    const url = 'https://example.com?a=1&b=2&a=3';
    expect(getURLParameters(url)).toEqual({ a: '3', b: '2' });
  });

  it('should handle relative URLs', () => {
    const url = '/some/path?page=2&limit=10';
    expect(getURLParameters(url)).toEqual({ page: '2', limit: '10' });
  });

  it('should return an empty object for an invalid URL string', () => {
    const url = 'I am not a valid url string';
    // The URL constructor is surprisingly resilient, but this should fail.
    // It might depend on the Node.js version, but we expect an empty object for garbage input.
    expect(getURLParameters(url)).toEqual({});
  });

  it('should handle a URL with just a query string', () => {
    const url = '?framework=react&lang=js';
    expect(getURLParameters(url)).toEqual({ framework: 'react', lang: 'js' });
  });
});
