import { cookieUtils } from './browser-cookie-utils.js';

// Simple mock for document.cookie
let mockCookies = {};
Object.defineProperty(document, 'cookie', {
  get: () => {
    let cookieString = '';
    for (const name in mockCookies) {
      cookieString += `${name}=${mockCookies[name]}; `;
    }
    return cookieString.trim();
  },
  set: (value) => {
    const parts = value.split(';');
    const nameValue = parts[0].split('=');
    const name = nameValue[0];
    const val = nameValue[1];
    mockCookies[name] = val;
  },
  configurable: true,
});

describe('cookieUtils', () => {
  beforeEach(() => {
    mockCookies = {}; // Clear mock cookies before each test
  });

  test('should set a cookie', () => {
    cookieUtils.set('testCookie', 'testValue');
    expect(mockCookies['testCookie']).toBe('testValue');
  });

  test('should set a cookie with expiration', () => {
    const now = new Date();
    const expectedDate = new Date(now.getTime() + (7 * 24 * 60 * 60 * 1000));
    // Temporarily override Date for consistent expiration testing
    const originalDate = global.Date;
    global.Date = class extends Date {
      constructor(dateString) {
        if (dateString) {
          return new originalDate(dateString);
        }
        return now;
      }
    };

    cookieUtils.set('expCookie', 'expValue', 7);
    // Check if the cookie string contains the expiration
    const cookieString = document.cookie;
    expect(cookieString).toContain(`expCookie=expValue`);
    expect(cookieString).toContain(`expires=${expectedDate.toUTCString()}`);

    global.Date = originalDate; // Restore original Date
  });

  test('should get a cookie', () => {
    document.cookie = 'testCookie=testValue'; // Set via mock setter
    expect(cookieUtils.get('testCookie')).toBe('testValue');
  });

  test('should return null for a non-existent cookie', () => {
    expect(cookieUtils.get('nonExistent')).toBeNull();
  });

  test('should remove a cookie', () => {
    cookieUtils.set('toRemove', 'value');
    cookieUtils.remove('toRemove');
    // When a cookie is removed, its value is set to empty and expires in the past
    const cookieString = document.cookie;
    expect(cookieString).toContain('toRemove=');
    expect(cookieString).toContain('expires=Thu, 01 Jan 1970');
  });

  test('should get all cookies as an object', () => {
    cookieUtils.set('cookie1', 'value1');
    cookieUtils.set('cookie2', 'value2');
    const allCookies = cookieUtils.getAll();
    expect(allCookies).toEqual({
      'cookie1': 'value1',
      'cookie2': 'value2',
    });
  });
});
