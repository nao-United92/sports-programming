import { getCookie, setCookie } from './browser-utils-extra.js';

describe('Browser Utilities Extra', () => {
  // Mock document.cookie
  let cookie = '';
  Object.defineProperty(document, 'cookie', {
    get: jest.fn().mockImplementation(() => cookie),
    set: jest.fn().mockImplementation(v => {
      cookie = v;
    }),
    configurable: true,
  });

  beforeEach(() => {
    cookie = '';
  });

  describe('setCookie', () => {
    it('should set a cookie', () => {
      setCookie('test', 'value', 1);
      expect(document.cookie).toContain('test=value');
      expect(document.cookie).toContain('expires');
    });
  });

  describe('getCookie', () => {
    it('should get a cookie', () => {
      document.cookie = 'test=value';
      expect(getCookie('test')).toBe('value');
    });

    it('should return null if cookie not found', () => {
      expect(getCookie('nonexistent')).toBe(null);
    });
  });
});
