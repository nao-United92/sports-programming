import { getCookieByName } from './get-cookie-by-name-utils.js';

describe('getCookieByName', () => {
  const originalCookie = Object.getOwnPropertyDescriptor(document, 'cookie');

  beforeAll(() => {
    Object.defineProperty(document, 'cookie', {
      writable: true,
    });
  });

  afterAll(() => {
    Object.defineProperty(document, 'cookie', originalCookie);
  });

  beforeEach(() => {
    document.cookie = '';
  });

  test('should return the value of a cookie', () => {
    document.cookie = 'myCookie=myValue';
    document.cookie = 'anotherCookie=anotherValue';
    expect(getCookieByName('myCookie')).toBe('myValue');
  });

  test('should return null if the cookie is not found', () => {
    document.cookie = 'myCookie=myValue';
    expect(getCookieByName('nonExistentCookie')).toBeNull();
  });

  test('should handle multiple cookies correctly', () => {
    document.cookie = 'cookie1=value1';
    document.cookie = 'cookie2=value2';
    document.cookie = 'cookie3=value3';
    expect(getCookieByName('cookie2')).toBe('value2');
  });

  test('should handle cookies with special characters in value', () => {
    const specialValue = 'value with spaces and =;';
    document.cookie = `specialCookie=${encodeURIComponent(specialValue)}`;
    expect(getCookieByName('specialCookie')).toBe(specialValue);
  });

  test('should return null when there are no cookies', () => {
    expect(getCookieByName('anyCookie')).toBeNull();
  });

  test('should handle encoded cookie names', () => {
    const specialName = 'cookie;name';
    document.cookie = `${encodeURIComponent(specialName)}=value`;
    expect(getCookieByName(specialName)).toBe('value');
  });
});
