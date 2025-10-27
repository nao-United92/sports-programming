import { setCookie, getCookie, deleteCookie } from './cookie-utils';

describe('cookie-utils', () => {
  // Mock document.cookie
  let cookies = {};
  let mockCookieSetter = jest.fn(value => {
    const parts = value.split(';')[0].split('=');
    const name = parts[0];
    const val = parts.slice(1).join('=');
    cookies[name] = val;

    // Handle expiration for deletion
    if (value.includes('Max-Age=-99999999')) {
      delete cookies[name];
    }
  });

  let mockCookieGetter = jest.fn(() => {
    return Object.keys(cookies)
      .map(key => `${key}=${cookies[key]}`)
      .join('; ');
  });

  Object.defineProperty(document, 'cookie', {
    get: mockCookieGetter, // jest.fn() のインスタンスを割り当てる
    set: mockCookieSetter, // jest.fn() のインスタンスを割り当てる
    configurable: true,
  });

  beforeEach(() => {
    cookies = {}; // Clear cookies before each test
    mockCookieSetter.mockClear(); // set アクセサのモックの呼び出し履歴をクリア
    mockCookieGetter.mockClear(); // get アクセサのモックの呼び出し履歴をクリア
  });

  describe('setCookie', () => {
    test('should set a cookie with name and value', () => {
      setCookie('testName', 'testValue');
      expect(mockCookieSetter).toHaveBeenCalledWith('testName=testValue; path=/');
      expect(cookies).toEqual({ testName: 'testValue' });
    });

    test('should set a cookie with expiration days', () => {
      const date = new Date();
      date.setTime(date.getTime() + (7 * 24 * 60 * 60 * 1000));
      const expectedExpires = '; expires=' + date.toUTCString();

      setCookie('testName', 'testValue', 7);
      expect(mockCookieSetter).toHaveBeenCalledWith(expect.stringContaining('testName=testValue' + expectedExpires + '; path=/'));
      expect(cookies).toEqual({ testName: 'testValue' });
    });

    test('should set a cookie with empty value', () => {
      setCookie('emptyCookie', '');
      expect(mockCookieSetter).toHaveBeenCalledWith('emptyCookie=; path=/');
      expect(cookies).toEqual({ emptyCookie: '' });
    });
  });

  describe('getCookie', () => {
    test('should get an existing cookie by name', () => {
      setCookie('testName', 'testValue');
      setCookie('anotherCookie', 'anotherValue');
      expect(getCookie('testName')).toBe('testValue');
    });

    test('should return null for a non-existent cookie', () => {
      expect(getCookie('nonExistent')).toBeNull();
    });

    test('should handle cookies with spaces', () => {
      // Directly set the mock cookie string for this test
      mockCookieGetter.mockImplementationOnce(() => '  testName=testValue; anotherCookie=anotherValue');
      expect(getCookie('testName')).toBe('testValue');
    });
  });

  describe('deleteCookie', () => {
    test('should delete an existing cookie', () => {
      setCookie('testName', 'testValue');
      expect(getCookie('testName')).toBe('testValue');

      deleteCookie('testName');
      expect(mockCookieSetter).toHaveBeenCalledWith('testName=; Max-Age=-99999999; path=/');
      expect(getCookie('testName')).toBeNull();
      expect(cookies).toEqual({});
    });

    test('should do nothing if cookie does not exist', () => {
      deleteCookie('nonExistent');
      expect(mockCookieSetter).toHaveBeenCalledWith('nonExistent=; Max-Age=-99999999; path=/');
      expect(getCookie('nonExistent')).toBeNull();
    });
  });
});