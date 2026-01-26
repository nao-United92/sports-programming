const { parseQueryString, stringifyQueryString } = require('./query-string-parser');

describe('Query String Parser', () => {
  describe('parseQueryString', () => {
    test('should parse a simple query string', () => {
      const queryString = 'name=JohnDoe&age=30';
      expect(parseQueryString(queryString)).toEqual({ name: 'JohnDoe', age: '30' });
    });

    test('should parse a query string with special characters', () => {
      const queryString = 'param=hello%20world%21&url=https%3A%2F%2Fexample.com';
      expect(parseQueryString(queryString)).toEqual({ param: 'hello world!', url: 'https://example.com' });
    });

    test('should handle empty query string', () => {
      expect(parseQueryString('')).toEqual({});
      expect(parseQueryString('?')).toEqual({});
    });

    test('should handle query string with missing values', () => {
      const queryString = 'key1=&key2=value2';
      expect(parseQueryString(queryString)).toEqual({ key1: '', key2: 'value2' });
    });

    test('should handle query string with duplicate keys (last one wins)', () => {
      const queryString = 'key=value1&key=value2';
      expect(parseQueryString(queryString)).toEqual({ key: 'value2' });
    });
  });

  describe('stringifyQueryString', () => {
    test('should stringify a simple object', () => {
      const params = { name: 'John Doe', age: 30 };
      expect(stringifyQueryString(params)).toBe('?name=John%20Doe&age=30');
    });

    test('should handle special characters', () => {
      const params = { url: 'https://example.com', q: 'hello world!' };
      expect(stringifyQueryString(params)).toBe('?url=https%3A%2F%2Fexample.com&q=hello%20world!');
    });

    test('should handle empty object', () => {
      expect(stringifyQueryString({})).toBe('');
    });

    test('should handle undefined values (skip them)', () => {
      const params = { a: 1, b: undefined, c: 3 };
      expect(stringifyQueryString(params)).toBe('?a=1&c=3');
    });

    test('should handle null values', () => {
      const params = { a: null };
      expect(stringifyQueryString(params)).toBe('?a=null');
    });
  });
});
