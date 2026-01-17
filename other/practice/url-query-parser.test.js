import { parseQueryString } from './url-query-parser.js';

describe('parseQueryString', () => {
  test('should parse a simple query string', () => {
    expect(parseQueryString('?name=John&age=30')).toEqual({ name: 'John', age: '30' });
  });

  test('should handle query string without leading question mark', () => {
    expect(parseQueryString('name=John&age=30')).toEqual({ name: 'John', age: '30' });
  });

  test('should handle empty query string', () => {
    expect(parseQueryString('')).toEqual({});
    expect(parseQueryString('?')).toEqual({});
  });

  test('should handle query string with special characters and encoding', () => {
    expect(parseQueryString('?q=hello%20world&param=foo%26bar')).toEqual({ q: 'hello world', param: 'foo&bar' });
  });

  test('should handle multiple values for the same key as an array', () => {
    expect(parseQueryString('?color=red&color=blue&size=M')).toEqual({ color: ['red', 'blue'], size: 'M' });
  });

  test('should handle keys with no values', () => {
    expect(parseQueryString('?param1&param2=value2')).toEqual({ param1: '', param2: 'value2' });
  });

  test('should return an empty object for non-string inputs', () => {
    expect(parseQueryString(null)).toEqual({});
    expect(parseQueryString(undefined)).toEqual({});
    expect(parseQueryString(123)).toEqual({});
    expect(parseQueryString({})).toEqual({});
  });
  
  test('should handle values with equals signs', () => {
    expect(parseQueryString('?data=key=value')).toEqual({ data: 'key=value' });
  });
});
