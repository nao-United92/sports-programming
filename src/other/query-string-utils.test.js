const { parse, stringify } = require('./query-string-utils');

describe('query-string-utils', () => {
  describe('parse', () => {
    test('should parse a simple query string', () => {
      expect(parse('foo=bar&baz=qux')).toEqual({ foo: 'bar', baz: 'qux' });
    });

    test('should handle a query string with a leading question mark', () => {
      expect(parse('?foo=bar&baz=qux')).toEqual({ foo: 'bar', baz: 'qux' });
    });

    test('should handle empty values', () => {
      expect(parse('foo=&bar=baz')).toEqual({ foo: '', bar: 'baz' });
    });

    test('should handle special characters', () => {
      const queryString = 'name=%E4%B8%80%E9%83%8E&email=test%40example.com';
      expect(parse(queryString)).toEqual({ name: '一郎', email: 'test@example.com' });
    });

    test('should return an empty object for empty or invalid input', () => {
      expect(parse('')).toEqual({});
      expect(parse(null)).toEqual({});
      expect(parse(undefined)).toEqual({});
      expect(parse(123)).toEqual({});
    });
  });

  describe('stringify', () => {
    test('should stringify a simple object', () => {
      const obj = { foo: 'bar', baz: 'qux' };
      expect(stringify(obj)).toBe('foo=bar&baz=qux');
    });

    test('should handle empty values', () => {
      const obj = { foo: '', bar: 'baz' };
      expect(stringify(obj)).toBe('foo=&bar=baz');
    });

    test('should handle special characters', () => {
      const obj = { name: '一郎', email: 'test@example.com' };
      expect(stringify(obj)).toBe('name=%E4%B8%80%E9%83%8E&email=test%40example.com');
    });

    test('should handle numeric values', () => {
      const obj = { a: 1, b: 2 };
      expect(stringify(obj)).toBe('a=1&b=2');
    });

    test('should return an empty string for empty or invalid input', () => {
      expect(stringify({})).toBe('');
      expect(stringify(null)).toBe('');
      expect(stringify(undefined)).toBe('');
      expect(stringify('string')).toBe('');
    });
  });
});