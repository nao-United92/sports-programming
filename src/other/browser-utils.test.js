import { isBrowser, scrollToTop, getScrollPosition, isInViewport, getBrowserInfo, isMobileDevice } from './browser-utils.js';

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

  describe('getBrowserInfo', () => {
    it('should return Chrome info', () => {
      Object.defineProperty(navigator, 'userAgent', { value: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36', configurable: true });
      expect(getBrowserInfo()).toEqual({ name: 'Chrome', version: '91.0.4472.124' });
    });

    it('should return Firefox info', () => {
      Object.defineProperty(navigator, 'userAgent', { value: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:89.0) Gecko/20100101 Firefox/89.0', configurable: true });
      expect(getBrowserInfo()).toEqual({ name: 'Firefox', version: '89.0' });
    });

    it('should return Edge info', () => {
      Object.defineProperty(navigator, 'userAgent', { value: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36 Edg/91.0.864.59', configurable: true });
      expect(getBrowserInfo()).toEqual({ name: 'Edge', version: '91.0.4472.124' });
    });

    it('should return Safari info', () => {
      Object.defineProperty(navigator, 'userAgent', { value: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.1.1 Safari/605.1.15', configurable: true });
      expect(getBrowserInfo()).toEqual({ name: 'Safari', version: '14.1.1' });
    });

    it('should return Opera info', () => {
      Object.defineProperty(navigator, 'userAgent', { value: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36 OPR/77.0.4054.203', configurable: true });
      expect(getBrowserInfo()).toEqual({ name: 'Opera', version: '77.0.4054.203' });
    });

    it('should return IE info', () => {
      Object.defineProperty(navigator, 'userAgent', { value: 'Mozilla/5.0 (Windows NT 6.1; WOW64; Trident/7.0; AS; rv:11.0) like Gecko', configurable: true });
      expect(getBrowserInfo()).toEqual({ name: 'IE', version: '11.0' });
    });

    it('should return Unknown for unknown browser', () => {
      Object.defineProperty(navigator, 'userAgent', { value: 'Mozilla/5.0 (Unknown; CPU OS) AppleWebKit/Unknown (KHTML, like Gecko) Unknown/Unknown', configurable: true });
      expect(getBrowserInfo()).toEqual({ name: 'Unknown', version: 'Unknown' });
    });
  });

  describe('isMobileDevice', () => {
    it('should return true for mobile user agents', () => {
      Object.defineProperty(navigator, 'userAgent', { value: 'Mozilla/5.0 (iPhone; CPU iPhone OS 13_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.1.1 Mobile/15E148 Safari/604.1', configurable: true });
      expect(isMobileDevice()).toBe(true);

      Object.defineProperty(navigator, 'userAgent', { value: 'Mozilla/5.0 (Linux; Android 10) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.106 Mobile Safari/537.36', configurable: true });
      expect(isMobileDevice()).toBe(true);
    });

    it('should return false for desktop user agents', () => {
      Object.defineProperty(navigator, 'userAgent', { value: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36', configurable: true });
      expect(isMobileDevice()).toBe(false);
    });
  });
});
