import { set, get, remove } from './browser-cookie-utils.js';

describe('cookieUtils', () => {
  // Mock document.cookie
  let cookies = {};

  Object.defineProperty(document, 'cookie', {
    get: jest.fn(() => {
      return Object.entries(cookies)
        .map(([name, value]) => `${name}=${value}`)
        .join('; ');
    }),
    set: jest.fn((cookieString) => {
      const parts = cookieString.split(';');
      const [nameValue] = parts[0].split('=');
      const name = decodeURIComponent(nameValue);
      const value = decodeURIComponent(parts[0].substring(nameValue.length + 1));

      if (value === '' && parts.some(p => p.includes('expires=Thu, 01 Jan 1970'))) {
        delete cookies[name]; // Simulate cookie deletion
      } else {
        cookies[name] = value;
      }
    }),
    configurable: true,
  });

  beforeEach(() => {
    cookies = {}; // Clear cookies before each test
    jest.clearAllMocks();
  });

  it('should set a cookie', () => {
    set('testName', 'testValue');
    expect(document.cookie).toBe('testName=testValue');
    expect(document.cookie).toHaveBeenCalledWith('testName=testValue');
  });

  it('should get a cookie', () => {
    set('testName', 'testValue');
    expect(get('testName')).toBe('testValue');
  });

  it('should return null for a non-existent cookie', () => {
    expect(get('nonExistent')).toBeNull();
  });

  it('should remove a cookie', () => {
    set('testName', 'testValue');
    expect(get('testName')).toBe('testValue');
    remove('testName');
    expect(get('testName')).toBeNull();
    expect(document.cookie).toHaveBeenCalledWith(expect.stringContaining('testName=; expires=Thu, 01 Jan 1970'));
  });

  it('should set a cookie with expiration', () => {
    set('expiringCookie', 'value', { expires: 1 }); // 1 day
    expect(document.cookie).toHaveBeenCalledWith(expect.stringContaining('expiringCookie=value; expires='));
  });

  it('should set a cookie with path', () => {
    set('pathCookie', 'value', { path: '/test' });
    expect(document.cookie).toHaveBeenCalledWith('pathCookie=value; path=/test');
  });

  it('should set a secure cookie', () => {
    set('secureCookie', 'value', { secure: true });
    expect(document.cookie).toHaveBeenCalledWith('secureCookie=value; secure');
  });

  it('should set a samesite cookie', () => {
    set('samesiteCookie', 'value', { samesite: 'Lax' });
    expect(document.cookie).toHaveBeenCalledWith('samesiteCookie=value; samesite=Lax');
  });

  it('should handle special characters in cookie name and value', () => {
    set('name with spaces', 'value with spaces & symbols!');
    expect(get('name with spaces')).toBe('value with spaces & symbols!');
  });
});