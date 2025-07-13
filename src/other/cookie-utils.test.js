import { setCookie, getCookie, deleteCookie } from './cookie-utils';

describe('cookie-utils', () => {
  // Clear all cookies before each test to ensure a clean state
  beforeEach(() => {
    document.cookie.split(';').forEach(function(c) {
      document.cookie = c.replace(/^ +/, '').replace(/=.*/, '=;expires=' + new Date().toUTCString() + ';path=/');
    });
  });

  test('setCookie should set a cookie', () => {
    setCookie('testName', 'testValue');
    expect(document.cookie).toContain('testName=testValue');
  });

  test('setCookie should set a cookie with options', () => {
    const expires = new Date(Date.now() + 1000 * 60 * 60).toUTCString(); // 1 hour from now
    setCookie('testName2', 'testValue2', { expires, path: '/testpath', secure: true });
    expect(document.cookie).toContain('testName2=testValue2');
    expect(document.cookie).toContain(`expires=${expires}`);
    expect(document.cookie).toContain('path=/testpath');
    expect(document.cookie).toContain('secure');
  });

  test('getCookie should retrieve a cookie value', () => {
    document.cookie = 'myCookie=myValue';
    expect(getCookie('myCookie')).toBe('myValue');
  });

  test('getCookie should return null if cookie not found', () => {
    expect(getCookie('nonExistentCookie')).toBeNull();
  });

  test('deleteCookie should delete a cookie', () => {
    setCookie('cookieToDelete', 'value');
    expect(getCookie('cookieToDelete')).toBe('value');

    deleteCookie('cookieToDelete');
    expect(getCookie('cookieToDelete')).toBeNull();
  });
});