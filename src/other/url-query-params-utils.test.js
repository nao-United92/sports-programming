import { parseQueryParams } from './url-query-params-utils.js';

describe('parseQueryParams', () => {
  // Mock window.location.search for testing
  const originalLocation = window.location;

  beforeAll(() => {
    Object.defineProperty(window, 'location', {
      writable: true,
      value: { ...originalLocation, search: '' },
    });
  });

  afterAll(() => {
    Object.defineProperty(window, 'location', {
      value: originalLocation,
    });
  });

  it('should parse basic query parameters from a string', () => {
    const url = '?name=John Doe&age=30';
    expect(parseQueryParams(url)).toEqual({ name: 'John Doe', age: '30' });
  });

  it('should parse query parameters with multiple values for the same key', () => {
    const url = '?item=apple&item=banana&color=red';
    expect(parseQueryParams(url)).toEqual({ item: ['apple', 'banana'], color: 'red' });
  });

  it('should handle encoded characters', () => {
    const url = '?query=hello%20world%21&param=%C3%A9';
    expect(parseQueryParams(url)).toEqual({ query: 'hello world!', param: 'é' });
  });

  it('should handle query parameters without values', () => {
    const url = '?param1&param2=value';
    expect(parseQueryParams(url)).toEqual({ param1: '', param2: 'value' });
  });

  it('should return an empty object if no query parameters are present', () => {
    const url = 'https://example.com/path';
    expect(parseQueryParams(url)).toEqual({});
  });

  it('should use window.location.search if no URL is provided', () => {
    window.location.search = '?defaultParam=test';
    expect(parseQueryParams()).toEqual({ defaultParam: 'test' });
  });

  it('should handle URL without leading question mark', () => {
    const url = 'name=Alice&id=123';
    expect(parseQueryParams(url)).toEqual({ name: 'Alice', id: '123' });
  });

  it('should handle complex URL with hash and multiple params', () => {
    const url = 'https://example.com/path?a=1&b=2#hash';
    expect(parseQueryParams(url)).toEqual({ a: '1', b: '2' });
  });
});
