const { parseQueryParams } = require('./url-query-params-utils');

describe('parseQueryParams', () => {
  it('should parse a simple query string', () => {
    const queryString = '?param1=value1';
    expect(parseQueryParams(queryString)).toEqual({ param1: 'value1' });
  });

  it('should parse a query string with multiple parameters', () => {
    const queryString = '?param1=value1&param2=value2';
    expect(parseQueryParams(queryString)).toEqual({ param1: 'value1', param2: 'value2' });
  });

  it('should parse a query string with encoded characters', () => {
    const queryString = '?param1=value%20with%20spaces&param2=value%26with%3Dsymbols';
    expect(parseQueryParams(queryString)).toEqual({
      param1: 'value with spaces',
      param2: 'value&with=symbols',
    });
  });

  it('should handle parameters with no values', () => {
    const queryString = '?param1=&param2';
    expect(parseQueryParams(queryString)).toEqual({ param1: '', param2: '', });
  });

  it('should handle duplicate parameter names by returning an array', () => {
    const queryString = '?param1=value1&param1=value2';
    expect(parseQueryParams(queryString)).toEqual({ param1: ['value1', 'value2'] });
  });

  it('should handle an empty query string', () => {
    const queryString = '';
    expect(parseQueryParams(queryString)).toEqual({});
  });

  it('should handle a query string without a leading question mark', () => {
    const queryString = 'param1=value1&param2=value2';
    expect(parseQueryParams(queryString)).toEqual({ param1: 'value1', param2: 'value2' });
  });

  it('should handle complex query strings with mixed cases', () => {
    const queryString = '?name=John%20Doe&age=30&tags=js&tags=web&active';
    expect(parseQueryParams(queryString)).toEqual({
      name: 'John Doe',
      age: '30',
      tags: ['js', 'web'],
      active: '',
    });
  });

  it('should return an empty object if no query string is present', () => {
    // Mock window.location.search for testing purposes if needed, but for direct string input, it's simple
    expect(parseQueryParams('http://example.com')).toEqual({});
  });
});