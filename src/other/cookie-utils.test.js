import { getCookie, setCookie, deleteCookie } from './cookie-utils.js';

describe('cookie-utils', () => {
  let cookies = {};

  Object.defineProperty(document, 'cookie', {
    get: jest.fn(() => {
      return Object.keys(cookies).map(key => `${key}=${cookies[key]}`).join('; ');
    }),
    set: jest.fn((cookieString) => {
      const [nameValue, ...rest] = cookieString.split(';');
      const [name, value] = nameValue.split('=');
      if (value === undefined || rest.includes('expires=Thu, 01 Jan 1970 00:00:00 GMT')) {
        delete cookies[name];
      } else {
        cookies[name] = value;
      }
    }),
    configurable: true,
  });

  beforeEach(() => {
    cookies = {}; // Clear cookies before each test
  });

  test('setCookie and getCookie', () => {
    setCookie('test', 'value');
    expect(getCookie('test')).toBe('value');
  });

  test('setCookie with expiration', () => {
    setCookie('test', 'value', { days: 1 });
    expect(document.cookie).toContain('test=value'); // Check if the cookie is set
  });

  test('setCookie with path', () => {
    setCookie('test', 'value', { path: '/' });
    expect(document.cookie).toContain('test=value'); // Check if the cookie is set
  });

  test('deleteCookie', () => {
    setCookie('test', 'value');
    deleteCookie('test');
    expect(getCookie('test')).toBe(null);
  });

  test('getCookie for non-existent cookie', () => {
    expect(getCookie('nonexistent')).toBe(null);
  });
});
