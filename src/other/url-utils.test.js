import { parseUrl, stringifyUrl } from './url-utils';

describe('URL Utilities', () => {
  describe('parseUrl', () => {
    it('should parse a URL string into an object', () => {
      const url = 'https://example.com:8080/path?query=1#hash';
      const parsed = parseUrl(url);
      expect(parsed).toEqual({
        hash: '#hash',
        host: 'example.com:8080',
        hostname: 'example.com',
        pathname: '/path',
        port: '8080',
        protocol: 'https:',
        search: '?query=1',
      });
    });
  });

  describe('stringifyUrl', () => {
    it('should stringify a URL object into a string', () => {
      const urlObj = {
        hash: '#hash',
        host: 'example.com:8080',
        hostname: 'example.com',
        pathname: '/path',
        port: '8080',
        protocol: 'https:',
        search: '?query=1',
      };
      const url = stringifyUrl(urlObj);
      expect(url).toBe('https://example.com:8080/path?query=1#hash');
    });
  });
});
