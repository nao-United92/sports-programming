import { getURLParams } from './get-url-params';

describe('getURLParams', () => {
  it('should return an object of query parameters from a URL', () => {
    const url = 'https://example.com?name=John&age=30';
    const params = getURLParams(url);
    expect(params).toEqual({ name: 'John', age: '30' });
  });

  it('should handle URLs with no query parameters', () => {
    const url = 'https://example.com';
    const params = getURLParams(url);
    expect(params).toEqual({});
  });

  it('should handle URLs with special characters in parameters', () => {
    const url = 'https://example.com?query=hello%20world&lang=en-us';
    const params = getURLParams(url);
    expect(params).toEqual({ query: 'hello world', lang: 'en-us' });
  });

  it('should handle parameters with no value', () => {
    const url = 'https://example.com?name=&age=30';
    const params = getURLParams(url);
    expect(params).toEqual({ name: '', age: '30' });
  });

  it('should handle parameters that appear multiple times (last one wins)', () => {
    const url = 'https://example.com?name=John&name=Jane';
    const params = getURLParams(url);
    expect(params).toEqual({ name: 'Jane' });
  });
});
