import { setCookie, getCookie, deleteCookie } from './cookie-utils.js';

describe('Cookie Utilities', () => {
  // Mock document.cookie
  let cookieStore = {};
  const cookieDescriptor = {
    get: jest.fn(() => {
      return Object.entries(cookieStore)
        .map(([key, value]) => `${key}=${value}`)
        .join('; ');
    }),
    set: jest.fn((cookieString) => {
      const [pair] = cookieString.split(';');
      const [key, value] = pair.split('=');
      if (cookieString.includes('expires=Thu, 01 Jan 1970')) {
         delete cookieStore[key];
      } else {
         cookieStore[key] = value;
      }
    }),
    configurable: true,
  };

  beforeEach(() => {
    cookieStore = {};
    Object.defineProperty(document, 'cookie', cookieDescriptor);
  });

  describe('setCookie', () => {
    test('should set a simple cookie', () => {
      setCookie('test', 'value');
      expect(document.cookie).toBe('test=value');
    });

    test('should set a cookie with an expiration date', () => {
      setCookie('test', 'value', { days: 7 });
      // We can't easily test the exact expires string, so we check if it's there
      expect(cookieDescriptor.set).toHaveBeenCalledWith(expect.stringContaining('expires='));
    });

    test('should set a cookie with a path', () => {
        setCookie('test', 'value', { path: '/' });
        expect(cookieDescriptor.set).toHaveBeenCalledWith(expect.stringContaining('path=/'));
    });
  });

  describe('getCookie', () => {
    test('should get an existing cookie', () => {
      setCookie('test', 'value');
      expect(getCookie('test')).toBe('value');
    });

    test('should return null for a non-existent cookie', () => {
      expect(getCookie('nonexistent')).toBe(null);
    });

    test('should handle multiple cookies', () => {
      setCookie('test1', 'value1');
      setCookie('test2', 'value2');
      expect(getCookie('test1')).toBe('value1');
      expect(getCookie('test2')).toBe('value2');
    });
  });

  describe('deleteCookie', () => {
    test('should delete a cookie', () => {
      setCookie('test', 'value');
      expect(getCookie('test')).toBe('value');
      deleteCookie('test');
      expect(getCookie('test')).toBe(null);
    });
  });
});