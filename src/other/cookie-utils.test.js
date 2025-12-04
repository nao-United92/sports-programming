import { getCookie, setCookie } from './cookie-utils.js';

describe('Cookie Utilities', () => {
  // Mock document.cookie
  let cookies = {};
  Object.defineProperty(document, 'cookie', {
    get: jest.fn(() => {
      let cookieString = '';
      for (const name in cookies) {
        if (cookies.hasOwnProperty(name)) {
          cookieString += `${name}=${cookies[name].value}; `;
        }
      }
      return cookieString.slice(0, -2); // Remove trailing '; '
    }),
    set: jest.fn((cookie) => {
      const parts = cookie.split(';');
      const [nameValue] = parts[0].split('=');
      const name = decodeURIComponent(nameValue);
      const value = decodeURIComponent(parts[0].substring(nameValue.length + 1));

      let expires = null;
      let path = '/';
      let domain = '';
      let secure = false;
      let samesite = '';

      parts.slice(1).forEach(part => {
        const trimmedPart = part.trim();
        if (trimmedPart.startsWith('expires=')) {
          expires = new Date(trimmedPart.substring(8));
        } else if (trimmedPart.startsWith('path=')) {
          path = trimmedPart.substring(5);
        } else if (trimmedPart === 'secure') {
          secure = true;
        } else if (trimmedPart.startsWith('samesite=')) {
          samesite = trimmedPart.substring(9);
        }
      });

      cookies[name] = { value, expires, path, domain, secure, samesite };
    }),
    configurable: true,
  });

  beforeEach(() => {
    cookies = {}; // Reset cookies before each test
    document.cookie = ''; // Clear actual document.cookie if it exists
    jest.clearAllMocks();
  });

  describe('setCookie', () => {
    it('should set a basic cookie', () => {
      setCookie('testName', 'testValue');
      expect(document.cookie).toBe('testName=testValue');
      expect(cookies.testName.value).toBe('testValue');
    });

    it('should set a cookie with expiration in seconds', () => {
      jest.useFakeTimers();
      const now = new Date();
      jest.setSystemTime(now);

      setCookie('testName', 'testValue', { expires: 60 }); // 60 seconds
      const expectedExpires = new Date(now.getTime() + 60 * 1000).toUTCString();
      expect(document.cookie).toContain(`testName=testValue; expires=${expectedExpires}`);
      expect(cookies.testName.expires.toUTCString()).toBe(expectedExpires);
      jest.useRealTimers();
    });

    it('should set a cookie with path and domain', () => {
      setCookie('testName', 'testValue', { path: '/test', domain: 'example.com' });
      expect(document.cookie).toContain('testName=testValue; path=/test; domain=example.com');
      expect(cookies.testName.path).toBe('/test');
      expect(cookies.testName.domain).toBe('example.com');
    });

    it('should set a secure and samesite cookie', () => {
      setCookie('testName', 'testValue', { secure: true, samesite: 'Lax' });
      expect(document.cookie).toContain('testName=testValue; secure; samesite=Lax');
      expect(cookies.testName.secure).toBe(true);
      expect(cookies.testName.samesite).toBe('Lax');
    });

    it('should encode cookie name and value', () => {
      setCookie('test Name', 'test Value with spaces');
      expect(document.cookie).toBe('test%20Name=test%20Value%20with%20spaces');
      expect(cookies['test Name'].value).toBe('test Value with spaces');
    });
  });

  describe('getCookie', () => {
    it('should get an existing cookie by name', () => {
      document.cookie = 'cookie1=value1; cookie2=value2';
      expect(getCookie('cookie1')).toBe('value1');
      expect(getCookie('cookie2')).toBe('value2');
    });

    it('should return null for a non-existent cookie', () => {
      document.cookie = 'cookie1=value1';
      expect(getCookie('nonExistent')).toBeNull();
    });

    it('should decode cookie value', () => {
      document.cookie = 'encodedCookie=value%20with%20spaces';
      expect(getCookie('encodedCookie')).toBe('value with spaces');
    });

    it('should handle multiple cookies correctly', () => {
      document.cookie = 'a=1; b=2; c=3';
      expect(getCookie('b')).toBe('2');
    });

    it('should return null if document.cookie is not available', () => {
      const originalDocument = global.document;
      delete global.document;
      expect(getCookie('any')).toBeNull();
      global.document = originalDocument; // Restore document
    });
  });
});