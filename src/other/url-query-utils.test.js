const { queryStringToObject } = require('./url-query-utils');

describe('queryStringToObject', () => {
  it('should convert a simple query string to an object', () => {
    const url = 'https://example.com?a=1&b=hello';
    expect(queryStringToObject(url)).toEqual({ a: '1', b: 'hello' });
  });

  it('should handle multiple values for the same key', () => {
    const url = 'https://example.com?a=1&a=2&b=3';
    expect(queryStringToObject(url)).toEqual({ a: ['1', '2'], b: '3' });
  });

  it('should handle encoded characters', () => {
    const url = 'https://example.com?name=John%20Doe&city=New%20York';
    expect(queryStringToObject(url)).toEqual({ name: 'John Doe', city: 'New York' });
  });

  it('should return an empty object for a URL with no query string', () => {
    const url = 'https://example.com';
    expect(queryStringToObject(url)).toEqual({});
  });

  it('should handle a query string starting with ?', () => {
    const queryString = '?a=1&b=2';
    expect(queryStringToObject(queryString)).toEqual({ a: '1', b: '2' });
  });

  it('should handle an empty query string', () => {
    const url = 'https://example.com?';
    expect(queryStringToObject(url)).toEqual({});
  });

  it('should handle complex cases with multiple same-key values', () => {
    const url = 'https://example.com?a=1&b=2&a=3&a=4';
    expect(queryStringToObject(url)).toEqual({ a: ['1', '3', '4'], b: '2' });
  });
});