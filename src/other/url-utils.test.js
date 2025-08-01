import { getQueryParams, addQueryParams } from './url-utils';

describe('getQueryParams', () => {
  test('should parse query parameters from a URL string', () => {
    const url = 'http://example.com?name=test&age=30';
    expect(getQueryParams(url)).toEqual({ name: 'test', age: '30' });
  });

  test('should handle URL with no query parameters', () => {
    const url = 'http://example.com';
    expect(getQueryParams(url)).toEqual({});
  });

  test('should handle URL with empty query parameters', () => {
    const url = 'http://example.com?';
    expect(getQueryParams(url)).toEqual({});
  });

  test('should handle URL with duplicate keys, taking the last one', () => {
    const url = 'http://example.com?name=test1&name=test2';
    expect(getQueryParams(url)).toEqual({ name: 'test2' });
  });

  test('should decode URI components', () => {
    const url = 'http://example.com?param=%20value%20with%20spaces';
    expect(getQueryParams(url)).toEqual({ param: ' value with spaces' });
  });

  test('should handle parameters without values', () => {
    const url = 'http://example.com?param1&param2=value';
    expect(getQueryParams(url)).toEqual({ param1: '', param2: 'value' });
  });
});

describe('addQueryParams', () => {
  test('should add query parameters to a URL with no existing parameters', () => {
    const url = 'http://example.com';
    const params = { name: 'test', age: 30 };
    expect(addQueryParams(url, params)).toBe('http://example.com?name=test&age=30');
  });

  test('should add query parameters to a URL with existing parameters', () => {
    const url = 'http://example.com?existing=param';
    const params = { name: 'test', age: 30 };
    expect(addQueryParams(url, params)).toBe('http://example.com?existing=param&name=test&age=30');
  });

  test('should update existing query parameters', () => {
    const url = 'http://example.com?name=old&age=20';
    const params = { name: 'new', city: 'tokyo' };
    expect(addQueryParams(url, params)).toBe('http://example.com?name=new&age=20&city=tokyo');
  });

  test('should handle empty paramsToAdd object', () => {
    const url = 'http://example.com?name=test';
    expect(addQueryParams(url, {})).toBe('http://example.com?name=test');
  });

  test('should encode URI components', () => {
    const url = 'http://example.com';
    const params = { param: 'value with spaces' };
    expect(addQueryParams(url, params)).toBe('http://example.com?param=value%20with%20spaces');
  });

  test('should handle parameters with special characters', () => {
    const url = 'http://example.com';
    const params = { 'key with spaces': 'value/with/slashes' };
    expect(addQueryParams(url, params)).toBe('http://example.com?key%20with%20spaces=value%2Fwith%2Fslashes');
  });

  test('should handle URL with hash', () => {
    const url = 'http://example.com#hash';
    const params = { name: 'test' };
    expect(addQueryParams(url, params)).toBe('http://example.com?name=test#hash');
  });
});