const { isMobile, isBrowser, getOS } = require('./user-agent-utils.js');

// Mock navigator
global.navigator = {
  userAgent: '',
};

describe('User Agent Utilities', () => {
  beforeEach(() => {
    navigator.userAgent = '';
  });

  describe('isMobile', () => {
    it('should return true for a mobile user agent', () => {
      navigator.userAgent = 'Mozilla/5.0 (iPhone; CPU iPhone OS 13_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.1.1 Mobile/15E148 Safari/604.1';
      expect(isMobile()).toBe(true);
    });

    it('should return false for a desktop user agent', () => {
      navigator.userAgent = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.97 Safari/537.36';
      expect(isMobile()).toBe(false);
    });

    it('should return false if navigator is undefined', () => {
      global.navigator = undefined;
      expect(isMobile()).toBe(false);
    });
  });

  describe('isBrowser', () => {
    it('should return true in a browser environment', () => {
      global.window = {};
      global.window.document = {};
      expect(isBrowser()).toBe(true);
    });

    it('should return false outside a browser environment', () => {
      global.window = undefined;
      expect(isBrowser()).toBe(false);
    });
  });

  describe('getOS', () => {
    it('should return 'iOS' for an iPhone user agent', () => {
      navigator.userAgent = 'Mozilla/5.0 (iPhone; CPU iPhone OS 13_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.1.1 Mobile/15E148 Safari/604.1';
      expect(getOS()).toBe('iOS');
    });

    it('should return 'macOS' for a Mac user agent', () => {
      navigator.userAgent = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.97 Safari/537.36';
      expect(getOS()).toBe('macOS');
    });

    it('should return 'Windows' for a Windows user agent', () => {
      navigator.userAgent = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.97 Safari/537.36';
      expect(getOS()).toBe('Windows');
    });

    it('should return 'Linux' for a Linux user agent', () => {
      navigator.userAgent = 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.97 Safari/537.36';
      expect(getOS()).toBe('Linux');
    });

    it('should return 'Android' for an Android user agent', () => {
      navigator.userAgent = 'Mozilla/5.0 (Linux; Android 10) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.97 Mobile Safari/537.36';
      expect(getOS()).toBe('Android');
    });

    it('should return 'Unknown' for an unknown user agent', () => {
      navigator.userAgent = 'Unknown User Agent';
      expect(getOS()).toBe('Unknown');
    });

    it('should return 'Unknown' if navigator is undefined', () => {
      global.navigator = undefined;
      expect(getOS()).toBe('Unknown');
    });
  });
});
