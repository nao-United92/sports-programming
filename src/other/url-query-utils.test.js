import { getURLParameter } from './url-query-utils.js';

describe('getURLParameter', () => {
  test('should return the value of a URL parameter', () => {
    const url = 'http://example.com?name=John&age=30';
    expect(getURLParameter('name', url)).toBe('John');
    expect(getURLParameter('age', url)).toBe('30');
  });

  test('should return null if the parameter is not found', () => {
    const url = 'http://example.com?name=John&age=30';
    expect(getURLParameter('city', url)).toBeNull();
  });

  test('should handle URLs with no query string', () => {
    const url = 'http://example.com';
    expect(getURLParameter('name', url)).toBeNull();
  });

  test('should handle parameters with no value', () => {
    const url = 'http://example.com?name=&age=30';
    expect(getURLParameter('name', url)).toBe('');
  });

  test('should handle special characters in parameter values', () => {
    const url = 'http://example.com?query=%20hello%20';
    expect(getURLParameter('query', url)).toBe(' hello ');
  });
});
