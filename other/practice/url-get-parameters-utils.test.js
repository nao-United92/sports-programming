const { getURLParameters } = require('./url-get-parameters-utils');

describe('getURLParameters', () => {
  test('should extract parameters from a URL', () => {
    const url = 'https://example.com?name=John&age=30';
    expect(getURLParameters(url)).toEqual({ name: 'John', age: '30' });
  });

  test('should handle URLs with no parameters', () => {
    const url = 'https://example.com';
    expect(getURLParameters(url)).toEqual({});
  });

  test('should handle URLs with special characters', () => {
    const url = 'https://example.com?q=hello%20world';
    expect(getURLParameters(url)).toEqual({ q: 'hello world' });
  });

  test('should handle multiple parameters with the same name (takes the last one)', () => {
    const url = 'https://example.com?a=1&b=2&a=3';
    expect(getURLParameters(url)).toEqual({ a: '3', b: '2' });
  });

  test('should handle URLs with a hash', () => {
    const url = 'https://example.com?name=Alice#section1';
    expect(getURLParameters(url)).toEqual({ name: 'Alice' });
  });
});
