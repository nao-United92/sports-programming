import { getJSON, postJSON, isOnline, getQueryParams, getNetworkType } from './network-utils.js';

global.fetch = jest.fn();

describe('network-utils', () => {
  beforeEach(() => {
    fetch.mockClear();
  });

  describe('getJSON', () => {
    it('should fetch JSON data from a URL', async () => {
      const mockData = { message: 'Success' };
      fetch.mockResolvedValueOnce({ ok: true, json: () => Promise.resolve(mockData) });

      const data = await getJSON('https://example.com/data.json');
      expect(data).toEqual(mockData);
      expect(fetch).toHaveBeenCalledWith('https://example.com/data.json');
    });

    it('should throw an error for a non-OK response', async () => {
      fetch.mockResolvedValueOnce({ ok: false, status: 404 });

      await expect(getJSON('https://example.com/nonexistent.json')).rejects.toThrow('HTTP error! status: 404');
    });
  });

  describe('postJSON', () => {
    it('should post JSON data to a URL', async () => {
      const mockData = { message: 'Success' };
      const postData = { name: 'test' };
      fetch.mockResolvedValueOnce({ ok: true, json: () => Promise.resolve(mockData) });

      const data = await postJSON('https://example.com/data.json', postData);
      expect(data).toEqual(mockData);
      expect(fetch).toHaveBeenCalledWith('https://example.com/data.json', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(postData),
      });
    });

    it('should throw an error for a non-OK response', async () => {
      const postData = { name: 'test' };
      fetch.mockResolvedValueOnce({ ok: false, status: 500 });

      await expect(postJSON('https://example.com/error.json', postData)).rejects.toThrow('HTTP error! status: 500');
    });
  });

  describe('isOnline', () => {
    it('should return true when navigator.onLine is true', () => {
      Object.defineProperty(navigator, 'onLine', { value: true, configurable: true });
      expect(isOnline()).toBe(true);
    });

    it('should return false when navigator.onLine is false', () => {
      Object.defineProperty(navigator, 'onLine', { value: false, configurable: true });
      expect(isOnline()).toBe(false);
    });
  });

  describe('getQueryParams', () => {
    it('should parse query parameters from a URL string', () => {
      const url = '?name=John%20Doe&age=30&city=';
      const params = getQueryParams(url);
      expect(params).toEqual({ name: 'John Doe', age: '30', city: '' });
    });

    it('should handle URL without query string prefix', () => {
      const url = 'name=Jane&id=123';
      const params = getQueryParams(url);
      expect(params).toEqual({ name: 'Jane', id: '123' });
    });

    it('should return an empty object for an empty query string', () => {
      expect(getQueryParams('')).toEqual({});
      expect(getQueryParams('?')).toEqual({});
    });

    it('should handle parameters with no value', () => {
      const url = '?param1&param2=value2';
      const params = getQueryParams(url);
      expect(params).toEqual({ param1: '', param2: 'value2' });
    });

    it('should use window.location.search by default', () => {
      // Mock window.location.search
      Object.defineProperty(window, 'location', {
        value: { search: '?test=default' },
        writable: true,
      });
      expect(getQueryParams()).toEqual({ test: 'default' });
    });
  });

  describe('getNetworkType', () => {
    it('should return the effective network type if available', () => {
      Object.defineProperty(navigator, 'connection', {
        value: { effectiveType: '4g' },
        configurable: true,
      });
      expect(getNetworkType()).toBe('4g');
    });

    it('should return 'unknown' if effectiveType is not available', () => {
      Object.defineProperty(navigator, 'connection', {
        value: {},
        configurable: true,
      });
      expect(getNetworkType()).toBe('unknown');
    });

    it('should return 'unknown' if navigator.connection is not available', () => {
      Object.defineProperty(navigator, 'connection', {
        value: undefined,
        configurable: true,
      });
      expect(getNetworkType()).toBe('unknown');
    });
  });
});
