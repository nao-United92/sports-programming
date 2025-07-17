import { setCookie, getCookie } from './cookie-utils';

describe('cookie-utils', () => {
  beforeEach(() => {
    // Clear cookies before each test
    document.cookie.split(';').forEach(function(c) {
      document.cookie = c.replace(/^ +/, '').replace(/=.*/, '=;expires=' + new Date().toUTCString() + ';path=/');
    });
  });

  describe('setCookie', () => {
    it('should set a cookie with a name and value', () => {
      setCookie('testName', 'testValue');
      expect(document.cookie).toContain('testName=testValue');
    });

    it('should set a cookie with expiration days', () => {
      const date = new Date();
      date.setTime(date.getTime() + (1 * 24 * 60 * 60 * 1000));
      setCookie('testName', 'testValue', 1);
      expect(document.cookie).toContain('testName=testValue');
      expect(document.cookie).toContain('expires=' + date.toUTCString().split(' ').slice(0, 5).join(' '));
    });

    it('should set an empty value cookie', () => {
      setCookie('emptyCookie', '');
      expect(document.cookie).toContain('emptyCookie=');
    });
  });

  describe('getCookie', () => {
    it('should get the value of an existing cookie', () => {
      document.cookie = 'myCookie=myValue';
      expect(getCookie('myCookie')).toBe('myValue');
    });

    it('should return null for a non-existent cookie', () => {
      expect(getCookie('nonExistentCookie')).toBe(null);
    });

    it('should handle multiple cookies', () => {
      document.cookie = 'cookie1=value1';
      document.cookie = 'cookie2=value2';
      expect(getCookie('cookie1')).toBe('value1');
      expect(getCookie('cookie2')).toBe('value2');
    });

    it('should return null for an empty cookie string', () => {
      document.cookie = '';
      expect(getCookie('anyCookie')).toBe(null);
    });
  });
});