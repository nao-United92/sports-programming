const { parseUrl, stringifyUrl } = require('./url-parser');

describe('URL Parser', () => {
  const url = 'https://www.example.com:8080/path/to/page?query=123&sort=asc#section-one';

  describe('parseUrl', () => {
    test('should parse a full URL into its components', () => {
      const parsed = parseUrl(url);
      expect(parsed).toEqual({
        protocol: 'https:',
        hostname: 'www.example.com',
        port: '8080',
        pathname: '/path/to/page',
        search: '?query=123&sort=asc',
        hash: '#section-one',
        params: {
          query: '123',
          sort: 'asc'
        }
      });
    });

    test('should return null for an invalid URL', () => {
      expect(parseUrl('not a url')).toBeNull();
    });
  });

  describe('stringifyUrl', () => {
    test('should construct a URL from an object', () => {
      const obj = {
        protocol: 'https',
        hostname: 'www.example.com',
        port: '8080',
        pathname: '/path/to/page',
        params: { query: '123', sort: 'asc' },
        hash: '#section-one'
      };
      expect(stringifyUrl(obj)).toBe(url);
    });

    test('should handle objects with missing optional properties', () => {
        const obj = {
            protocol: 'http:',
            hostname: 'example.com',
        };
        expect(stringifyUrl(obj)).toBe('http://example.com');
    });

    test('should return null for invalid input object', () => {
      expect(stringifyUrl({ protocol: 'https' })).toBeNull();
      expect(stringifyUrl(null)).toBeNull();
    });
  });
});
