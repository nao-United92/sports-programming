const { getQueryParams, getQueryParam, addQueryParam, removeQueryParam } = require('./url-utils.js');

describe('URL Utilities', () => {
  describe('getQueryParams', () => {
    test('should parse all query parameters from a given URL', () => {
      const url = 'http://test.com?name=Alice&age=30&city=New%20York';
      expect(getQueryParams(url)).toEqual({
        name: 'Alice',
        age: '30',
        city: 'New York'
      });
    });

    test('should return an empty object if no query parameters exist', () => {
      const url = 'http://test.com/path';
      expect(getQueryParams(url)).toEqual({});
    });

    test('should handle parameters without values', () => {
      const url = 'http://test.com?param1=&param2';
      expect(getQueryParams(url)).toEqual({
        param1: '',
        param2: ''
      });
    });
  });

  describe('getQueryParam', () => {
    test('should return the value of a specific query parameter', () => {
      const url = 'http://test.com?name=Alice&age=30';
      expect(getQueryParam(url, 'name')).toBe('Alice');
      expect(getQueryParam(url, 'age')).toBe('30');
    });

    test('should return null if the parameter does not exist', () => {
      const url = 'http://test.com?name=Alice';
      expect(getQueryParam(url, 'city')).toBeNull();
    });
  });

  describe('addQueryParam', () => {
    test('should add a new query parameter to a URL', () => {
      const url = 'http://test.com/path';
      expect(addQueryParam(url, 'newParam', 'newValue')).toBe('http://test.com/path?newParam=newValue');
    });

    test('should update an existing query parameter in a URL', () => {
      const url = 'http://test.com/path?param1=oldValue';
      expect(addQueryParam(url, 'param1', 'newValue')).toBe('http://test.com/path?param1=newValue');
    });

    test('should add a parameter to a URL that already has others', () => {
      const url = 'http://test.com/path?param1=value1&param2=value2';
      expect(addQueryParam(url, 'newParam', 'newValue')).toBe('http://test.com/path?param1=value1&param2=value2&newParam=newValue');
    });

    test('should handle URL encoding for parameter names and values', () => {
      const url = 'http://test.com/path';
      expect(addQueryParam(url, 'param with spaces', 'value with spaces & symbols')).toBe('http://test.com/path?param%20with%20spaces=value%20with%20spaces%20%26%20symbols');
    });
  });

  describe('removeQueryParam', () => {
    test('should remove a specific query parameter from a URL', () => {
      const url = 'http://test.com/path?param1=value1&param2=value2';
      expect(removeQueryParam(url, 'param1')).toBe('http://test.com/path?param2=value2');
    });

    test('should return the base URL if the last parameter is removed', () => {
      const url = 'http://test.com/path?param1=value1';
      expect(removeQueryParam(url, 'param1')).toBe('http://test.com/path');
    });

    test('should return the URL unchanged if the parameter does not exist', () => {
      const url = 'http://test.com/path?param1=value1';
      expect(removeQueryParam(url, 'nonExistentParam')).toBe('http://test.com/path?param1=value1');
    });

    test('should handle URLs without query strings', () => {
      const url = 'http://test.com/path';
      expect(removeQueryParam(url, 'param1')).toBe('http://test.com/path');
    });
  });
});