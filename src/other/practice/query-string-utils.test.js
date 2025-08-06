
import { parseQueryString, stringifyQueryString } from './query-string-utils.js';

describe('queryString', () => {
  describe('parseQueryString', () => {
    it('should parse a query string into an object', () => {
      const queryString = 'key1=value1&key2=value2';
      const result = parseQueryString(queryString);
      expect(result).toEqual({ key1: 'value1', key2: 'value2' });
    });

    it('should handle empty query strings', () => {
      const queryString = '';
      const result = parseQueryString(queryString);
      expect(result).toEqual({});
    });

    it('should handle query strings with no values', () => {
      const queryString = 'key1=&key2';
      const result = parseQueryString(queryString);
      expect(result).toEqual({ key1: '', key2: '' });
    });
  });

  describe('stringifyQueryString', () => {
    it('should stringify an object into a query string', () => {
      const obj = { key1: 'value1', key2: 'value2' };
      const result = stringifyQueryString(obj);
      expect(result).toBe('key1=value1&key2=value2');
    });

    it('should handle empty objects', () => {
      const obj = {};
      const result = stringifyQueryString(obj);
      expect(result).toBe('');
    });

    it('should handle objects with empty values', () => {
      const obj = { key1: '', key2: null };
      const result = stringifyQueryString(obj);
      expect(result).toBe('key1=&key2=null');
    });
  });
});
