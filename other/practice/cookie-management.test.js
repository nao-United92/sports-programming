import { setCookie, getCookie, eraseCookie } from './cookie-management.js';

describe('Cookie Management', () => {
  // Clear cookies before each test
  beforeEach(() => {
    document.cookie.split(';').forEach(function(c) {
      document.cookie = c.replace(/^ +/, '').replace(/=.*/, '=;expires=' + new Date().toUTCString() + ';path=/');
    });
  });

  test('setCookie should set a cookie', () => {
    setCookie('test_name', 'test_value', 1);
    expect(document.cookie).toContain('test_name=test_value');
  });

  test('getCookie should retrieve a cookie value', () => {
    setCookie('another_cookie', 'another_value', 1);
    expect(getCookie('another_cookie')).toBe('another_value');
  });

  test('getCookie should return null for a non-existent cookie', () => {
    expect(getCookie('non_existent_cookie')).toBe(null);
  });

  test('eraseCookie should delete a cookie', () => {
    setCookie('cookie_to_erase', 'value', 1);
    expect(document.cookie).toContain('cookie_to_erase=value');
    eraseCookie('cookie_to_erase');
    expect(document.cookie).not.toContain('cookie_to_erase=value');
  });

  test('setCookie should set a cookie with no expiration date if days is not provided', () => {
    setCookie('session_cookie', 'session_value');
    expect(document.cookie).toContain('session_cookie=session_value');
    // Cannot reliably test session cookie expiration in JSDOM,
    // but the presence indicates it was set.
  });

  test('setCookie should handle special characters in value', () => {
    setCookie('special_cookie', 'value;with=special,chars', 1);
    expect(getCookie('special_cookie')).toBe('value;with=special,chars');
  });
});
