import { parseUrl, stringifyUrl } from './url-utils.js';

describe('parseUrl', () => {
  test('should parse a URL string into an object', () => {
    const url = 'https://www.example.com:8080/path/to/page?foo=bar&baz=qux#hash';
    const expected = {
      protocol: 'https:',
      hostname: 'www.example.com',
      port: '8080',
      pathname: '/path/to/page',
      search: '?foo=bar&baz=qux',
      hash: '#hash',
      params: {
        foo: 'bar',
        baz: 'qux',
      },
    };
    expect(parseUrl(url)).toEqual(expected);
  });

  test('should return null for an invalid URL', () => {
    expect(parseUrl('invalid-url')).toBeNull();
  });
});

describe('stringifyUrl', () => {
  test('should stringify a URL object into a URL string', () => {
    const urlObject = {
      protocol: 'https:',
      hostname: 'www.example.com',
      port: '8080',
      pathname: '/path/to/page',
      params: {
        foo: 'bar',
        baz: 'qux',
      },
      hash: '#hash',
    };
    const expected = 'https://www.example.com:8080/path/to/page?foo=bar&baz=qux#hash';
    expect(stringifyUrl(urlObject)).toBe(expected);
  });
});