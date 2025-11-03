import { updateQueryParam, removeQueryParam } from './url-param-utils.js';

describe('URL Parameter Utilities', () => {
  const baseUrl = 'https://example.com/path?a=1&b=2';

  describe('updateQueryParam', () => {
    it('should update an existing query parameter', () => {
      const updatedUrl = updateQueryParam(baseUrl, 'a', 'new_value');
      expect(updatedUrl).toBe('https://example.com/path?a=new_value&b=2');
    });

    it('should add a new query parameter', () => {
      const updatedUrl = updateQueryParam(baseUrl, 'c', '3');
      expect(updatedUrl).toBe('https://example.com/path?a=1&b=2&c=3');
    });

    it('should handle URLs without existing query parameters', () => {
      const url = 'https://example.com/path';
      const updatedUrl = updateQueryParam(url, 'param', 'value');
      expect(updatedUrl).toBe('https://example.com/path?param=value');
    });

    it('should handle special characters in values', () => {
      const updatedUrl = updateQueryParam(baseUrl, 'q', 'hello world!');
      expect(updatedUrl).toBe('https://example.com/path?a=1&b=2&q=hello+world%21');
    });
  });

  describe('removeQueryParam', () => {
    it('should remove an existing query parameter', () => {
      const updatedUrl = removeQueryParam(baseUrl, 'a');
      expect(updatedUrl).toBe('https://example.com/path?b=2');
    });

    it('should do nothing if the parameter does not exist', () => {
      const updatedUrl = removeQueryParam(baseUrl, 'c');
      expect(updatedUrl).toBe(baseUrl);
    });

    it('should handle URLs without existing query parameters', () => {
      const url = 'https://example.com/path';
      const updatedUrl = removeQueryParam(url, 'param');
      expect(updatedUrl).toBe('https://example.com/path');
    });
  });
});
