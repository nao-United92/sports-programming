import { setCookie, getCookie, deleteCookie } from './cookie-utils.js';

describe('Cookie Utilities', () => {
  let originalCookie;

  beforeEach(() => {
    originalCookie = document.cookie;
    Object.defineProperty(document, 'cookie', {
      writable: true,
      value: '',
    });
  });

  afterEach(() => {
    Object.defineProperty(document, 'cookie', {
      writable: true,
      value: originalCookie,
    });
  });

  describe('setCookie', () => {
    it('should set a cookie with name and value', () => {
      setCookie('testName', 'testValue', 1);
      expect(document.cookie).toContain('testName=testValue');
    });

    it('should set a cookie with expiration', () => {
      setCookie('testName', 'testValue', 1);
      expect(document.cookie).toContain('expires=');
    });
  });

  describe('getCookie', () => {
    it('should get a cookie value by name', () => {
      document.cookie = 'testName=testValue';
      expect(getCookie('testName')).toBe('testValue');
    });

    it('should return null if cookie not found', () => {
      expect(getCookie('nonExistent')).toBe(null);
    });

    it('should handle multiple cookies', () => {
      document.cookie = 'cookie1=value1; cookie2=value2';
      expect(getCookie('cookie2')).toBe('value2');
    });
  });

  describe('deleteCookie', () => {
    it('should delete a cookie by name', () => {
      document.cookie = 'testName=testValue';
      deleteCookie('testName');
      expect(document.cookie).not.toContain('testName');
    });
  });
});