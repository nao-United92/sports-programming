import { setCookie, getCookie, deleteCookie, cookieExists, getCookies, updateCookie, clearAllCookies } from './cookie-utils.js';

describe('cookieUtils', () => {
  const MOCK_COOKIE_NAME = 'testCookie';
  const MOCK_COOKIE_VALUE = 'testValue';

  beforeEach(() => {
    // Clear cookies before each test
    document.cookie.split(';').forEach(cookie => {
      const eqPos = cookie.indexOf('=');
      const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
      document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/';
    });
  });

  describe('setCookie', () => {
    it('should set a cookie with a given name and value', () => {
      setCookie(MOCK_COOKIE_NAME, MOCK_COOKIE_VALUE);
      expect(document.cookie).toContain(`${MOCK_COOKIE_NAME}=${MOCK_COOKIE_VALUE}`);
    });

    it('should set a cookie with expiration days', () => {
      const days = 7;
      setCookie(MOCK_COOKIE_NAME, MOCK_COOKIE_VALUE, days);
      // In a real browser, document.cookie would contain the expires attribute.
      // For JSDOM, we can only assert that the basic cookie is set.
      expect(document.cookie).toContain(`${MOCK_COOKIE_NAME}=${MOCK_COOKIE_VALUE}`);
    });

    it('should set an empty value if value is not provided', () => {
      setCookie(MOCK_COOKIE_NAME, '');
      expect(document.cookie).toContain(`${MOCK_COOKIE_NAME}=`);
    });
  });

  describe('getCookie', () => {
    it('should get a cookie by name', () => {
      document.cookie = `${MOCK_COOKIE_NAME}=${MOCK_COOKIE_VALUE}`;
      expect(getCookie(MOCK_COOKIE_NAME)).toBe(MOCK_COOKIE_VALUE);
    });

    it('should return null if cookie does not exist', () => {
      expect(getCookie('nonExistentCookie')).toBeNull();
    });

    it('should handle multiple cookies', () => {
      setCookie('cookie1', 'value1');
      setCookie(MOCK_COOKIE_NAME, MOCK_COOKIE_VALUE);
      setCookie('cookie2', 'value2');
      expect(getCookie(MOCK_COOKIE_NAME)).toBe(MOCK_COOKIE_VALUE);
    });

    it('should handle cookies with leading spaces', () => {
      document.cookie = ` ${MOCK_COOKIE_NAME}=${MOCK_COOKIE_VALUE}`;
      expect(getCookie(MOCK_COOKIE_NAME)).toBe(MOCK_COOKIE_VALUE);
    });
  });

  describe('deleteCookie', () => {
    it('should delete a cookie by name', () => {
      document.cookie = `${MOCK_COOKIE_NAME}=${MOCK_COOKIE_VALUE}`;
      deleteCookie(MOCK_COOKIE_NAME);
      expect(document.cookie).not.toContain(`${MOCK_COOKIE_NAME}=`);
    });

    it('should not throw error if cookie does not exist', () => {
      expect(() => deleteCookie('nonExistentCookie')).not.toThrow();
    });
  });

  describe('cookieExists', () => {
    it('should return true if a cookie exists', () => {
      setCookie(MOCK_COOKIE_NAME, MOCK_COOKIE_VALUE);
      expect(cookieExists(MOCK_COOKIE_NAME)).toBe(true);
    });

    it('should return false if a cookie does not exist', () => {
      expect(cookieExists('nonExistentCookie')).toBe(false);
    });
  });

  describe('getCookies', () => {
    it('should return an object of all cookies', () => {
      setCookie('cookie1', 'value1');
      setCookie('cookie2', 'value2');
      const cookies = getCookies();
      expect(cookies).toEqual({ cookie1: 'value1', cookie2: 'value2' });
    });

    it('should return an empty object if there are no cookies', () => {
      expect(getCookies()).toEqual({});
    });
  });

  describe('updateCookie', () => {
    it('should update the value of an existing cookie', () => {
      setCookie('testCookie', 'oldValue');
      updateCookie('testCookie', 'newValue');
      expect(getCookie('testCookie')).toBe('newValue');
    });
  });

  describe('clearAllCookies', () => {
    it('should clear all cookies', () => {
      setCookie('cookie1', 'value1');
      setCookie('cookie2', 'value2');
      clearAllCookies();
      expect(document.cookie).toBe('');
    });
  });
});
