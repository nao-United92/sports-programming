import { parseQueryParams } from './url-parse-query-params-utils.js';

describe('parseQueryParams', () => {
  test('should parse query parameters from a full URL', () => {
    const url = 'https://example.com/path?name=test&id=123';
    expect(parseQueryParams(url)).toEqual({ name: 'test', id: '123' });
  });

  test('should parse query parameters from a query string', () => {
    const queryString = 'name=test&id=123';
    expect(parseQueryParams(queryString)).toEqual({ name: 'test', id: '123' });
  });

  test('should handle empty query string', () => {
    expect(parseQueryParams('')).toEqual({});
    expect(parseQueryParams('https://example.com/path')).toEqual({});
  });

  test('should handle parameters with no value', () => {
    const queryString = 'param1&param2=value2';
    expect(parseQueryParams(queryString)).toEqual({ param1: '', param2: 'value2' });
  });

  test('should handle encoded characters', () => {
    const queryString = 'name=test%20user&param=%26value%3D';
    expect(parseQueryParams(queryString)).toEqual({ name: 'test user', param: '&value=' });
  });

  test('should handle duplicate parameter names (last one wins)', () => {
    const queryString = 'name=first&name=last';
    expect(parseQueryParams(queryString)).toEqual({ name: 'last' });
  });

  test('should handle parameters with special characters in value', () => {
    const queryString = 'data=a%3Db%26c%3Dd';
    expect(parseQueryParams(queryString)).toEqual({ data: 'a=b&c=d' });
  });
});
