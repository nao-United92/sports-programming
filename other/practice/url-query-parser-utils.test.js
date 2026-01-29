import parseQueryString from './url-query-parser-utils';

describe('parseQueryString', () => {
  it('should parse a simple query string', () => {
    expect(parseQueryString('name=John&age=30')).toEqual({ name: 'John', age: '30' });
  });

  it('should handle query string with leading question mark', () => {
    expect(parseQueryString('?name=John&age=30')).toEqual({ name: 'John', age: '30' });
  });

  it('should decode URI components', () => {
    expect(parseQueryString('city=New%20York&zip=10001')).toEqual({ city: 'New York', zip: '10001' });
  });

  it('should handle multiple values for the same key', () => {
    expect(parseQueryString('item=apple&item=banana')).toEqual({ item: ['apple', 'banana'] });
  });

  it('should handle keys without values', () => {
    expect(parseQueryString('name=John&hasLicense')).toEqual({ name: 'John', hasLicense: '' });
  });

  it('should handle empty query string', () => {
    expect(parseQueryString('')).toEqual({});
  });

  it('should return an empty object for non-string inputs', () => {
    expect(parseQueryString(null)).toEqual({});
    expect(parseQueryString(undefined)).toEqual({});
    expect(parseQueryString(123)).toEqual({});
  });

  it('should handle plus signs as spaces', () => {
    expect(parseQueryString('q=hello+world')).toEqual({ q: 'hello world' });
  });

  it('should handle complex query string', () => {
    const qs = 'param1=value1&param2=value2%20with%20space&param3=&param4=val4&param1=anotherValue';
    expect(parseQueryString(qs)).toEqual({
      param1: ['value1', 'anotherValue'],
      param2: 'value2 with space',
      param3: '',
      param4: 'val4',
    });
  });

  it('should handle only a question mark', () => {
    expect(parseQueryString('?')).toEqual({});
  });
});
