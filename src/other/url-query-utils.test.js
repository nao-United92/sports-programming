import { getQueryParams } from './url-query-utils';

describe('getQueryParams', () => {
  test('should return an empty object if no query parameters exist', () => {
    expect(getQueryParams('')).toEqual({});
    expect(getQueryParams('http://example.com')).toEqual({});
    expect(getQueryParams('http://example.com/path')).toEqual({});
  });

  test('should parse single query parameter correctly', () => {
    expect(getQueryParams('?name=Alice')).toEqual({ name: 'Alice' });
    expect(getQueryParams('http://example.com?name=Alice')).toEqual({ name: 'Alice' });
    expect(getQueryParams('name=Alice')).toEqual({ name: 'Alice' }); // New case: no '?'
  });

  test('should parse multiple query parameters correctly', () => {
    expect(getQueryParams('?name=Alice&age=30')).toEqual({ name: 'Alice', age: '30' });
    expect(getQueryParams('http://example.com?name=Alice&age=30')).toEqual({ name: 'Alice', age: '30' });
    expect(getQueryParams('name=Alice&age=30')).toEqual({ name: 'Alice', age: '30' }); // New case: no '?'
  });

  test('should handle query parameters with special characters', () => {
    expect(getQueryParams('?query=hello%20world%21&param=value%26with%3Dequals')).toEqual({ query: 'hello world!', param: 'value&with=equals' });
    expect(getQueryParams('query=hello%20world%21&param=value%26with%3Dequals')).toEqual({ query: 'hello world!', param: 'value&with=equals' }); // New case: no '?'
  });

  test('should handle query parameters with no value', () => {
    expect(getQueryParams('?param1&param2=value')).toEqual({ param1: '', param2: 'value' });
    expect(getQueryParams('param1&param2=value')).toEqual({ param1: '', param2: 'value' }); // New case: no '?'
  });

  test('should handle duplicate query parameters (last one wins)', () => {
    expect(getQueryParams('?param=value1&param=value2')).toEqual({ param: 'value2' });
    expect(getQueryParams('param=value1&param=value2')).toEqual({ param: 'value2' }); // New case: no '?'
  });

  test('should handle query parameters with empty values', () => {
    expect(getQueryParams('?param1=&param2=value')).toEqual({ param1: '', param2: 'value' });
    expect(getQueryParams('param1=&param2=value')).toEqual({ param1: '', param2: 'value' }); // New case: no '?'
  });

  test('should handle query string starting with # (hash)', () => {
    // URLSearchParams ignores hash part, so this should still work if search is like this
    expect(getQueryParams('#param=value')).toEqual({});
  });

  test('should handle invalid URL input gracefully', () => {
    expect(getQueryParams('invalid-url')).toEqual({ 'invalid-url': '' }); // Not a valid URL or query string
    expect(getQueryParams('http://invalid-url')).toEqual({}); // Invalid URL format
  });
});