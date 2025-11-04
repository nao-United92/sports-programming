
import { buildQueryString } from './query-string-build-utils.js';

describe('buildQueryString', () => {
  test('should build a simple query string', () => {
    const params = { foo: 'bar', baz: 'qux' };
    expect(buildQueryString(params)).toBe('foo=bar&baz=qux');
  });

  test('should handle URL-encodable characters', () => {
    const params = { 'first name': 'John Doe', 'city/state': 'New York' };
    expect(buildQueryString(params)).toBe('first%20name=John%20Doe&city%2Fstate=New%20York');
  });

  test('should handle array values', () => {
    const params = { a: ['1', '2', '3'] };
    expect(buildQueryString(params)).toBe('a[]=1&a[]=2&a[]=3');
  });

  test('should handle null values (key only)', () => {
    const params = { a: 1, b: null, c: 3 };
    expect(buildQueryString(params)).toBe('a=1&b&c=3');
  });

  test('should ignore undefined values', () => {
    const params = { a: 1, b: undefined, c: 3 };
    expect(buildQueryString(params)).toBe('a=1&c=3');
  });

  test('should return an empty string for null or empty input', () => {
    expect(buildQueryString(null)).toBe('');
    expect(buildQueryString({})).toBe('');
  });
});
