const { parseQueryString } = require('./url-query-parser-utils');

describe('parseQueryString', () => {
  test('should parse a simple query string', () => {
    expect(parseQueryString('?name=John&age=30')).toEqual({ name: 'John', age: '30' });
  });

  test('should handle a query string without a leading question mark', () => {
    expect(parseQueryString('name=Jane&city=NewYork')).toEqual({ name: 'Jane', city: 'NewYork' });
  });

  test('should handle an empty query string', () => {
    expect(parseQueryString('')).toEqual({});
    expect(parseQueryString('?')).toEqual({});
  });

  test('should handle keys without values', () => {
    expect(parseQueryString('?a=&b=2&c')).toEqual({ a: '', b: '2', c: '' });
  });

  test('should decode URI components', () => {
    const queryString = 'q=%E3%83%86%E3%82%B9%E3%83%88&lang=ja%20jp';
    expect(parseQueryString(queryString)).toEqual({ q: 'テスト', lang: 'ja jp' });
  });

  test('should return an empty object for non-string input', () => {
    expect(parseQueryString(null)).toEqual({});
    expect(parseQueryString(undefined)).toEqual({});
    expect(parseQueryString(123)).toEqual({});
  });

  test('should handle a single parameter', () => {
    expect(parseQueryString('id=12345')).toEqual({ id: '12345' });
  });
});
