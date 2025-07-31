import { getJSON, postJSON, isOnline, isLocalhost } from './network-utils.js';

describe('getBatteryLevel', () => {
  test('should return the battery level if available', async () => {
    Object.defineProperty(navigator, 'getBattery', {
      value: jest.fn().mockResolvedValue({ level: 0.75 }),
      configurable: true,
    });
    await expect(getBatteryLevel()).resolves.toBe(0.75);
  });

  test('should return undefined if getBattery is not available', async () => {
    Object.defineProperty(navigator, 'getBattery', {
      value: undefined,
      configurable: true,
    });
    await expect(getBatteryLevel()).resolves.toBeUndefined();
  });
});


describe('getBandwidth', () => {
    test('should return the estimated download speed if available', () => {
      Object.defineProperty(navigator, 'connection', {
        value: { downlink: 10.5 },
        configurable: true,
      });
      expect(getBandwidth()).toBe(10.5);
    });

    test('should return undefined if navigator.connection is not available', () => {
      Object.defineProperty(navigator, 'connection', {
        value: undefined,
        configurable: true,
      });
      expect(getBandwidth()).toBeUndefined();
    });

    test('should return undefined if downlink is not available', () => {
      Object.defineProperty(navigator, 'connection', {
        value: { },
        configurable: true,
      });
      expect(getBandwidth()).toBeUndefined();
    });
  });

  describe('downloadFile', () => {
    let appendChildSpy;
    let removeChildSpy;
    let clickSpy;

    beforeEach(() => {
      appendChildSpy = jest.spyOn(document.body, 'appendChild').mockImplementation(() => {});
      removeChildSpy = jest.spyOn(document.body, 'removeChild').mockImplementation(() => {});
      clickSpy = jest.fn();
      jest.spyOn(document, 'createElement').mockImplementation((tagName) => {
        if (tagName === 'a') {
          return { click: clickSpy, setAttribute: jest.fn(), href: '', download: '', };
        }
        return document.createElement(tagName);
      });
    });

    afterEach(() => {
      appendChildSpy.mockRestore();
      removeChildSpy.mockRestore();
      clickSpy.mockRestore();
      jest.restoreAllMocks();
    });

    test('should create a link and trigger download', () => {
      downloadFile('http://example.com/file.txt', 'file.txt');
      expect(document.createElement).toHaveBeenCalledWith('a');
      expect(appendChildSpy).toHaveBeenCalled();
      expect(clickSpy).toHaveBeenCalled();
      expect(removeChildSpy).toHaveBeenCalled();
    });

    test('should set filename if provided', () => {
      downloadFile('http://example.com/file.txt', 'custom.txt');
      const link = document.createElement('a');
      expect(link.download).toBe('custom.txt');
    });
  });

  describe('uploadFile', () => {
    test('should upload a file and return JSON response', async () => {
      const mockFile = new File(['content'], 'test.txt', { type: 'text/plain' });
      const mockResponse = { status: 'success' };
      fetch.mockResolvedValueOnce({ ok: true, json: () => Promise.resolve(mockResponse) });

      const result = await uploadFile('http://example.com/upload', mockFile);

      expect(fetch).toHaveBeenCalledTimes(1);
      const formData = fetch.mock.calls[0][1].body;
      expect(formData instanceof FormData).toBe(true);
      expect(formData.get('file')).toBe(mockFile);
      expect(result).toEqual(mockResponse);
    });

    test('should throw an error if upload fails', async () => {
      const mockFile = new File(['content'], 'test.txt', { type: 'text/plain' });
      fetch.mockResolvedValueOnce({ ok: false, status: 500 });

      await expect(uploadFile('http://example.com/upload', mockFile)).rejects.toThrow('HTTP error! status: 500');
    });

    test('should use custom field name if provided', async () => {
      const mockFile = new File(['content'], 'test.txt', { type: 'text/plain' });
      fetch.mockResolvedValueOnce({ ok: true, json: () => Promise.resolve({}) });

      await uploadFile('http://example.com/upload', mockFile, 'myFile');

      const formData = fetch.mock.calls[0][1].body;
      expect(formData.get('myFile')).toBe(mockFile);
    });
  });
});
  });

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
    test('should return true when navigator.onLine is true', () => {
      Object.defineProperty(navigator, 'onLine', { value: true, configurable: true });
      expect(isOnline()).toBe(true);
    });

    test('should return false when navigator.onLine is false', () => {
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
      expect(getQueryParams('?test=default')).toEqual({ test: 'default' });
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

    it('should return unknown type', () => {
      Object.defineProperty(navigator, 'connection', {
        value: {},
        configurable: true,
      });
      expect(getNetworkType()).toBe('unknown');
    });

    it("should return 'unknown' when connection is not available", () => {
      Object.defineProperty(navigator, 'connection', {
        value: undefined,
        configurable: true,
      });
      expect(getNetworkType()).toBe('unknown');
    });
  });

  describe('isValidUrl', () => {
    it('should return true for valid URLs', () => {
      expect(isValidUrl('http://example.com')).toBe(true);
      expect(isValidUrl('https://www.example.com/path?query=1#hash')).toBe(true);
      expect(isValidUrl('ftp://ftp.example.com')).toBe(true);
      expect(isValidUrl('http://localhost:3000')).toBe(true);
    });

    it('should return false for invalid URLs', () => {
      expect(isValidUrl('invalid-url')).toBe(false);
      expect(isValidUrl('example.com')).toBe(false);
      expect(isValidUrl('http://')).toBe(false);
      expect(isValidUrl(null)).toBe(false);
      expect(isValidUrl(undefined)).toBe(false);
      expect(isValidUrl(123)).toBe(false);
    });
  });

  describe('ping', () => {
    test('should return true for a reachable URL', async () => {
      fetch.mockResolvedValueOnce({ ok: true });
      await expect(ping('http://example.com')).resolves.toBe(true);
    });

    test('should return false for an unreachable URL', async () => {
      fetch.mockResolvedValueOnce({ ok: false });
      await expect(ping('http://example.com')).resolves.toBe(false);
    });

    test('should return false on network error', async () => {
      fetch.mockRejectedValueOnce(new Error('Network error'));
      await expect(ping('http://example.com')).resolves.toBe(false);
    });

    test('should return false on timeout', async () => {
      jest.useFakeTimers();
      fetch.mockImplementationOnce(() => new Promise((resolve, reject) => {
        const timeoutId = setTimeout(() => reject(new DOMException('The user aborted a request.', 'AbortError')), 100);
        // Simulate successful fetch if not aborted
        setTimeout(() => resolve({ ok: true }), 100);
      }));
      const promise = ping('http://example.com', 50);
      jest.runAllTimers();
      await expect(promise).resolves.toBe(false);
      jest.useRealTimers();
    });
  });

  describe('getPublicIpAddress', () => {
    test('should return the public IP address', async () => {
      const mockIp = '192.168.1.1';
      fetch.mockResolvedValueOnce({ ok: true, json: () => Promise.resolve({ ip: mockIp }) });
      await expect(getPublicIpAddress()).resolves.toBe(mockIp);
    });

    test('should return null if fetching IP fails', async () => {
      fetch.mockResolvedValueOnce({ ok: false, status: 500 });
      const consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
      await expect(getPublicIpAddress()).resolves.toBeNull();
      expect(consoleErrorSpy).toHaveBeenCalled();
      consoleErrorSpy.mockRestore();
    });

    test('should return null on network error', async () => {
      fetch.mockRejectedValueOnce(new Error('Network down'));
      const consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
      await expect(getPublicIpAddress()).resolves.toBeNull();
      expect(consoleErrorSpy).toHaveBeenCalled();
      consoleErrorSpy.mockRestore();
    });
  });

  describe('isLocalhost', () => {
    let originalLocation;

    beforeAll(() => {
      originalLocation = window.location;
      Object.defineProperty(window, 'location', {
        writable: true,
        value: { ...window.location },
      });
    });

    afterAll(() => {
      Object.defineProperty(window, 'location', { value: originalLocation });
    });

    test('should return true for localhost', () => {
      window.location.hostname = 'localhost';
      expect(isLocalhost()).toBe(true);
    });

    test('should return true for 127.0.0.1', () => {
      window.location.hostname = '127.0.0.1';
      expect(isLocalhost()).toBe(true);
    });

    test('should return false for other hosts', () => {
      window.location.hostname = 'example.com';
      expect(isLocalhost()).toBe(false);
    });
  });

  describe('getJSON', () => {
    beforeEach(() => {
      fetch.mockClear();
    });

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
});