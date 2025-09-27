import { parseQuery } from './url-utils';

describe('parseQuery', () => {
  test('should parse a full URL', () => {
    const url = 'https://example.com?foo=bar&baz=qux';
    expect(parseQuery(url)).toEqual({ foo: 'bar', baz: 'qux' });
  });

  test('should parse just a query string', () => {
    const queryString = 'foo=bar&baz=qux';
    expect(parseQuery(queryString)).toEqual({ foo: 'bar', baz: 'qux' });
  });

  test('should handle URI encoded components', () => {
    const url = 'https://example.com?name=%E3%83%86%E3%82%B9%E3%83%88&value=a%26b';
    expect(parseQuery(url)).toEqual({ name: 'テスト', value: 'a&b' });
  });

  test('should handle params without values', () => {
    const url = 'https://example.com?foo&bar=baz';
    expect(parseQuery(url)).toEqual({ foo: true, bar: 'baz' });
  });

  test('should handle empty query string', () => {
    const url = 'https://example.com';
    expect(parseQuery(url)).toEqual({});
  });
});