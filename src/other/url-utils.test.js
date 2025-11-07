import { parseUrl } from './url-utils.js';

describe('parseUrl', () => {
  it('should parse a full URL into its components', () => {
    const url = 'https://www.example.com:8080/path/to/page?query=string&another=param#section';
    const parsed = parseUrl(url);
    expect(parsed).toEqual({
      href: 'https://www.example.com:8080/path/to/page?query=string&another=param#section',
      protocol: 'https:',
      hostname: 'www.example.com',
      port: '8080',
      pathname: '/path/to/page',
      search: '?query=string&another=param',
      hash: '#section',
      params: {
        query: 'string',
        another: 'param',
      },
    });
  });

  it('should handle URLs without a port', () => {
    const url = 'http://example.com/page';
    const parsed = parseUrl(url);
    expect(parsed.port).toBe('');
  });

  it('should handle URLs without a path', () => {
    const url = 'https://example.com';
    const parsed = parseUrl(url);
    expect(parsed.pathname).toBe('/');
  });

  it('should handle URLs with no query string', () => {
    const url = 'https://example.com/page';
    const parsed = parseUrl(url);
    expect(parsed.search).toBe('');
    expect(parsed.params).toEqual({});
  });

  it('should handle URLs with no hash', () => {
    const url = 'https://example.com/page?query=string';
    const parsed = parseUrl(url);
    expect(parsed.hash).toBe('');
  });

  it('should return null for an invalid URL', () => {
    const url = 'not a valid url';
    const parsed = parseUrl(url);
    expect(parsed).toBeNull();
  });
});