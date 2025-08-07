import { parseQueryParams } from './url-utils.js';

describe('parseQueryParams', () => {
  it('should parse query parameters from a given URL string', () => {
    const url = 'http://example.com?name=test&age=30';
    const params = parseQueryParams(url);
    expect(params).toEqual({ name: 'test', age: '30' });
  });

  it('should handle URL with no query parameters', () => {
    const url = 'http://example.com';
    const params = parseQueryParams(url);
    expect(params).toEqual({});
  });

  it('should handle URL with empty query parameters', () => {
    const url = 'http://example.com?';
    const params = parseQueryParams(url);
    expect(params).toEqual({});
  });

  it('should decode URI components', () => {
    const url = 'http://example.com?param=value%20with%20spaces&another=special%26char';
    const params = parseQueryParams(url);
    expect(params).toEqual({ param: 'value with spaces', another: 'special&char' });
  });

  it('should handle parameters without values', () => {
    const url = 'http://example.com?param1&param2=value';
    const params = parseQueryParams(url);
    expect(params).toEqual({ param1: '', param2: 'value' });
  });

  it('should handle duplicate parameter names (last one wins)', () => {
    const url = 'http://example.com?param=value1&param=value2';
    const params = parseQueryParams(url);
    expect(params).toEqual({ param: 'value2' });
  });

  
});
