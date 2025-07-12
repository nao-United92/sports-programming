import { setCookie, getCookie, deleteCookie } from './cookie-utils.js';

describe('cookie-utils', () => {
  beforeEach(() => {
    // Clear all cookies before each test
    const cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i];
      const eqPos = cookie.indexOf('=');
      const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
      document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:00 GMT';
    }
  });

  it('should set and get a cookie', () => {
    setCookie('test', '123', 1);
    expect(getCookie('test')).toBe('123');
  });

  it('should delete a cookie', () => {
    setCookie('test', '123', 1);
    deleteCookie('test');
    expect(getCookie('test')).toBeNull();
  });
});
