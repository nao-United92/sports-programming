const { buildQueryParams } = require('./url-build-query-params-utils');

describe('buildQueryParams', () => {
  it('should build a simple query string', () => {
    const params = { param1: 'value1' };
    expect(buildQueryParams(params)).toBe('?param1=value1');
  });

  it('should build a query string with multiple parameters', () => {
    const params = { param1: 'value1', param2: 'value2' };
    expect(buildQueryParams(params)).toBe('?param1=value1&param2=value2');
  });

  it('should handle encoded characters', () => {
    const params = { param1: 'value with spaces', param2: 'value&with=symbols' };
    expect(buildQueryParams(params)).toBe('?param1=value%20with%20spaces&param2=value%26with%3Dsymbols');
  });

  it('should handle array values', () => {
    const params = { param1: ['value1', 'value2'] };
    expect(buildQueryParams(params)).toBe('?param1=value1&param1=value2');
  });

  it('should handle null and undefined values by omitting them', () => {
    const params = { param1: 'value1', param2: null, param3: undefined, param4: 'value4' };
    expect(buildQueryParams(params)).toBe('?param1=value1&param4=value4');
  });

  it('should handle an empty object', () => {
    const params = {};
    expect(buildQueryParams(params)).toBe('');
  });

  it('should handle complex objects by JSON stringifying them', () => {
    const params = { param1: 'value1', param2: { nested: 'object' } };
    expect(buildQueryParams(params)).toBe('?param1=value1&param2=%7B%22nested%22%3A%22object%22%7D');
  });

  it('should return an empty string for non-object inputs', () => {
    expect(buildQueryParams(null)).toBe('');
    expect(buildQueryParams(undefined)).toBe('');
    expect(buildQueryParams('string')).toBe('');
    expect(buildQueryParams(123)).toBe('');
  });

  it('should handle mixed types in arrays', () => {
    const params = { list: [1, 'two', null, undefined, { a: 1 }] };
    // null and undefined in array should be encoded as empty strings
    expect(buildQueryParams(params)).toBe('?list=1&list=two&list=&list=&list=%7B%22a%22%3A1%7D');
  });
});
