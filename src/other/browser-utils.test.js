import { isBrowser, scrollToTop, getScrollPosition, isInViewport, getUserAgent, isMobile, isTablet, getURLParameters } from './browser-utils.js';

describe('browser-utils', () => {
  it('should check if in a browser environment', () => {
    expect(isBrowser()).toBe(true);
  });

  it('should scroll to the top of an element', () => {
    const el = document.createElement('div');
    el.scrollTo = jest.fn();
    scrollToTop(el);
    expect(el.scrollTo).toHaveBeenCalledWith({ top: 0, behavior: 'smooth' });
  });

  it('should get the scroll position of an element', () => {
    const el = document.createElement('div');
    el.scrollTop = 100;
    el.scrollLeft = 50;
    const pos = getScrollPosition(el);
    expect(pos).toEqual({ scrollTop: 100, scrollLeft: 50 });
  });

  it('should check if an element is in the viewport', () => {
    const el = document.createElement('div');
    Object.defineProperty(el, 'getBoundingClientRect', {
      value: () => ({
        top: 10,
        left: 10,
        bottom: 100,
        right: 100,
      }),
    });
    expect(isInViewport(el)).toBe(true);
  });

  describe('getUserAgent', () => {
    it('should return the user agent string', () => {
      const userAgent = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36';
      Object.defineProperty(navigator, 'userAgent', { value: userAgent, configurable: true });
      expect(getUserAgent()).toBe(userAgent);
    });
  });

  describe('isMobile', () => {
    it('should return true for mobile user agents', () => {
      Object.defineProperty(navigator, 'userAgent', { value: 'Mozilla/5.0 (iPhone; CPU iPhone OS 13_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.1.1 Mobile/15E148 Safari/604.1', configurable: true });
      expect(isMobile()).toBe(true);

      Object.defineProperty(navigator, 'userAgent', { value: 'Mozilla/5.0 (Linux; Android 10) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.106 Mobile Safari/537.36', configurable: true });
      expect(isMobile()).toBe(true);
    });

    it('should return false for desktop user agents', () => {
      Object.defineProperty(navigator, 'userAgent', { value: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36', configurable: true });
      expect(isMobile()).toBe(false);
    });
  });

  describe('isTablet', () => {
    it('should return true for tablet user agents', () => {
      Object.defineProperty(navigator, 'userAgent', { value: 'Mozilla/5.0 (iPad; CPU OS 13_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/83.0.4103.88 Mobile/15E148 Safari/604.1', configurable: true });
      expect(isTablet()).toBe(true);

      Object.defineProperty(navigator, 'userAgent', { value: 'Mozilla/5.0 (Linux; Android 4.3; Nexus 7 Build/JSS15Q) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/30.0.1599.92 Safari/537.36', configurable: true });
      expect(isTablet()).toBe(true);
    });

    it('should return false for non-tablet user agents', () => {
      Object.defineProperty(navigator, 'userAgent', { value: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36', configurable: true });
      expect(isTablet()).toBe(false);

      Object.defineProperty(navigator, 'userAgent', { value: 'Mozilla/5.0 (iPhone; CPU iPhone OS 13_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.1.1 Mobile/15E148 Safari/604.1', configurable: true });
      expect(isTablet()).toBe(false);
    });
  });

  describe('getURLParameters', () => {
    test('should parse URL parameters', () => {
      const url = 'http://example.com?name=John%20Doe&age=30';
      const params = getURLParameters(url);
      expect(params).toEqual({ name: 'John Doe', age: '30' });
    });

    test('should handle URL with no parameters', () => {
      const url = 'http://example.com';
      const params = getURLParameters(url);
      expect(params).toEqual({});
    });

    test('should handle URL with empty parameter values', () => {
      const url = 'http://example.com?name=&age=';
      const params = getURLParameters(url);
      expect(params).toEqual({ name: '', age: '', });
    });
  });
});