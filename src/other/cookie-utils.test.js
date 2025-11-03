import { setCookie, getCookie, deleteCookie } from './cookie-utils.js';

describe('Cookie Utils', () => {
  beforeEach(() => {
    // Clear all cookies before each test
    const cookies = document.cookie.split(';');
    cookies.forEach(cookie => {
      const eqPos = cookie.indexOf('=');
      const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
      document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:00 GMT';
    });
  });

  test('setCookie and getCookie', () => {
    setCookie('test', 'hello');
    expect(getCookie('test')).toBe('hello');
  });

  test('getCookie for a non-existent cookie should return null', () => {
    expect(getCookie('nonexistent')).toBeNull();
  });

  test('setCookie with expiration days', () => {
    setCookie('test_expires', 'value', 1);
    expect(document.cookie).toContain('test_expires=value');
    // Note: JSDOM doesn't fully implement expires, so we just check if it's set
  });

  test('deleteCookie', () => {
    setCookie('to_delete', 'some_value');
    expect(getCookie('to_delete')).toBe('some_value');
    deleteCookie('to_delete');
    expect(getCookie('to_delete')).toBeNull();
  });
});
