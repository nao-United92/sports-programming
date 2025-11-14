import { updateQueryParams } from './url-query-manipulation-utils.js';

describe('updateQueryParams', () => {
  const baseUrl = 'http://example.com/path';
  const urlWithParams = 'http://example.com/path?a=1&b=2';

  it('should add new query parameters to a URL without existing params', () => {
    const updatedUrl = updateQueryParams(baseUrl, { c: '3', d: '4' });
    expect(updatedUrl).toBe('http://example.com/path?c=3&d=4');
  });

  it('should add new query parameters to a URL with existing params', () => {
    const updatedUrl = updateQueryParams(urlWithParams, { c: '3' });
    expect(updatedUrl).toBe('http://example.com/path?a=1&b=2&c=3');
  });

  it('should update existing query parameters', () => {
    const updatedUrl = updateQueryParams(urlWithParams, { b: 'new_value' });
    expect(updatedUrl).toBe('http://example.com/path?a=1&b=new_value');
  });

  it('should remove parameters explicitly listed in paramsToRemove', () => {
    const updatedUrl = updateQueryParams(urlWithParams, {}, ['a']);
    expect(updatedUrl).toBe('http://example.com/path?b=2');
  });

  it('should remove parameters by setting their value to null or undefined in paramsToUpdate', () => {
    const updatedUrl = updateQueryParams(urlWithParams, { a: null, b: undefined });
    expect(updatedUrl).toBe('http://example.com/path');
  });

  it('should handle a mix of adding, updating, and removing parameters', () => {
    const updatedUrl = updateQueryParams(urlWithParams, { a: 'new_a', c: '3', d: null }, ['b']);
    // Original: a=1&b=2
    // Remove 'b': a=1
    // Update 'a' to 'new_a': a=new_a
    // Add 'c=3': a=new_a&c=3
    // Remove 'd' (null value): no effect as 'd' not present
    expect(updatedUrl).toBe('http://example.com/path?a=new_a&c=3');
  });

  it('should return the original URL if no parameters are updated or removed', () => {
    const updatedUrl = updateQueryParams(urlWithParams, {}, []);
    expect(updatedUrl).toBe(urlWithParams);
  });

  it('should handle empty paramsToUpdate and paramsToRemove arrays', () => {
    const updatedUrl = updateQueryParams(urlWithParams);
    expect(updatedUrl).toBe(urlWithParams);
  });

  it('should handle URL with no search params and no updates/removals', () => {
    const updatedUrl = updateQueryParams(baseUrl);
    expect(updatedUrl).toBe(baseUrl);
  });

  it('should handle complex parameter values (URLSearchParams stringifies them)', () => {
    const updatedUrl = updateQueryParams(baseUrl, { arr: [1, 2], obj: { key: 'value' } });
    // URLSearchParams will stringify array and object.
    // For arrays, it typically adds multiple entries for the same key, e.g., ?arr=1&arr=2
    // However, the current implementation of URLSearchParams.set will overwrite.
    // So, it will be ?arr=1,2&obj=[object%20Object]
    expect(updatedUrl).toBe('http://example.com/path?arr=1%2C2&obj=%5Bobject+Object%5D');
  });

  it('should correctly encode parameter names and values', () => {
    const updatedUrl = updateQueryParams(baseUrl, { 'param with spaces': 'value with spaces & symbols' });
    expect(updatedUrl).toBe('http://example.com/path?param+with+spaces=value+with+spaces+%26+symbols');
  });

  it('should handle multiple values for the same parameter name (URLSearchParams behavior)', () => {
    const url = 'http://example.com/path?param=value1';
    const updatedUrl = updateQueryParams(url, { param: 'value2' });
    // URLSearchParams.set replaces all existing values for a given name
    expect(updatedUrl).toBe('http://example.com/path?param=value2');
  });
});
