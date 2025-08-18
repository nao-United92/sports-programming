import { parseQuery, stringifyQuery } from './url-query-utils';

describe('URL Query Utilities', () => {
  describe('parseQuery', () => {
    it('should parse a simple query string', () => {
      expect(parseQuery('?foo=bar&baz=qux')).toEqual({ foo: 'bar', baz: 'qux' });
    });

    it('should handle a query string without a leading question mark', () => {
      expect(parseQuery('foo=bar&baz=qux')).toEqual({ foo: 'bar', baz: 'qux' });
    });

    it('should handle empty query strings', () => {
      expect(parseQuery('')).toEqual({});
      expect(parseQuery('?')).toEqual({});
    });

    it('should handle special characters', () => {
      const queryString = 'name=John%20Doe&email=john.doe%40example.com';
      expect(parseQuery(queryString)).toEqual({ name: 'John Doe', email: 'john.doe@example.com' });
    });
  });

  describe('stringifyQuery', () => {
    it('should stringify a simple object', () => {
      expect(stringifyQuery({ foo: 'bar', baz: 'qux' })).toBe('foo=bar&baz=qux');
    });

    it('should handle an empty object', () => {
      expect(stringifyQuery({})).toBe('');
    });

    it('should handle special characters', () => {
      const params = { name: 'John Doe', email: 'john.doe@example.com' };
      expect(stringifyQuery(params)).toBe('name=John+Doe&email=john.doe%40example.com');
    });

    it('should handle numbers and other primitives', () => {
        expect(stringifyQuery({ a: 1, b: true, c: null })).toBe('a=1&b=true&c=null');
    });
  });
});
