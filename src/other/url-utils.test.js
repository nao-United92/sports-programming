import { getQueryParams, addQueryParams } from './url-utils.js';

describe('getQueryParams', () => {
  it('should return an empty object for a URL without query parameters', () => {
    expect(getQueryParams('http://example.com')).toEqual({});
    expect(getQueryParams('http://example.com?')).toEqual({});
  });

  it('should parse single query parameter', () => {
    expect(getQueryParams('http://example.com?param1=value1')).toEqual({ param1: 'value1' });
  });

  it('should parse multiple query parameters', () => {
    expect(getQueryParams('http://example.com?param1=value1&param2=value2')).toEqual({ param1: 'value1', param2: 'value2' });
  });

  it('should handle URL with hash', () => {
    expect(getQueryParams('http://example.com?param1=value1#hash')).toEqual({ param1: 'value1' });
  });

  it('should decode URL encoded characters', () => {
    expect(getQueryParams('http://example.com?param1=value%20with%20space')).toEqual({ param1: 'value with space' });
  });

  it('should handle duplicate query parameters (last one wins)', () => {
    expect(getQueryParams('http://example.com?param1=value1&param1=value2')).toEqual({ param1: 'value2' });
  });

  it('should return an empty object for invalid URL input', () => {
    expect(getQueryParams('invalid url')).toEqual({});
    expect(getQueryParams(null)).toEqual({});
    expect(getQueryParams(undefined)).toEqual({});
  });
});

describe('addQueryParams', () => {
  it('should add query parameters to a URL without existing ones', () => {
    expect(addQueryParams('http://example.com', { param1: 'value1' })).toBe('http://example.com/?param1=value1');
  });

  it('should add query parameters to a URL with existing ones', () => {
    expect(addQueryParams('http://example.com?existing=true', { param1: 'value1' })).toBe('http://example.com/?existing=true&param1=value1');
  });

  it('should update existing query parameters', () => {
    expect(addQueryParams('http://example.com?param1=oldValue', { param1: 'newValue' })).toBe('http://example.com/?param1=newValue');
  });

  it('should handle multiple new and existing parameters', () => {
    expect(addQueryParams('http://example.com?a=1&b=2', { c: '3', a: 'newA' })).toBe('http://example.com/?a=newA&b=2&c=3');
  });

  it('should handle URL with hash', () => {
    expect(addQueryParams('http://example.com#hash', { param1: 'value1' })).toBe('http://example.com/?param1=value1#hash');
  });

  it('should encode query parameter values', () => {
    expect(addQueryParams('http://example.com', { param1: 'value with space' })).toBe('http://example.com/?param1=value+with+space');
  });

  it('should return the base URL if no parameters are added and none existed', () => {
    expect(addQueryParams('http://example.com', {})).toBe('http://example.com/');
  });

  it('should return the original URL for invalid URL input', () => {
    expect(addQueryParams('invalid url', { param1: 'value1' })).toBe('invalid url');
    expect(addQueryParams(null, { param1: 'value1' })).toBe(null);
  });
});