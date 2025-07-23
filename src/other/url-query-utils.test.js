
import { getQueryParams, addQueryParams, removeQueryParams, hasQueryParam, getQueryParamValue, buildQueryString, updateQueryParam } from './url-query-utils';

describe('getQueryParams', () => {
  test('should parse query parameters from a URL string', () => {
    const url = '?name=John&age=30&city=';
    expect(getQueryParams(url)).toEqual({ name: 'John', age: '30', city: '' });
  });

  test('should handle URL without query string', () => {
    const url = 'https://example.com/path';
    expect(getQueryParams(url)).toEqual({});
  });

  test('should handle empty query string', () => {
    const url = '';
    expect(getQueryParams(url)).toEqual({});
  });

  test('should decode URI components', () => {
    const url = '?param=%E3%83%86%E3%82%B9%E3%83%88'; // param=テスト
    expect(getQueryParams(url)).toEqual({ param: 'テスト' });
  });
});

describe('addQueryParams', () => {
  test('should add new query parameters to a URL', () => {
    const url = 'https://example.com/path';
    const params = { name: 'Jane', age: 25 };
    expect(addQueryParams(url, params)).toBe('https://example.com/path?name=Jane&age=25');
  });

  test('should update existing query parameters', () => {
    const url = 'https://example.com/path?name=John&age=30';
    const params = { age: 25, city: 'New York' };
    expect(addQueryParams(url, params)).toBe('https://example.com/path?name=John&age=25&city=New%20York');
  });

  test('should handle URL with no initial query string', () => {
    const url = 'https://example.com/path';
    const params = { id: 123 };
    expect(addQueryParams(url, params)).toBe('https://example.com/path?id=123');
  });

  test('should handle empty params object', () => {
    const url = 'https://example.com/path?name=John';
    expect(addQueryParams(url, {})).toBe('https://example.com/path?name=John');
  });

  test('should encode URI components', () => {
    const url = 'https://example.com/path';
    const params = { query: '日本語' };
    expect(addQueryParams(url, params)).toBe('https://example.com/path?query=%E6%97%A5%E6%9C%AC%E8%AA%9E');
  });
});

describe('removeQueryParams', () => {
  test('should remove specified query parameters', () => {
    const url = 'https://example.com/path?name=John&age=30&city=NY';
    const paramsToRemove = ['age', 'city'];
    expect(removeQueryParams(url, paramsToRemove)).toBe('https://example.com/path?name=John');
  });

  test('should handle removing non-existent parameters', () => {
    const url = 'https://example.com/path?name=John';
    const paramsToRemove = ['age', 'city'];
    expect(removeQueryParams(url, paramsToRemove)).toBe('https://example.com/path?name=John');
  });

  test('should return base URL if all parameters are removed', () => {
    const url = 'https://example.com/path?name=John&age=30';
    const paramsToRemove = ['name', 'age'];
    expect(removeQueryParams(url, paramsToRemove)).toBe('https://example.com/path');
  });

  test('should handle URL with no query string initially', () => {
    const url = 'https://example.com/path';
    const paramsToRemove = ['name'];
    expect(removeQueryParams(url, paramsToRemove)).toBe('https://example.com/path');
  });
});

describe('hasQueryParam', () => {
  test('should return true if the URL has the parameter', () => {
    const url = 'https://example.com?param1=value1';
    expect(hasQueryParam(url, 'param1')).toBe(true);
  });

  test('should return false if the URL does not have the parameter', () => {
    const url = 'https://example.com?param1=value1';
    expect(hasQueryParam(url, 'param2')).toBe(false);
  });

  test('should handle empty URL', () => {
    expect(hasQueryParam('', 'param1')).toBe(false);
  });
});

describe('getQueryParamValue', () => {
  test('should return the value of the parameter if found', () => {
    const url = 'https://example.com?param1=value1&param2=value2';
    expect(getQueryParamValue(url, 'param1')).toBe('value1');
    expect(getQueryParamValue(url, 'param2')).toBe('value2');
  });

  test('should return null if the parameter is not found', () => {
    const url = 'https://example.com?param1=value1';
    expect(getQueryParamValue(url, 'param3')).toBeNull();
  });

  test('should return empty string if parameter exists but has no value', () => {
    const url = 'https://example.com?param1=';
    expect(getQueryParamValue(url, 'param1')).toBe('');
  });

  test('should handle empty URL', () => {
      expect(getQueryParamValue('', 'param1')).toBeNull();
    });
  });

  describe('buildQueryString', () => {
    test('should build a query string from an object', () => {
      const params = { name: 'John Doe', age: 30 };
      expect(buildQueryString(params)).toBe('name=John%20Doe&age=30');
    });

    test('should handle empty object', () => {
      expect(buildQueryString({})).toBe('');
    });

    test('should handle parameters with special characters', () => {
      const params = { query: '日本語 & test' };
      expect(buildQueryString(params)).toBe('query=%E6%97%A5%E6%9C%AC%E8%AA%9E%20%26%20test');
    });
  });

  describe('updateQueryParam', () => {
    test('should update an existing query parameter', () => {
      const url = 'https://example.com?name=John&age=30';
      expect(updateQueryParam(url, 'age', '31')).toBe('https://example.com?name=John&age=31');
    });

    test('should add a new query parameter', () => {
      const url = 'https://example.com?name=John';
      expect(updateQueryParam(url, 'city', 'New York')).toBe('https://example.com?name=John&city=New%20York');
    });

    test('should handle URL with no initial query string', () => {
      const url = 'https://example.com';
      expect(updateQueryParam(url, 'param', 'value')).toBe('https://example.com?param=value');
    });

    test('should handle special characters in value', () => {
      const url = 'https://example.com';
      expect(updateQueryParam(url, 'query', '日本語 & test')).toBe('https://example.com?query=%E6%97%A5%E6%9C%AC%E8%AA%9E%20%26%20test');
    });
  });
});
});
