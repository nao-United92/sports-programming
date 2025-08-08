import { objectToQueryString } from './object-to-query-string-utils.js';

describe('objectToQueryString', () => {
  test('should convert a simple object to a query string', () => {
    const obj = { name: 'John', age: 30 };
    expect(objectToQueryString(obj)).toBe('name=John&age=30');
  });

  test('should handle special characters', () => {
    const obj = { q: 'hello world', lang: 'en-US' };
    expect(objectToQueryString(obj)).toBe('q=hello%20world&lang=en-US');
  });

  test('should handle array values', () => {
    const obj = { ids: [1, 2, 3] };
    expect(objectToQueryString(obj)).toBe('ids=1&ids=2&ids=3');
  });

  test('should handle null and undefined values', () => {
    const obj = { name: 'John', city: null, country: undefined };
    expect(objectToQueryString(obj)).toBe('name=John&city');
  });

  test('should return an empty string for null or non-object input', () => {
    expect(objectToQueryString(null)).toBe('');
    expect(objectToQueryString(undefined)).toBe('');
    expect(objectToQueryString('string')).toBe('');
    expect(objectToQueryString(123)).toBe('');
  });

  test('should handle an empty object', () => {
    expect(objectToQueryString({})).toBe('');
  });
});
