
import { setCookie, getCookie, deleteCookie } from './cookie-utils';

describe('cookie-utils', () => {
  // Mock document.cookie
  let cookies = {};

  beforeEach(() => {
    cookies = {};
    Object.defineProperty(document, 'cookie', {
      get: jest.fn(() => {
        return Object.entries(cookies)
          .map(([name, value]) => `${name}=${value}`)
          .join('; ');
      }),
      set: jest.fn((cookieString) => {
        const parts = cookieString.split(';');
        const [nameValue] = parts[0].split('=');
        const name = nameValue.split('=')[0];
        const value = nameValue.substring(name.length + 1);

        if (parts.some(part => part.trim().startsWith('Max-Age=-99999999'))) {
          delete cookies[name];
        } else {
          cookies[name] = value;
        }
      }),
      configurable: true,
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('setCookie', () => {
    it('should set a session cookie', () => {
      setCookie('testCookie', 'testValue');
      expect(document.cookie).toBe('testCookie=testValue');
      expect(cookies.testCookie).toBe('testValue');
    });

    it('should set a cookie with expiration', () => {
      const mockDate = new Date(2025, 0, 1);
      jest.spyOn(global, 'Date').mockImplementation(() => mockDate);

      setCookie('expCookie', 'expValue', 10);
      // The exact expires string depends on the mock date, so we check for presence
      expect(document.cookie).toMatch(/^expCookie=expValue; expires=/);
      expect(cookies.expCookie).toBe('expValue');

      global.Date.mockRestore();
    });

    it('should update an existing cookie', () => {
      setCookie('testCookie', 'oldValue');
      setCookie('testCookie', 'newValue');
      expect(document.cookie).toBe('testCookie=newValue');
      expect(cookies.testCookie).toBe('newValue');
    });
  });

  describe('getCookie', () => {
    it('should return the value of an existing cookie', () => {
      setCookie('myCookie', 'myValue');
      expect(getCookie('myCookie')).toBe('myValue');
    });

    it('should return null for a non-existent cookie', () => {
      expect(getCookie('nonExistentCookie')).toBe(null);
    });

    it('should handle multiple cookies', () => {
      setCookie('cookie1', 'value1');
      setCookie('cookie2', 'value2');
      expect(getCookie('cookie1')).toBe('value1');
      expect(getCookie('cookie2')).toBe('value2');
    });
  });

  describe('deleteCookie', () => {
    it('should delete an existing cookie', () => {
      setCookie('deleteMe', 'someValue');
      expect(getCookie('deleteMe')).toBe('someValue');

      deleteCookie('deleteMe');
      expect(getCookie('deleteMe')).toBe(null);
      expect(cookies.deleteMe).toBeUndefined();
    });

    it('should do nothing if the cookie does not exist', () => {
      deleteCookie('nonExistent');
      expect(getCookie('nonExistent')).toBe(null);
    });
  });
});
