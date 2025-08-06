import { getQueryParams, addQueryParams } from './url-utils.js';

describe('urlUtils', () => {
  describe('getQueryParams', () => {
    it('should extract query parameters from a URL string', () => {
      const url = 'http://example.com?name=test&age=30';
      expect(getQueryParams(url)).toEqual({ name: 'test', age: '30' });
    });

    it('should return an empty object if no query parameters are present', () => {
      const url = 'http://example.com';
      expect(getQueryParams(url)).toEqual({});
    });

    it('should handle URL with hash', () => {
      const url = 'http://example.com?name=test#hash';
      expect(getQueryParams(url)).toEqual({ name: 'test' });
    });

    it('should decode URI components', () => {
      const url = 'http://example.com?param=value%20with%20spaces';
      expect(getQueryParams(url)).toEqual({ param: 'value with spaces' });
    });

    it('should handle parameters with no value', () => {
      const url = 'http://example.com?param1&param2=value2';
      expect(getQueryParams(url)).toEqual({ param1: undefined, param2: 'value2' });
    });

    
  });

  describe('addQueryParams', () => {
    it('should add new query parameters to a URL', () => {
      const url = 'http://example.com';
      const params = { name: 'test', age: 30 };
      expect(addQueryParams(url, params)).toBe('http://example.com?name=test&age=30');
    });

    it('should update existing query parameters in a URL', () => {
      const url = 'http://example.com?name=old&city=xyz';
      const params = { name: 'new', age: 30 };
      expect(addQueryParams(url, params)).toBe('http://example.com?name=new&city=xyz&age=30');
    });

    it('should handle empty params object', () => {
      const url = 'http://example.com?name=test';
      expect(addQueryParams(url, {})).toBe('http://example.com?name=test');
    });

    it('should encode URI components', () => {
      const url = 'http://example.com';
      const params = { 'param with spaces': 'value & special' };
      expect(addQueryParams(url, params)).toBe('http://example.com?param%20with%20spaces=value%20%26%20special');
    });

    it('should handle URL with existing hash', () => {
      const url = 'http://example.com#hash';
      const params = { name: 'test' };
      expect(addQueryParams(url, params)).toBe('http://example.com?name=test#hash');
    });

    it('should return base URL if no params and no existing query string', () => {
      const url = 'http://example.com';
      expect(addQueryParams(url, {})).toBe('http://example.com');
    });
  });
});