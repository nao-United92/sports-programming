const { setCookie, getCookie, eraseCookie } = require('./cookie-handler');

// Clear cookies before each test
beforeEach(() => {
  document.cookie.split(';').forEach(cookie => {
    const name = cookie.split('=')[0].trim();
    if (name) eraseCookie(name);
  });
});

describe('Cookie Handler', () => {
  test('setCookie should set a cookie', () => {
    setCookie('testCookie', 'testValue', 1);
    expect(document.cookie).toContain('testCookie=testValue');
  });

  test('getCookie should retrieve a cookie value', () => {
    setCookie('testCookie', 'testValue', 1);
    expect(getCookie('testCookie')).toBe('testValue');
  });

  test('getCookie should return null if cookie does not exist', () => {
    expect(getCookie('nonExistentCookie')).toBeNull();
  });

  test('eraseCookie should remove a cookie', () => {
    setCookie('testCookie', 'testValue', 1);
    expect(document.cookie).toContain('testCookie=testValue');
    eraseCookie('testCookie');
    expect(document.cookie).not.toContain('testCookie=testValue');
  });

  test('setCookie should handle special characters in value', () => {
    const valueWithSpecialChars = 'value with spaces,;=special';
    setCookie('specialCookie', valueWithSpecialChars, 1);
    expect(getCookie('specialCookie')).toBe(valueWithSpecialChars);
  });
});
