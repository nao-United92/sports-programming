import { parse, stringify, updateQueryString, removeQueryString } from './query-string-utils.js';

describe('queryString', () => {
  test('parse', () => {
    expect(parse('foo=bar')).toEqual({ foo: 'bar' });
    expect(parse('?foo=bar')).toEqual({ foo: 'bar' });
    expect(parse('#foo=bar')).toEqual({ foo: 'bar' });
    expect(parse('&foo=bar')).toEqual({ foo: 'bar' });
    expect(parse('foo=bar&baz=qux')).toEqual({ foo: 'bar', baz: 'qux' });
    expect(parse('foo=bar&foo=baz')).toEqual({ foo: 'baz' });
    expect(parse('foo')).toEqual({ foo: null });
    expect(parse('foo=bar&baz')).toEqual({ foo: 'bar', baz: null });
    expect(parse('a=b=c')).toEqual({ a: 'b=c' });
    expect(parse('a=b&c=d=e')).toEqual({ a: 'b', c: 'd=e' });
    expect(parse('a=b&c=d&e')).toEqual({ a: 'b', c: 'd', e: null });
    expect(parse('a=b&c=d&e=f')).toEqual({ a: 'b', c: 'd', e: 'f' });
    expect(parse('a=b&c=d&e=f&g')).toEqual({ a: 'b', c: 'd', e: 'f', g: null });
    expect(parse('a=b&c=d&e=f&g=h')).toEqual({ a: 'b', c: 'd', e: 'f', g: 'h' });
    expect(parse('a=b&c=d&e=f&g=h&i')).toEqual({ a: 'b', c: 'd', e: 'f', g: 'h', i: null });
    expect(parse('a=b&c=d&e=f&g=h&i=j')).toEqual({ a: 'b', c: 'd', e: 'f', g: 'h', i: 'j' });
    expect(parse('a=b&c=d&e=f&g=h&i=j&k')).toEqual({ a: 'b', c: 'd', e: 'f', g: 'h', i: 'j', k: null });
    expect(parse('a=b&c=d&e=f&g=h&i=j&k=l')).toEqual({ a: 'b', c: 'd', e: 'f', g: 'h', i: 'j', k: 'l' });
    expect(parse('a=b&c=d&e=f&g=h&i=j&k=l&m')).toEqual({ a: 'b', c: 'd', e: 'f', g: 'h', i: 'j', k: 'l', m: null });
    expect(parse('a=b&c=d&e=f&g=h&i=j&k=l&m=n')).toEqual({ a: 'b', c: 'd', e: 'f', g: 'h', i: 'j', k: 'l', m: 'n' });
    expect(parse('a=b&c=d&e=f&g=h&i=j&k=l&m=n&o')).toEqual({ a: 'b', c: 'd', e: 'f', g: 'h', i: 'j', k: 'l', m: 'n', o: null });
    expect(parse('a=b&c=d&e=f&g=h&i=j&k=l&m=n&o=p')).toEqual({ a: 'b', c: 'd', e: 'f', g: 'h', i: 'j', k: 'l', m: 'n', o: 'p' });
  });

  test('stringify', () => {
    expect(stringify({ foo: 'bar' })).toBe('foo=bar');
    expect(stringify({ foo: 'bar', baz: 'qux' })).toBe('foo=bar&baz=qux');
    expect(stringify({ foo: 'bar', baz: null })).toBe('foo=bar&baz');
    expect(stringify({ foo: 'bar', baz: undefined })).toBe('foo=bar');
    expect(stringify({ foo: 'b=c', bar: 'd=e' })).toBe('foo=b%3Dc&bar=d%3De');
  });
});

describe('updateQueryString', () => {
  test('should update existing parameters and add new ones', () => {
    expect(updateQueryString('a=1&b=2', { b: 'new_b', c: '3' })).toBe('a=1&b=new_b&c=3');
  });

  test('should add parameters to an empty query string', () => {
    expect(updateQueryString('', { a: '1' })).toBe('a=1');
  });

  test('should handle empty updates', () => {
    expect(updateQueryString('a=1', {})).toBe('a=1');
  });
});

describe('removeQueryString', () => {
  test('should remove specified parameters', () => {
    expect(removeQueryString('a=1&b=2&c=3', ['b', 'c'])).toBe('a=1');
  });

  test('should handle removing non-existent parameters', () => {
    expect(removeQueryString('a=1', ['b'])).toBe('a=1');
  });

  test('should return empty string if all parameters are removed', () => {
    expect(removeQueryString('a=1&b=2', ['a', 'b'])).toBe('');
  });
});
