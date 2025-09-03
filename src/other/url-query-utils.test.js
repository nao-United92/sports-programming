const assert = require('assert');
const { parseQuery, stringifyQuery } = require('./url-query-utils.js');

describe('URL Query Utilities', () => {
  describe('parseQuery', () => {
    it('should parse a simple query string', () => {
      assert.deepStrictEqual(parseQuery('foo=bar&baz=qux'), { foo: 'bar', baz: 'qux' });
    });

    it('should handle multiple values for the same key', () => {
      assert.deepStrictEqual(parseQuery('a=1&a=2&b=3'), { a: ['1', '2'], b: '3' });
    });

    it('should handle an empty query string', () => {
      assert.deepStrictEqual(parseQuery(''), {});
    });

    it('should handle a query string with no values', () => {
      assert.deepStrictEqual(parseQuery('a&b'), { a: '', b: '' });
    });
  });

  describe('stringifyQuery', () => {
    it('should stringify a simple object', () => {
      assert.strictEqual(stringifyQuery({ foo: 'bar', baz: 'qux' }), 'foo=bar&baz=qux');
    });

    it('should handle an array of values', () => {
      assert.strictEqual(stringifyQuery({ a: ['1', '2'], b: '3' }), 'a=1&a=2&b=3');
    });

    it('should handle an empty object', () => {
      assert.strictEqual(stringifyQuery({}), '');
    });

    it('should handle values that need encoding', () => {
      assert.strictEqual(stringifyQuery({ q: 'hello world' }), 'q=hello+world');
    });
  });
});